// store/stations.ts
import { atom } from 'nanostores';

export interface StationAtom {
	id: string;
	hasVisited: boolean;
	visitCount: number;
	passwordCorrect: boolean;
}

export const atomStations = atom<StationAtom[]>([]);

export function getStationAtom(stationId: string) {
	const station = atomStations.get().find(s => s.id == stationId);
	if (station) {
		return station;
	}
	else {
		const newStation = {
			id: stationId,
			hasVisited: false,
			visitCount: 0,
			passwordCorrect: false
		};
		atomStations.set([...atomStations.get(), newStation]);
		return newStation;
	}
}

export function visitStationAtom(stationId: string) {
	const station = getStationAtom(stationId);
	station.hasVisited = true;
	station.visitCount += 1;
	atomStations.notify();
}

export function unlockStationAtom(stationId: string) {
	const station = getStationAtom(stationId);
	station.passwordCorrect = true;
	console.log("Pog");
	atomStations.notify();
}

// export function addStation(station: Station) {

// 	const s = getStation(station.id);
// 	if (s) {
// 		s.visitCount += 1;
// 		atomStations.notify();
// 	}
// 	else {
// 		atomStations.set([...atomStations.get(), station]);
// 	}
// }

// addStation({
	// id: "station_skog",
	// hasVisited: true,
	// visitCount: 3,
// });



// store/admins.ts
import { computed } from 'nanostores';
// import { atomStations } from './stations.js';

export const visitedStations = computed(atomStations, allStations =>
	allStations.filter(station => station.hasVisited)
)

export const unlockedStations = computed(atomStations, allStations =>
	allStations.filter(station => station.passwordCorrect)
)
