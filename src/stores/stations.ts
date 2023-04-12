// store/stations.ts
import { atom } from 'nanostores';

interface Station {
	name: string;
	hasVisited: boolean;
	visitCount: number;
}

export const stations = atom<Station[]>([])

export function addStation(station: Station) {

	const s = stations.get().find(s => s.name == station.name);
	if (s) {
		s.visitCount += 1;
		stations.notify();
	}
	else {
		stations.set([...stations.get(), station]);
	}
}

addStation({
	name: "Skog",
	hasVisited: true,
	visitCount: 3,
});

addStation({
	name: "Stad",
	hasVisited: false,
	visitCount: 0,
});


addStation({
	name: "Hav",
	hasVisited: true,
	visitCount: 1,
});



// store/admins.ts
import { computed } from 'nanostores';
// import { stations } from './stations.js';

export const visitedStations = computed(stations, allStations =>
	allStations.filter(station => station.hasVisited)
)
