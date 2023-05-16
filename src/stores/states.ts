import { atom } from 'nanostores';


/* Page state */

export enum PageState {
	MapBrowse,
	MapPreview,
	StationDetails,
	VictoryScreen,
}

export const pageStateAtom = atom<PageState>(PageState.MapBrowse);

export function setPageState(value: PageState) {
	pageStateAtom.set(value);
	pageStateAtom.notify();
}


/* Station state */

export enum StationState {
	Password,
	Information,
	Quiz,
	Result,
}

export const stationStateAtom = atom<StationState>(StationState.Password);

export function setStationState(value: StationState) {
	stationStateAtom.set(value);
	stationStateAtom.notify();
}
