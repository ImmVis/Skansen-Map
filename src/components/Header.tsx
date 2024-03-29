import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import Image from "next/image";

import style from "@/styles/Header.module.scss";
import { BigButton, TextButton } from "./Buttons";

import skansenLogo from "@/assets/logo-skansen.svg";
import iconExpand from "@/assets/expand.svg";
import flagSE from "@/assets/icon-menu-flag-se.png";
import flagEN from "@/assets/icon-menu-flag-en.png";
import startImage from "@/assets/skansen-treasureHunt-2youth.svg";
import infoImage from "@/assets/skansen-treasureHunt-6youth.svg";
import Butterfly from "./Butterfly";

import {
	useTranslation,
	useLanguageQuery,
	LanguageSwitcher,
} from "next-export-i18n";

export default function Header() {
	const [open, setOpen] = useState<boolean>(true);
	const [fullscreenAllowed, setFullscreenAllowed] = useState<boolean>(false);
	const [page, setPage] = useState<string>("start");
	const [language, setLanguage] = useState<string>("se");

	function changeLanguage() {
		if (language == "se") {
			setLanguage("en");
		} else {
			setLanguage("se");
		}
	}

	useEffect(() => {
		const element = document.documentElement as any;
		setFullscreenAllowed(
			!!(
				element.requestFullscreen ||
				element.mozRequestFullScreen ||
				element.webkitRequestFullscreen ||
				element.msRequestFullscreen
			)
		);
	}, []);

	function toggleFullscreen() {
		const doc = document as any;
		if (doc.fullscreenElement) {
			if (doc.exitFullscreen) {
				doc.exitFullscreen();
			} else if (doc.mozCancelFullScreen) {
				doc.mozCancelFullScreen();
			} else if (doc.webkitExitFullscreen) {
				doc.webkitExitFullscreen();
			}
		} else {
			const element = document.documentElement as any;
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullscreen) {
				element.webkitRequestFullscreen();
			} else if (element.msRequestFullscreen) {
				element.msRequestFullscreen();
			}
		}
	}

	// const { t } = useTranslation();
	// const [query] = useLanguageQuery();

	function closePanel() {
		setOpen(false);
	}

	function openStart() {
		setOpen(true);
		setPage("start");
	}

	function openInfo() {
		setOpen(true);
		setPage("info");
	}

	return (
		<>
			{/* Actual header */}
			<div className={style.background}>
				<div className={style.content}>
					{fullscreenAllowed ? (
						<button className={style.button} onClick={toggleFullscreen}>
							<Image
								className={style.fullscreenButton}
								width={50}
								height={50}
								alt="Fullscreen"
								src={iconExpand}
							/>
						</button>
					) : (
						<></>
					)}

					<button className={style.button} onClick={openStart}>
						<Image
							className={style.skansenLogo}
							width={200}
							height={50}
							alt="Skansen logo"
							src={skansenLogo}
						/>
					</button>

					<div className={style.buttonList}>
						{/* <button className={style.button} onClick={changeLanguage}> */}
						{/* <Image className={style.languageButton} alt="flag" src={language == "se" ? flagSE : flagEN} /> */}
						{/* </button> */}
						{/* <p><LanguageSwitcher lang={"sv"}>på svenska</LanguageSwitcher></p> */}
						{/* <p><LanguageSwitcher lang={"en"}>in english</LanguageSwitcher></p> */}
						{/* <p>{t("myKey")}</p> */}
						{/* <p>{t("nested.key")}</p> */}

						<button className={style.button} onClick={openInfo}>
							<div className={style.infoButton}>?</div>
						</button>
					</div>
				</div>
			</div>

			{/* Header dropdown panel */}
			<div className={`${style.panel} ${!open ? style.hidePanel : ""}`}>
				<div className={style.panelContent}>
					{/* Start page */}
					<div
						className={`${style.startPage} ${
							page != "start" ? style.hidePage : ""
						}`}
					>
						<small>Välkommen att testa demoversionen av</small>
						<h1 className="font-extrabold mt-5">
							Demo: Skansens tipspromenad om biologiska mångfald
						</h1>
						<p>
							Lär dig om den biologiska mångfalden i vår svenska natur! 
							Nu kan du vara med och testa vår digitala tipspromenad. Ta en
							tur runt Skansen och utforska natur, djur och kultur. På kartan
							ser du de olika stationerna som du ska besöka. 
							Se, lyssna och läs och svara på några kluriga frågor. Lycka till!
						</p>

						{/* <Butterfly /> */}

						<div className="text-center">
							<BigButton onClick={closePanel}>Starta tipspromenad</BigButton>
							<TextButton onClick={openInfo}>Hur spelar jag?</TextButton>
						</div>

						<Image alt="Start page image" src={startImage} />
					</div>

					{/* Info page */}
					<div
						className={`${style.infoPage} ${
							page != "info" ? style.hidePage : ""
						}`}
					>
						<Image
							width={520}
							height={300}
							alt="Instructions image"
							src="/stations/stad/media/Staden.jpg"
						/>
						<h1 className="font-extrabold">Så gör du</h1>
						<p>
							Kartan i din mobil visar de olika stationerna runt om i parken som du ska besöka.
							För bästa digitala upplevelse: tryck ”Dela” och välj ”Lägg till på hemskärmen”
							(då slipper du browserns pilar etc. som kan störa).
							Platsinformation: Tillåt quiz.skansen.se att ”använda din nuvarande plats” 
							– det möjliggör att du kan se din egen position på kartan.
						</p>
						<p>
							Starta i vår rulltrappa. Promenera sedan till övriga stationer i den ordning du vill
							och svara på frågorna som dyker upp i mobilen (tryck på stations-ikonen på din karta när du anlänt)
							När du besökt alla stationer och svarat på alla frågor får du ett
							samlat resultat - lycka till!!
						</p>
						<p>
							Demoversion testas under våren 2024. Svara gärna på utvärderingsfrågorna via länken
							som dyker upp efter avklarat tipspromenad. 
						</p>

						<div className="text-center">
							<BigButton onClick={closePanel}>Starta tipspromenad</BigButton>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
