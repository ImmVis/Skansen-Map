import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import Image from "next/image";
import { QuestionMeta } from "@/helpers/StationHelper";
import { BigButton } from "./Buttons";
import style from "@/styles/QuizResults.module.scss";
import xmarkIcon from "@/assets/circle-xmark.svg";
import checkIcon from "@/assets/circle-check.svg";
import circleIcon from "@/assets/circle.svg";
import chevronIcon from "@/assets/chevron-down.svg";

import {
	visitedAtomStations,
	atomSetQuizAnswer,
} from "@/stores/stationStorage";

export default function Quiz({
	stationId,
	questions,
	onComplete,
}: {
	stationId: string;
	questions: QuestionMeta[];
	onComplete: any;
}) {
	const visitedStations = useStore(visitedAtomStations);

	const quizAtom = visitedStations.find((s) => s.id == stationId);

	return (
		<>
			<hr />
			{questions.map((question: any, index: number) => (
				<Question
					key={index}
					stationId={stationId}
					question={question}
					index={index}
					max={questions.length}
					answer={quizAtom ? quizAtom.quiz.answers[index] : -1}
				/>
			))}
		</>
	);
}

function Question({
	stationId,
	question,
	index,
	max,
	answer,
}: {
	stationId: string;
	question: QuestionMeta;
	index: number;
	max: number;
	answer: number;
}) {
	const [showAll, setShowAll] = useState(answer != question.correct - 1);

	return (
		<>
			<div className={`${style.question} ${showAll ? "py-4" : "my-0"}`} onClick={() => setShowAll(true)}>
				{/* <h5 className="font-black">
					Fråga {index + 1} av {max}
				</h5> */}
				<h4 className="mt-0 mb-4">{question.question}</h4>
				<div className={`grid gap-y-0.5 grid-cols-1`}>
					{question.options.map((text: string, optionIndex: number) => (
						<Option
							key={optionIndex}
							correct={question.correct - 1 == optionIndex}
							answer={answer == optionIndex}
							showAll={showAll}
						>
							{text}
						</Option>
					))}
				</div>
			</div>

			{!showAll && (
				<Image
					width="64"
					height="64"
					alt="Se alla alternativ"
					src={chevronIcon}
					className="m-auto w-3 mt-1 opacity-50"
				/>
			)}

			<hr></hr>
		</>
	);
}

function Option({
	children,
	correct,
	answer,
	showAll,
}: {
	children: any;
	correct: boolean;
	answer: boolean;
	showAll: boolean;
}) {
	const correctAnswer = correct && answer;
	const incorrectAnswer = !correct && answer;
	const actualAnswer = correct && !answer;

	return (
		<>
			{showAll || answer ? (
				<div
					className={`${style.button} ${correct && style.correct} ${
						incorrectAnswer && style.incorrect
					}`}
				>
					{correct ? (
						<Image
							width="64"
							height="64"
							alt="Rätt svar"
							src={checkIcon}
							className={style.icon}
						/>
					) : incorrectAnswer ? (
						<Image
							width="64"
							height="64"
							alt="Fel svar"
							src={xmarkIcon}
							className={style.icon}
						/>
					) : (
						<Image
							width="64"
							height="64"
							alt="Fel svar"
							src={circleIcon}
							className={`${style.icon} opacity-20`}
						/>
					)}
					{...children}
				</div>
			) : (
				<></>
			)}
		</>
	);
}
