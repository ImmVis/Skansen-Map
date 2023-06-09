import { useState, useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Circle, GroundOverlay, Marker } from '@react-google-maps/api';
import { UserLocation } from "./UserLocation";
import { StationData } from "@/helpers/StationHelper";
import { StationAtom, completedAtomStations } from "@/stores/stationStorage";

import checkPin from "@/assets/geoTag-check.svg";


const containerStyle = {
	width: '100%',
	height: '100%'
};

type MapProps = {
	googleMapsApiKey: string;
	center: { lat: number, lng: number };
	stations: StationData[];
	completedStations: StationAtom[];
	selectedStation: StationData | undefined;
	onStationClick: (station: StationData | null) => void;
}

export function MyMap({ googleMapsApiKey, center, stations, completedStations, selectedStation, onStationClick }: MapProps) {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: googleMapsApiKey
	})

	const [map, setMap] = useState<google.maps.Map | null>(null);

	const onLoad = useCallback(function callback(map: google.maps.Map) {
		const bounds = new window.google.maps.LatLngBounds(
			new google.maps.LatLng( // South west
				59.3230,
				18.0979,
			),
			new google.maps.LatLng( // North east
				59.3307,
				18.1122,
			),
		);

		// const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds, 0);
		map.panTo(center);

		setMap(map)
	}, [center])

	const onUnmount = useCallback(function callback(map: any) {
		setMap(null)
	}, []);

	const skansenBounds = {
		north: 59.330333,
		south: 59.322608,
		east: 18.112642,
		west: 18.096900,
	};

	const boundsHeight = (skansenBounds.north - skansenBounds.south) / 2;
	const boundsWidth = (skansenBounds.east - skansenBounds.west) / 2;
	const cameraBounds = !selectedStation ? skansenBounds : {
		north: selectedStation.data.position.lat + boundsHeight,
		south: selectedStation.data.position.lat - boundsHeight,
		east: selectedStation.data.position.lng + boundsWidth,
		west: selectedStation.data.position.lng - boundsWidth,
	};

	map?.panTo(center);
	map?.setOptions({
		// restriction: !selectedStation ? {
		// 	latLngBounds: cameraBounds,
		// 	strictBounds: false
		// } : null,
		gestureHandling: !selectedStation ? "greedy" : "none",
		maxZoom: 19
	});


	return isLoaded ? (
		<div className='map-container'>
			<GoogleMap
				mapContainerStyle={containerStyle}
				// center={center}
				// restriction={{
				// latLngBounds: bounds,
				// strictBounds: false,
				// }}
				zoom={11}
				heading={90}
				tilt={45}
				onLoad={onLoad}
				onUnmount={onUnmount}
				options={{
					controlSize: null,
					// mapTypeControlOptions: {
					// mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID]
					// },
					disableDefaultUI: true,
					styles: [
						{
							featureType: "poi",
							elementType: "labels",
							stylers: [
								{
									visibility: "off"
								}
							]
						}
					]
				}}
			>

				<GroundOverlay
					key={'url'}
					// url='https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg'
					url='/Skansen_map_georeff_v1.png'
					bounds={skansenBounds}
					opacity={1.0}
					onClick={() => { onStationClick(null) }}
				/>

				{stations.map((station: StationData) => (
					<Marker
						key={station.data.name}
						position={station.data.position}
						onClick={() => { onStationClick(station) }}
						animation={selectedStation == station ? google.maps.Animation.BOUNCE : undefined}
						options={{
							icon: {
								url: (completedStations.find(s => s.id == station.data.id)) ? checkPin.src : station.data.pin,
								// url: station.data.pin,
								scaledSize: new google.maps.Size(80, 80),
								anchor: new google.maps.Point(40, 80),

								// url: station.data.icon,
								// scaledSize: new google.maps.Size(100, 100),
							}
						}}>
						<p>{station.data.name}</p>
					</Marker>
				))}

				<UserLocation />
			</GoogleMap>
		</div>
	) : <></>
}
