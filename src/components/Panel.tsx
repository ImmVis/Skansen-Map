import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { QuestionMeta, StationData } from "@/helpers/StationHelper";
import { getCustomComponents } from "@/components/CustomComponents";
import { PasswordPreview, PasswordPrompt } from "@/components/Password";
import { BigButton, CloseButton, TextButton } from "./Buttons";
import { unlockedStations, atomUnlockStation, StationAtom, atomSubmitQuiz, getStationAtom } from "@/stores/stationStorage";
import { pageStateAtom, PageState, setPageState, stationStateAtom, StationState, setStationState } from "@/stores/states";

import Quiz from "./Quiz";


type PanelProps = {
	stations: StationData[];
	selectedStation: StationData | undefined;
	onExplore: () => void;
	onClose: () => void;
}

export function Panel({ stations, selectedStation, onExplore, onClose }: PanelProps) {
	const pageState = useStore(pageStateAtom);

	// function getStationAtom(stationId: string) {
	// return stores.find(s => s.id == stationId);
	// }

	useEffect(() => {
		if (selectedStation) {
			const store = getStationAtom(selectedStation.data.id);

			if (store.passwordCorrect) {
				setStationState(StationState.Information);
			}
			else {
				setStationState(StationState.Password);
			}
		}
	}, [pageState]);

	return (
		<div className="panel-content">

			{/* No station selected */}
			<div className={`flex flex-col h-full justify-center ${!(pageState == PageState.MapBrowse) ? "hidden" : ""}`}>
				<span className="font-extrabold">Tryck på en station</span>
			</div>


			{/* Station preview info */}
			{stations.map(station => (pageState == PageState.MapPreview && station == selectedStation) && (
				<div key={station.data.id + "preview"} className="flex flex-col h-full justify-center">
					<span className="text-xl font-extrabold pt-3">{station.data.name}</span>

					{!getStationAtom(station.data.id)?.passwordCorrect
						? <>
							<Image width={256} height={256} className="panel-preview-image flex-1" alt={station.data.image} src={station.data.image} />

							<div className="mb-6">
								<BigButton onClick={onExplore}>
									Lås upp
								</BigButton>
							</div>
						</>
						: <>
							<p>
								Du har redan låst upp den här stationen!
							</p>

							<PasswordPreview symbols={station.data.symbols || []} password={station.data.password || []} />

							<div className="mb-6">
								<BigButton onClick={onExplore}>
									Utforska
								</BigButton>
							</div>
						</>
					}

					<CloseButton onClick={onClose}>
						&times;
					</CloseButton>
				</div>
			))}


			{/* Station detailed info */}
			{stations.map(station => (pageState == PageState.StationDetails && station == selectedStation) && (
				<div key={station.data.id + "detail"} className="p-4">
					<StationContent station={station} atom={getStationAtom(station.data.id)} onClose={onClose} />
				</div>
			))}
		</div>
	);
}


function StationContent({ station, atom, onClose }: { station: StationData, atom: StationAtom, onClose: () => void }) {
	const stationState = useStore(stationStateAtom);

	// useEffect(() => {}, [mode]);

	function onPasswordCorrect() {
		console.log("YIPPIE!!!");
		atomUnlockStation(station.data.id);
		setStationState(StationState.Information);
	}

	function onQuizComplete() {
		atomSubmitQuiz(station.data.id);
		setStationState(StationState.Result);
	}


	// if (!atom?.passwordCorrect) {
	// 	mode = "password";
	// }

	// if (atom?.quiz.submitted) {
	// 	mode = "result";
	// }


	return (
		<>
			{(stationState == StationState.Password) &&
				<>
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
				</>
			}

			{(stationState == StationState.Information) &&
				<>
					<Image width={256} height={256} className="m-auto w-64 h-32 object-cover rounded-full" alt={station.data.image} src={station.data.image} />

					<MDXRemote {...station.content} components={getCustomComponents(station.mdxPath)} />

					<div className="mt-12 mb-8">
						{!atom.quiz.submitted
							? <BigButton onClick={() => setStationState(StationState.Quiz)}>
								Starta frågesport
							</BigButton>
							: <BigButton onClick={() => setStationState(StationState.Result)}>
								Se resultat
							</BigButton>
						}
						<br />
						<TextButton onClick={onClose}>
							Gå tillbaka
						</TextButton>
					</div>
				</>
			}

			{(stationState == StationState.Quiz) &&
				<>
					<h1>Frågesport</h1>

					<Quiz stationId={station.data.id} questions={station.data.quiz} onComplete={onQuizComplete} />

					<div className="mt-12 mb-8">
						{/* <br /> */}
						<TextButton onClick={() => setStationState(StationState.Information)}>
							Gå tillbaka
						</TextButton>
					</div>
				</>
			}

			{(stationState == StationState.Result) &&
				<>
					<h1>Resultat</h1>

					<img src="https://picsum.photos/520/250"></img>

					<p>Bra gjort!</p>
					<p>Du svarade rätt på {atom.quiz.correct.filter(Boolean).length} av {atom.quiz.correct.length} frågor.</p>

					<div className="mt-12 mb-8">
						<BigButton onClick={() => setPageState(PageState.MapBrowse)}>
							Gå till karta
						</BigButton>
					</div>
				</>
			}

			<CloseButton onClick={onClose}>
				&times;
			</CloseButton>
		</>
	);
}
