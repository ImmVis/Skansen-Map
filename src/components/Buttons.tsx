import { useRef } from "react";
import style from "@/styles/Buttons.module.scss";


export function BigButton({ children, onClick, enabled=true }: { children: any, onClick: any, enabled?: boolean }) {
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
			className={`${style.bigButton} ${enabled ? style.enabled : ""}`}
			onClick={onClick}
			onPointerDown={onPointerDown}
			onPointerUp={onPointerUp}
			onPointerOut={onPointerUp}
			disabled={!enabled}
		>
			{children}
		</button>
	);
}


export function TextButton({ children, onClick, enabled=true }: { children: any, onClick: any, enabled?: boolean }) {
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
			className={`${style.textButton} ${enabled ? style.enabled : ""}`}
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
