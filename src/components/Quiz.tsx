import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import Image from "next/image";
import { QuestionMeta } from "@/helpers/StationHelper";
import { BigButton } from "./Buttons";
import style from "@/styles/Quiz.module.scss";

import { allQuizzes, atomSetQuizAnswer } from "@/stores/stationStorage";


export default function Quiz({ stationId, questions, onComplete }: { stationId: string, questions: QuestionMeta[], onComplete: any }) {
	const quizzes = useStore(allQuizzes);

	// useEffect(() => {
	// atomResetQuiz(stationId, quiz);
	// }, []);

	const quizAtom = quizzes.find(s => s.id == stationId);

	// const answerCount = quizAtom?.quiz.answers.length;
	let answerCount = 0;
	if (quizAtom) {
		for (const answer of quizAtom.quiz.answers) {
			if (answer != -1 && answer != null) {
				answerCount++;
			}
			else {
				break;
			}
		}
	}

	return (
		<div className="">
			{JSON.stringify(quizAtom?.quiz.answers)}
			{questions.map((question: any, index: number) =>
				<Question stationId={stationId} question={question} index={index} max={questions.length} locked={index > answerCount} />
			)}

			<BigButton onClick={() => onComplete("result")} enabled={answerCount == questions.length}>
				Kontrollera svar
			</BigButton>
		</div>
	);
}

function Question({ stationId, question, index, max, locked }: { stationId: string, question: QuestionMeta, index: number, max: number, locked: boolean }) {
	const [selected, setSelected] = useState(-1);

	function selectOption(optionIndex: number) {
		if (selected != optionIndex) {
			setSelected(optionIndex);
			const correct = (question.correct - 1 == optionIndex);
			atomSetQuizAnswer(stationId, index, optionIndex, correct);
		}
		else {
			setSelected(-1);
			atomSetQuizAnswer(stationId, index, -1, false);
		}
	}

	return (
		<div className={`${style.question} ${locked ? style.locked : ""}`}>
			<h5 className="font-black">Fråga {index + 1} av {max}</h5>
			<Image width={520} height={250} alt={question.image} src={question.image} />
			<h4 className="mt-4 mb-6">{question.question}</h4>
			<div className={`grid gap-x-4 gap-y-4 ${question.doubleColumn ? "grid-cols-2" : "grid-cols-1"}`}>
				{question.options.map((text: string, optionIndex: number) =>
					<Option correct={question.correct - 1 == optionIndex} selected={selected == optionIndex} onSelect={() => selectOption(optionIndex)}>
						{text}
					</Option>
				)}
			</div>
		</div>
	);
}

function Option({ children, correct, selected, onSelect }: { children: any, correct: boolean, selected: boolean, onSelect: any }) {
	const [hold, setHold] = useState(false);

	function onClick() {
		if (hold) {
			onSelect();
			setHold(false);
		}
	}

	return (
		<div
			className={`${style.button} ${hold && style.hold} ${selected && style.selected}`}
			onPointerDown={() => setHold(true)}
			onTouchStart={() => setHold(true)}
			onMouseLeave={() => setHold(false)}
			onPointerUp={onClick}
			onTouchEnd={onClick}
			onContextMenu={(e) => e.preventDefault()}
		>
			{...children} ({JSON.stringify(correct)})
		</div>
		// <div className="col-span-1 bg-skansen-red text-white hover:bg-rose-500 text-lg font-bold rounded-md px-3 py-2 tracking-tight">
		// {...children}
		// </div>
	);
}
