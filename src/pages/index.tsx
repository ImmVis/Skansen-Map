import { useState } from "react";
import { StationData, getAllStations } from "@/helpers/StationHelper";
import { Panel } from "@/components/Panel";
import { State } from "@/helpers/State";

import MyMap from "@/components/GoogleMap";
import { getStationAtom, visitStationAtom } from "@/stores/stations";
// const MyMap = dynamic(() => import("@/components/LeafletMap"), { ssr: false });


export default function Home({ stations, googleMapsApiKey }: { stations: StationData[], googleMapsApiKey: string }) {

	const [center, setCenter] = useState({
		lat: 59.32650223048287,
		lng: 18.10463536192017
	});

	const [state, setState] = useState<State>(State.MapBrowse);

	const [selectedStation, setStation] = useState("");
	function onStationClick(station: StationData | null) {
		if (station) {
			setCenter({
				lng: station.data.position.lng,
				lat: station.data.position.lat,
			});
			setStation(station.data.id);
			setState(State.MapSelect);
		}
		else {
			setStation("");
			setState(State.MapBrowse);
		}
	}
	
	const currentStation: StationData | undefined = stations.find(station => station.data.id == selectedStation);

	const [visitingStation, setVisitingStation] = useState("");
	// const currentVisitingStation: StationData | undefined = stations.find(station => station.data.id == visitingStation);
	function onVisitStation(station: StationData | null) {
		if (station) {
			setVisitingStation(station.data.id);
			visitStationAtom(station.data.id);
			setState(State.StationDetails);
		}
		else {
			setVisitingStation("");
			setState(State.MapBrowse);
		}
	}


	// let state = PanelState.Start;
	// if (!selectedStation) {
		// state = PanelState.Map;
	// }
	// if (visitingStation) {
		// state = PanelState.Station;
	// }


	const panelFullscreen = !(state == State.MapBrowse);
	const mapHide = !(state == State.MapBrowse || state == State.MapSelect);


	return (
		<main className="wrapper" style={{minHeight: '-webkit-fill-available'}}>
			<div className={`map-wrapper ${mapHide ? "active" : ""}`}>
				<MyMap googleMapsApiKey={googleMapsApiKey} center={center} stations={stations} selectedStation={currentStation} onStationClick={onStationClick}></MyMap>
			</div>

			<div className={`panel-wrapper ${panelFullscreen ? "active" : ""}`}>
				<Panel
					state={state}
					stations={stations}
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
