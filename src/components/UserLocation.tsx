import { Marker, Circle } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

import locationImage from "@/assets/location.png";


export function UserLocation() {
	const [visible, setVisible] = useState(false);
	const [center, setCenter] = useState({
		lat: 0,
		lng: 0
	});
	const [accuracy, setAccuracy] = useState(100);

	useEffect(() => {
		console.log("WHAT");
		const options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		};

		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(
				(position) => {
					console.log("FOUND YA", position);
					setCenter({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
					setAccuracy(position.coords.accuracy);
					setVisible(true);
				},
				(error) => {
					console.error("oh no", error);
				},
				options);
		} else {
			console.error("Unable to use geolocation");
		}
	}, []);

	return (
		<>
			<Circle
				options={{
					center: center,
					// clickable: boolean|null,
					// draggable: boolean|null,
					// editable: boolean|null,
					fillColor: "#4185f5",
					fillOpacity: 0.25,
					radius: accuracy,
					strokeColor: "#4185f5",
					strokeOpacity: 0.5,
					// strokePosition: google.maps.StrokePosition|null,
					strokeWeight: 2,
					visible: visible,
					// zIndex: number|null,
				}}
			/>

			<Marker
				position={center}
				options={{
					icon: {
						url: "./location.svg",
						scaledSize: new google.maps.Size(50, 50),
						anchor: new google.maps.Point(25, 25),

						// url: station.data.icon,
						// scaledSize: new google.maps.Size(100, 100),
					}
				}}
			/>

			{/* <Circle
				center={center}
				options={{
					// clickable: boolean|null,
					// draggable: boolean|null,
					// editable: boolean|null,
					fillColor: "#0000FF",
					fillOpacity: 1,
					radius: 16,
					strokeColor: "#FFFFFF",
					strokeOpacity: 1,
					// strokePosition: google.maps.StrokePosition|null,
					strokeWeight: 4,
					// visible: boolean|null,
					// zIndex: number|null,
				}}
			/> */}
		</>
	);
}
