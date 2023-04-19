import { useStore } from "@nanostores/react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { StationData } from "@/helpers/StationHelper";
import { getCustomComponents } from "@/components/CustomComponents";
import { unlockedStations, unlockStationAtom, StationAtom } from "@/stores/stations";
import { PasswordPrompt } from "@/components/Password";
import { State } from "@/helpers/State";

import startImage from "@/assets/skansen-treasureHunt-2youth.svg";


type PanelProps = {
	state: State;
	stations: StationData[];
	selectedStation: StationData | undefined;
	onStart: any;
	onExplore: any;
	onClose: any;
}

export function Panel({ state, stations, selectedStation, onStart, onExplore, onClose }: PanelProps) {
	const stores = useStore(unlockedStations);

	function getStationAtom(stationId: string) {
		return stores.find(s => s.id == stationId);
	}

	return (
		<div className="panel-content">

			{/* State: {state == State.StartPage ? "StartPage" : state == State.InfoPage ? "InfoPage" : state == State.MapBrowse ? "MapBrowse" : state == State.MapSelect ? "MapSelect" : state == State.StationPassword ? "StationPassword" : state == State.StationDetails ? "StationDetails" : state == State.StationQuiz ? "StationQuiz" : state == State.StationResult ? "StationResult" : ""} */}

			{/* Info page */}
			<div style={{width: "75%", margin: "auto"}} className={`pt-10 text-left ${!(state == State.StartPage) && "hidden"}`}>
				<small>
					Välkommen till
				</small>
				<h1 className="font-extrabold">
					Skansens Tipspromenad
				</h1>
				<p>
					Ta en tur i parken och utforska natur, djur och kultur.
					Vid varje station hittar du en kod bestående av symboler.
					Tryck in rätt kod i mobilen för att låsa upp stationen.
					Se, lyssna och läs och svara på några kluriga frågor.
					Lycka till!
				</p>

				<div className="text-center">
				<button className="panel-big-button" onClick={onStart}>
					Starta tipspromenad
				</button>
				<button className="panel-text-button">
					Hur spelar jag?
				</button>
				</div>

				<Image alt="flag" src={startImage} />
			</div>

			{/* No station selected */}
			<div className={`flex flex-col h-full justify-center ${!(state == State.MapBrowse) && "hidden"}`}>
				<span className="font-extrabold">Tryck på en station</span>
			</div>


			{/* Station preview info */}
			{stations.map(station => (
				<div key={station.data.id + "preview"} className={`flex flex-col h-full justify-center ${!(state == State.MapSelect && station == selectedStation) && "hidden"}`}>
					<span className="text-xl font-extrabold pt-3">{station.data.name}</span>
					<Image width={256} height={256} className="panel-preview-image flex-1" alt={station.data.image} src={station.data.image} />
					<div className="mb-6">
					<button className="panel-big-button" onClick={onExplore}>
						{getStationAtom(station.data.id)?.passwordCorrect
							? "Utforska"
							: "Lås upp"
						}
					</button>
					</div>

					<button className="panel-close-button" onClick={onClose}>&times;</button>
				</div>
			))}


			{/* Station detailed info */}
			{stations.map(station => (
				<div key={station.data.id + "detail"} className={`px-4 pt-16 pb-8 ${!(state == State.StationDetails && station == selectedStation) && "hidden"}`}>
					<StationContent station={station} atom={getStationAtom(station.data.id)} onClose={onClose} />
				</div>
			))}
		</div>
	);
}


function StationContent({ station, atom, onClose }: { station: StationData, atom?: StationAtom, onClose: any }) {
	function onPasswordCorrect() {
		unlockStationAtom(station.data.id)
	}

	return (
		<>
			<div className={`${!atom?.passwordCorrect && "hidden"}`} >
				<Image width={256} height={256} className="m-auto w-64 h-32 object-cover rounded-full" alt={station.data.image} src={station.data.image} />

				<MDXRemote {...station.content} components={getCustomComponents(station.mdxPath)} />

				<button className="panel-big-button" onClick={onClose}>
					Gå tillbaka
				</button>
				<button className="panel-close-button" onClick={onClose}>
					&times;
				</button>
			</div>

			<div className={`${atom?.passwordCorrect && "hidden"}`} >
				<h1>
					Skriv in lösenord
				</h1>
				<p>
					Vid stationen hittar du koden uhh någonstans. För tillfället är koden 1 2 3 4.
				</p>
				<PasswordPrompt symbols={station.data.symbols || []} password={station.data.password || []} onSuccess={onPasswordCorrect} />

				<button className="panel-big-button" onClick={onClose}>
					Gå tillbaka
				</button>
			</div>
		</>
	);
}
