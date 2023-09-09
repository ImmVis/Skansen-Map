import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { QuestionMeta, StationData } from "@/helpers/StationHelper";
import { getCustomComponents } from "@/components/CustomComponents";
import { PasswordPreview, PasswordPrompt } from "@/components/Password";
import { BigButton, CloseButton, TextButton } from "./Buttons";
import { atomUnlockStation, StationAtom, atomSubmitQuiz, getStationAtom } from "@/stores/stationStorage";
import { pageStateAtom, PageState, setPageState, stationStateAtom, StationState, setStationState } from "@/stores/states";

import Quiz from "./Quiz";
import QuizResults from "./QuizResults";


type PanelProps = {
	stations: StationData[];
	completedStations: StationAtom[];
	selectedStation: StationData | undefined;
	onExplore: () => void;
	onClose: () => void;
}

export function Panel({ stations, completedStations, selectedStation, onExplore, onClose }: PanelProps) {
	const pageState = useStore(pageStateAtom);
	const allStationsCompleted = (
		completedStations.length == stations.length &&
		completedStations.every(station => station.quiz.submitted)
	);

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
	}, [pageState, selectedStation]);

	const quizTotalCount = stations.reduce((sum: number, station: StationData) => sum + station.data.quiz.length, 0);
	const quizCorrectCount = completedStations.reduce((sum: number, station: StationAtom) => sum + station.quiz.correct.filter(c => c).length, 0);


	return (
		<div className="panel-content">

			{/* No station selected */}
			<div className={`flex flex-col h-full justify-center ${!(pageState == PageState.MapBrowse) ? "hidden" : ""}`}>
				{allStationsCompleted
					?
					<div className="m-6 pb-2">
						<h3 className="mt-3">
							Du har funnit alla stationer!
						</h3>
						<BigButton onClick={() => setPageState(PageState.VictoryScreen)}>
							Se resultat
						</BigButton>
					</div>
					:
					<div className="m-6 font-extrabold">
						Tryck på en station
					</div>
				}
			</div>


			{/* Station preview info */}
			{stations.map(station => (pageState == PageState.MapPreview && station == selectedStation) && (
				<div key={station.data.id + "preview"} className="panel-preview-wrapper">
					<span className="panel-preview-title">{station.data.name}</span>

					{!getStationAtom(station.data.id)?.passwordCorrect
						? <>
							<div className="panel-preview-image-wrapper">
								<Image width={512} height={512} className="panel-preview-image" alt={station.data.icon} src={station.data.icon} />
							</div>

							<div className="mb-6">
								<p className="panel-preview-brief">
									{station.data.brief}
								</p>
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
									Fortsätt utforska
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
				<div key={station.data.id + "detail"} className="p-4 pt-8">
					<StationContent station={station} atom={getStationAtom(station.data.id)} onClose={onClose} />
				</div>
			))}


			{/* Victory screen */}
			<div className={`flex flex-col h-full justify-center ${!(pageState == PageState.VictoryScreen) ? "hidden" : ""}`}>
				<div className="p-4 pt-8">
					<Image width={520} height={250} alt="Result image" src="/stations/stad/media/Linderossvin.jpg" />

					<h1>
						Grattis!
					</h1>

					<h3>
						Du har utforskat alla stationer!
					</h3>
					<h4 className="mt-0">
						Ditt samlade resultat är {quizCorrectCount} rätt av {quizTotalCount} frågor.
					</h4>

					<hr></hr>

					<p>
						Tack för att du vill lära dig mer!
					</p>
					<p>
						Den biologiska mångfalden i naturen är fantastiskt! Tillsammans kan vi göra skillnad för alla djur, insekter och växter som vi delar vår planet med!
					</p>

					<div className="mt-12 mb-8">
						<BigButton onClick={() => window.open("https://skansen.se/skansens-quiz/", "_blank")}>
							Svara på vår enkät
						</BigButton>
						<br></br>
						<TextButton onClick={() => setPageState(PageState.MapBrowse)}>
							Gå till karta
						</TextButton>
					</div>
				</div>
			</div>
		</div>
	);
}


function StationContent({ station, atom, onClose }: { station: StationData, atom: StationAtom, onClose: () => void }) {
	const stationState = useStore(stationStateAtom);

	function onPasswordCorrect() {
		atomUnlockStation(station.data.id);
		setStationState(StationState.Information);
	}

	function onQuizComplete() {
		atomSubmitQuiz(station.data.id);
		setStationState(StationState.Result);
	}

	const quizScore = atom.quiz.correct.filter(Boolean).length;


	return (
		<>
			{(stationState == StationState.Password) &&
				<>
					<h1 className="mt-0">
						Skriv in lösenord
					</h1>
					<p className="leading-5">
						Du hittar koden vid stationen. Tryck in symbolerna i rätt ordning för att låsa upp stationen. Lycka till!
					</p>
					<PasswordPrompt symbols={station.data.symbols || []} password={station.data.password || []} onSuccess={onPasswordCorrect} />

					<BigButton onClick={onClose}>
						Gå tillbaka
					</BigButton>
				</>
			}

			{(stationState == StationState.Information) &&
				<>
					<Image width={256} height={256} className="w-auto m-auto h-24" alt={station.data.icon} src={station.data.icon} />

					<div className="text-left">
						<MDXRemote {...station.content} components={getCustomComponents(station.mdxPath)} />
					</div>

					<div className="mt-12 mb-8">
						{!atom.quiz.submitted
							? <BigButton onClick={() => setStationState(StationState.Quiz)}>
								Starta quiz
							</BigButton>
							: <BigButton onClick={() => setStationState(StationState.Result)}>
								Se dina svar
							</BigButton>
						}
						<br />
						<TextButton onClick={onClose}>
							Gå tillbaka till kartan
						</TextButton>
					</div>
				</>
			}

			{(stationState == StationState.Quiz) &&
				<>
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
					<Image
						width={520}
						height={250}
						alt="Ditt resultat"
						src={
							quizScore >= 4
								? "/images/animals/Berguv.jpg"
							: quizScore == 3
								? "/images/animals/Kaniner.jpg"
							: quizScore == 2
								? "/images/animals/Asenfar2.jpg"
							: quizScore == 1
								? "/images/animals/Utter.jpg"
							: "/images/animals/Visent.jpg"
						}
					/>

					<h1>Resultat</h1>

					{/* <p>Bra gjort!</p> */}
					<h3 className="mt-0">Du svarade rätt på {quizScore} av {atom.quiz.correct.length} frågor!</h3>

					<QuizResults stationId={station.data.id} questions={station.data.quiz} onComplete={onQuizComplete} />

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
