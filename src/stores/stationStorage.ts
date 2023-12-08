// store/stations.ts
import { StationMeta } from '@/helpers/StationHelper';
import { atom, computed } from 'nanostores';


export interface StationAtom {
	id: string;
	hasVisited: boolean;
	visitCount: number;
	passwordCorrect: boolean;
	quiz: {
		answers: number[];
		correct: boolean[];
		submitted: boolean;
	}
}

export const atomStations = atom<StationAtom[]>([]);

function newStationAtom(stationId: string) {
	return {
		id: stationId,
		hasVisited: false,
		visitCount: 0,
		passwordCorrect: true,
		quiz: {
			answers: [],
			correct: [],
			submitted: false
		}
	};
}

export function getStationAtom(stationId: string, createIfMissing=false): StationAtom {
	const station = atomStations.get().find(s => s.id == stationId);
	if (station) {
		return station;
	}

	const newStation: StationAtom = newStationAtom(stationId);
	if (createIfMissing) {
		atomStations.set([...atomStations.get(), newStation]);
	}
	return newStation;
}


export function atomVisitStation(stationId: string) {
	const station = getStationAtom(stationId, true);
	station.hasVisited = true;
	station.visitCount += 1;
	atomStations.notify();
}

export function atomUnlockStation(stationId: string) {
	const station = getStationAtom(stationId, true);
	station.passwordCorrect = true;
	atomStations.notify();
}

export function atomSetQuizAnswer(stationId: string, questionIndex: number, optionIndex: number, correct: boolean) {
	const station = getStationAtom(stationId, true);
	station.quiz.answers[questionIndex] = optionIndex;
	station.quiz.correct[questionIndex] = correct;
	atomStations.notify();
}

export function atomSubmitQuiz(stationId: string) {
	const station = getStationAtom(stationId, true);
	station.quiz.submitted = true;
	atomStations.notify();
}


export const visitedAtomStations = computed(atomStations, allStations =>
	allStations.filter(station => station.hasVisited)
)

export const unlockedAtomStations = computed(atomStations, allStations =>
	allStations.filter(station => station.passwordCorrect)
)

export const completedAtomStations = computed(atomStations, allStations =>
	allStations.filter(station => station.quiz.submitted)
)
