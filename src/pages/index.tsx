import { useEffect, useRef, useState } from "react";
import { useStore } from "@nanostores/react";
import { StationData, getAllStations } from "@/helpers/StationHelper";
import { Panel } from "@/components/Panel";
import { pageStateAtom, PageState, setPageState, stationStateAtom, setStationState, StationState } from "@/stores/states";

import { MyMap } from "@/components/GoogleMap";
import { atomVisitStation, completedAtomStations } from "@/stores/stationStorage";
// const MyMap = dynamic(() => import("@/components/LeafletMap"), { ssr: false });

export default function Home({ stations, googleMapsApiKey, test }: { stations: StationData[], googleMapsApiKey: string, test: string }) {
	const [center, setCenter] = useState({
		lat: 59.32650223048287,
		lng: 18.10463536192017
	});

	const pageState = useStore(pageStateAtom);
	const stationState = useStore(stationStateAtom);
	const completedStations = useStore(completedAtomStations);

	const [selectedStation, setSelectedStation] = useState("");
	function onStationClick(station: StationData | null) {
		if (station) {
			setCenter({
				lng: station.data.position.lng,
				lat: station.data.position.lat,
			});
			setSelectedStation(station.data.id);
			setPageState(PageState.MapPreview);
		}
		else {
			setSelectedStation("");
			setPageState(PageState.MapBrowse);
		}
	}

	const currentStation: StationData | undefined = stations.find(station => station.data.id == selectedStation);

	function onVisitStation(station: StationData | null) {
		if (station) {
			atomVisitStation(station.data.id);
			setPageState(PageState.StationDetails);
		}
		else {
			setPageState(PageState.MapBrowse);
		}
	}


	const panel = useRef<HTMLDivElement>(null);
	useEffect(() => {
		panel.current?.scrollTo(0, 0);
	}, [stationState]);

	useEffect(() => {
		if (pageState == PageState.MapBrowse) {
			setSelectedStation("");
			// const pos = watchUserLocation(setCenter);
		}
	}, [pageState]);


	const panelFullscreen = (pageState != PageState.MapBrowse);
	const mapHide = !(pageState == PageState.MapBrowse || pageState == PageState.MapPreview);


	return (
		<main className="wrapper" style={{ minHeight: '-webkit-fill-available' }}>
			<div className={`map-wrapper ${mapHide ? "active" : ""}`}>
				<MyMap googleMapsApiKey={googleMapsApiKey} center={center} stations={stations} completedStations={completedStations} selectedStation={currentStation} onStationClick={onStationClick}></MyMap>
			</div>

			<div ref={panel} className={`panel-wrapper ${panelFullscreen ? "active" : ""}`}>
				<Panel
					stations={stations}
					completedStations={completedStations}
					selectedStation={currentStation}
					onExplore={() => {
						onVisitStation(currentStation!);
					}}
					onClose={() => {
						onStationClick(null);
						onVisitStation(null);
					}}
				/>
			</div>
		</main>
	)
}


export async function getStaticProps() {
	return {
		props: {
			stations: await getAllStations(),
			googleMapsApiKey: process.env.SECRET_API_KEY,
		}
	};
}
