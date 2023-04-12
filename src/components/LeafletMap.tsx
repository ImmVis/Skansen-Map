import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup, Rectangle, ImageOverlay, useMap } from 'react-leaflet';
import L from 'leaflet';
import { LatLngBounds } from 'leaflet';
import { useState } from "react";


// const iconMap = new L.Icon({
// 	iconUrl: '/Skansenkarta_2022.png',
// 	iconRetinaUrl: '/Skansenkarta_2022.png',
// 	iconSize: new L.Point(32, 32),
// });

const iconMarker = new L.Icon({
	iconUrl: '/marker.gif',
	iconRetinaUrl: '/marker.gif',
	className: 'map-marker',
	// iconAnchor: null,
	// popupAnchor: null,
	// shadowUrl: null,
	// shadowSize: null,
	// shadowAnchor: null,
	iconSize: new L.Point(64, 64),
	// className: 'leaflet-div-icon'
	popupAnchor: [0, -64],
	iconAnchor: [32, 64],
});

export default function Map({ center, stations, onStationClick }: any) {
	// Upper Left (18.096900, 59.330333)
	// Lower Left (18.096900, 59.322608)
	// Upper Right (18.112642, 59.330333)
	// Lower Right (18.112642, 59.322608)
	// Center a (18.104770, 59.326474)

	const bounds = new LatLngBounds(
		{ // South west
			lng: 18.096900,
			lat: 59.322608,
		},
		{ // North east
			lng: 18.112642,
			lat: 59.330333,
		},
	);
	console.log("RERENDER MAP");
	// const bounds = [
	// 	[
	// 		center.lat - height / 2,
	// 		center.lng - width / 2
	// 	],
	// 	[
	// 		center.lat + height / 2,
	// 		center.lng + width / 2
	// 	]
	// ];

	function onMarkerClick(station: any) {
		onStationClick(station);
	}

	return (
		// minZoom={16} maxZoom={18}
		<MapContainer className="map-container" center={center} zoom={15} minZoom={15} maxBounds={bounds} boundsOptions={{}} scrollWheelZoom={true} wheelPxPerZoomLevel={1000000} maxBoundsViscosity={1} >
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{stations.map((station: any) => (
				<Marker key={station.data.name} position={station.data.position} icon={iconMarker} eventHandlers={{ click: () => onMarkerClick(station) }}>
					{/* <Popup className="map-popup"> */}
					{/* <p>{station.data.name}</p> */}
					{/* <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
							Utforska
						</button> */}
					{/* </Popup> */}
				</Marker>
			))}
			<ImageOverlay
				url="/Skansen_map_georeff_v1.png"
				bounds={bounds}
				opacity={1.0}
				className="map-background"
			/>
			{/* <Rectangle bounds={bounds} pathOptions={{ color: 'yellow' }} /> */}

			<ChangeView center={center} />
		</MapContainer>
	);
}


function ChangeView({ center }: any) {
	console.log("MOVE", center);
	const map = useMap();
	map.setView(center);
	return null;
}

