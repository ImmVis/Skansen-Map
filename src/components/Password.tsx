import { useRef, useState } from "react";
import style from "@/styles/Password.module.scss";


export function PasswordPrompt({ symbols, password, onSuccess }: { symbols: string[], password: string[], onSuccess: any }) {
	const [input, setInput] = useState<string[]>([]);

	function addInput(symbol: string) {
		let newInput = input.concat([symbol]);

		if (newInput.length < password.length) {
			dotsRef.current?.classList.remove(style.incorrect);
		}
		else if (newInput.length == password.length) {
			if (JSON.stringify(newInput) == JSON.stringify(password)) {
				onSuccess();
			}
			else {
				dotsRef.current?.classList.add(style.incorrect);
				newInput = [];
			}
		}

		setInput(newInput);
	}

	const dotsRef = useRef<any>(null);

	return (
		<>
			<div className={style.dots} ref={dotsRef}>
				{password.map((symbol: string, index: number) =>
					<div key={symbol} className={input.length > index ? style.dotOn : style.dotOff}></div>
				)}
			</div>
			<div className={style.wrapper}>
				{symbols.map((symbol: string) =>
					<PasswordButton key={symbol} symbol={symbol} highlight={input.includes(symbol)} addInput={addInput} />
				)}
			</div >
		</>
	);
}

function PasswordButton({ symbol, highlight, addInput }: { symbol: string, highlight: boolean, addInput: any }) {
	const buttonRef = useRef<any>(null);
	const [hold, setHold] = useState(false);

	function onPointerDown() {
		setHold(true);
	}
	function onPointerUp() {
		if (hold) {
			addInput(symbol);
		}
		setHold(false);
	}
	function onPointerStop(event: any) {
		if (event.pointerType == "mouse") {
			setHold(false);
		}
	}

	return (
		<div
			ref={buttonRef}
			className={`${style.button} ${hold && style.hold} ${highlight && style.highlight}`}
			onPointerDown={onPointerDown}
			onPointerUp={onPointerUp}
			onPointerLeave={onPointerStop}
			onTouchEnd={onPointerUp}
			onTouchStart={onPointerDown}
			onContextMenu={(e) => e.preventDefault()}
		>
			<img src={`/content/symbols/${symbol}.svg`} />
		</div>
	);
}
