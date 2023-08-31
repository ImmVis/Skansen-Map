import { useState } from "react";
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
	const [page, setPage] = useState<string>("start");
	const [language, setLanguage] = useState<string>("se");

	function changeLanguage() {
		if (language == "se") {
			setLanguage("en");
		} else {
			setLanguage("se");
		}
	}

	function toggleFullscreen() {
		const doc = document as any;
		const element = document.documentElement as any;

		if (doc.fullscreenElement) {
			if (doc.exitFullscreen) {
				doc.exitFullscreen();
			} else if (doc.mozCancelFullScreen) {
				doc.mozCancelFullScreen();
			} else if (doc.webkitExitFullscreen) {
				doc.webkitExitFullscreen();
			}
		} else {
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

		if (doc.webkitFullscreenElement) {
			doc.webkitCancelFullScreen();
		} else {
			element.webkitRequestFullscreen((Element as any).ALLOW_KEYBOARD_INPUT);
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
					<button className={style.button} onClick={toggleFullscreen}>
						<Image
							className={style.fullscreenButton}
							width={50}
							height={50}
							alt="Fullscreen"
							src={iconExpand}
						/>
					</button>

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
						<h1 className="font-extrabold">Skansens digitala tipspromenad</h1>
						<p>
							Lär dig om den biologiska mångfalden i vår svenska natur! Under
							2023 kan du vara med och testa vår digitala tipspromenad. Ta en
							tur runt Skansen och utforska natur, djur och kultur. På kartan
							ser du de olika stationerna. Vid varje station hittar du en kod
							bestående av olika symboler. Tryck in rätt kod i mobilen för att
							låsa upp stationen. Se, lyssna och läs och svara på några kluriga
							frågor. Lycka till!
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
						<h1 className="font-extrabold">Instruktioner</h1>
						<Image
							width={520}
							height={300}
							alt="Instructions image"
							src="https://picsum.photos/520/300"
						/>
						<p>
							Consectetur est minim occaecat ex magna anim sint pariatur culpa
							velit.
						</p>
						<p>
							Laborum magna esse adipisicing tempor id in labore. Veniam nisi
							laboris duis ad labore elit consectetur et irure. Nostrud enim
							nostrud aliqua dolor amet.
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
