import { useState } from "react";
import { StationData, getAllStations } from "@/helpers/StationHelper";
import Panel from "@/components/Panel";

import MyMap from "@/components/GoogleMap";
import { addStation } from "@/stores/stations";
// const MyMap = dynamic(() => import("@/components/LeafletMap"), { ssr: false });


export default function Home({ stations, googleMapsApiKey }: { stations: StationData[], googleMapsApiKey: string }) {

	const [center, setCenter] = useState({
		lat: 59.32650223048287,
		lng: 18.10463536192017
	});


	const [selectedStation, setStation] = useState("");
	const currentStation: StationData | undefined = stations.find(station => station.data.id == selectedStation);
	function onStationClick(station: StationData | null) {
		if (station) {
			setCenter({
				lng: station.data.position.lng,
				lat: station.data.position.lat,
			});
			setStation(station.data.id);
		}
		else {
			setStation("");
		}
	}


	const [visitingStation, setVisitingStation] = useState("");
	const currentVisitingStation: StationData | undefined = stations.find(station => station.data.id == visitingStation);
	function onVisitStation(station: StationData | null) {
		if (station) {
			setVisitingStation(station.data.id);
			addStation({
				name: station.data.name,
				hasVisited: true,
				visitCount: 1,
			});
		}
		else {
			setVisitingStation("");
		}
	}


	return (
		<main className="w-full h-full flex flex-col">
			<div className={`map-wrapper ${visitingStation ? "active" : ""}`}>
				<MyMap googleMapsApiKey={googleMapsApiKey} center={center} stations={stations} selectedStation={currentStation} onStationClick={onStationClick}></MyMap>
			</div>

			<div className={`panel-wrapper ${currentStation ? "active" : ""}`}>
				<Panel
					stations={stations}
					selectedStation={currentStation}
					isExploring={!!visitingStation}
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
	console.log("MAIN getStaticProps!");

	return {
		props: {
			stations: await getAllStations(),
			googleMapsApiKey: process.env.SECRET_API_KEY,
		}
	};
}
