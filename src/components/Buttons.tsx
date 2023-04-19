import { useRef } from "react";
import style from "@/styles/Buttons.module.scss";


export function BigButton({ children, onClick }: { children: any, onClick: any }) {
	const buttonRef = useRef<any>(null);

	function onPointerDown() {
		buttonRef.current?.classList.add(style.hold);
	}
	function onPointerUp() {
		buttonRef.current?.classList.remove(style.hold);
	}

	return (
		<button
			ref={buttonRef}
			className={style.bigButton}
			onClick={onClick}
			onPointerDown={onPointerDown}
			onPointerUp={onPointerUp}
			onPointerOut={onPointerUp}
		>
			{children}
		</button>
	);
}


export function TextButton({ children, onClick }: { children: any, onClick: any }) {
	const buttonRef = useRef<any>(null);

	function onPointerDown() {
		buttonRef.current?.classList.add(style.hold);
	}
	function onPointerUp() {
		buttonRef.current?.classList.remove(style.hold);
	}

	return (
		<button
			ref={buttonRef}
			className={style.textButton}
			onClick={onClick}
			onPointerDown={onPointerDown}
			onPointerUp={onPointerUp}
			onPointerOut={onPointerUp}
		>
			{children}
		</button>
	);
}


export function CloseButton({ children, onClick }: { children: any, onClick: any }) {
	return (
		<button
			className={style.closeButton}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
