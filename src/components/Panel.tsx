import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { QuestionMeta, StationData } from "@/helpers/StationHelper";
import { getCustomComponents } from "@/components/CustomComponents";
import { unlockedStations, atomUnlockStation, StationAtom, atomSubmitQuiz } from "@/stores/stationStorage";
import { PasswordPrompt } from "@/components/Password";
import { State } from "@/helpers/State";
import { BigButton, CloseButton, TextButton } from "./Buttons";

import startImage from "@/assets/skansen-treasureHunt-2youth.svg";
import infoImage from "@/assets/skansen-treasureHunt-6youth.svg";
import Quiz from "./Quiz";


type PanelProps = {
	state: State;
	stations: StationData[];
	selectedStation: StationData | undefined;
	onExplore: any;
	onClose: any;
}

export function Panel({ state, stations, selectedStation, onExplore, onClose }: PanelProps) {
	const stores = useStore(unlockedStations);

	function getStationAtom(stationId: string) {
		return stores.find(s => s.id == stationId);
	}

	return (
		<div className="panel-content">

			{/* No station selected */}
			<div className={`flex flex-col h-full justify-center ${!(state == State.MapBrowse) ? "hidden" : ""}`}>
				<span className="font-extrabold">Tryck på en station</span>
			</div>


			{/* Station preview info */}
			{stations.map(station => (
				<div key={station.data.id + "preview"} className={`flex flex-col h-full justify-center ${!(state == State.MapSelect && station == selectedStation) ? "hidden" : ""}`}>
					<span className="text-xl font-extrabold pt-3">{station.data.name}</span>
					<Image width={256} height={256} className="panel-preview-image flex-1" alt={station.data.image} src={station.data.image} />
					<div className="mb-6">
						<BigButton onClick={onExplore}>
							{getStationAtom(station.data.id)?.passwordCorrect
								? "Utforska"
								: "Lås upp"
							}
						</BigButton>
					</div>

					<CloseButton onClick={onClose}>
						&times;
					</CloseButton>
				</div>
			))}


			{/* Station detailed info */}
			{stations.map(station => (
				<div key={station.data.id + "detail"} className={`p-4 ${!(state == State.StationDetails && station == selectedStation) ? "hidden" : ""}`}>
					<StationContent station={station} atom={getStationAtom(station.data.id)} onClose={onClose} />
				</div>
			))}
		</div>
	);
}


function StationContent({ station, atom, onClose }: { station: StationData, atom?: StationAtom, onClose: any }) {
	let [mode, setMode] = useState<string>("info");

	// useEffect(() => {}, [mode]);

	function onPasswordCorrect() {
		atomUnlockStation(station.data.id)
	}

	function onQuizComplete() {
		atomSubmitQuiz(station.data.id);
	}


	if (!atom?.passwordCorrect) {
		mode = "password";
	}

	if (atom?.quiz.submitted) {
		mode = "result";
	}


	return (
		<>
			<div className={`${mode != "password" ? "hidden" : ""}`} >
				<h1>
					Skriv in lösenord
				</h1>
				<p>
					Vid stationen hittar du koden uhh någonstans. För tillfället är koden 1 2 3 4.
				</p>
				<PasswordPrompt symbols={station.data.symbols || []} password={station.data.password || []} onSuccess={onPasswordCorrect} />

				<BigButton onClick={onClose}>
					Gå tillbaka
				</BigButton>
			</div>

			<div className={`${mode != "info" ? "hidden" : ""}`} >
				<Image width={256} height={256} className="m-auto w-64 h-32 object-cover rounded-full" alt={station.data.image} src={station.data.image} />

				<MDXRemote {...station.content} components={getCustomComponents(station.mdxPath)} />

				<div className="mt-12 mb-8">
					<BigButton onClick={() => setMode("quiz")}>
						Starta frågesport
					</BigButton>
					<br />
					<TextButton onClick={onClose}>
						Gå tillbaka
					</TextButton>
				</div>
			</div>

			<div className={`${mode != "quiz" ? "hidden" : ""}`} >
				<h1>Frågesport</h1>

				<Quiz stationId={station.data.id} questions={station.data.quiz} onComplete={onQuizComplete} />

				<div className="mt-12 mb-8">
					{/* <br /> */}
					<TextButton onClick={() => setMode("info")}>
						Gå tillbaka
					</TextButton>
				</div>
			</div>

			<div className={`${mode != "result" ? "hidden" : ""}`} >
				<h1>Resultat</h1>

				<p>Bra gjort!</p>
				<p>Du svarade rätt på {atom?.quiz.correct.filter(Boolean).length} av {atom?.quiz.correct.length} frågor.</p>

				<div className="mt-12 mb-8">
					<BigButton onClick={() => setMode("info")}>
						Gå tillbaka
					</BigButton>
				</div>
			</div>

			<CloseButton onClick={onClose}>
				&times;
			</CloseButton>
		</>
	);
}
