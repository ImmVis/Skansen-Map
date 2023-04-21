import { useState } from 'react';
import { useStore } from '@nanostores/react';
import Image from "next/image";

import style from "@/styles/Header.module.scss";
import { visitedStations } from '@/stores/stations';
import { BigButton, TextButton } from './Buttons';

import flagSE from "@/assets/icon-menu-flag-se.png";
import flagEN from "@/assets/icon-menu-flag-en.png";
import startImage from "@/assets/skansen-treasureHunt-2youth.svg";
import infoImage from "@/assets/skansen-treasureHunt-6youth.svg";


export default function Header() {
	const list = useStore(visitedStations);

	const [open, setOpen] = useState<boolean>(true);
	const [page, setPage] = useState<string>("start");
	const [language, setLanguage] = useState<string>("se");


	function changeLanguage() {
		if (language == "se") {
			setLanguage("en");
		}
		else {
			setLanguage("se");
		}
	}


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
			<div className={style.background}>
				<div className={style.content}>

					<button className={style.button} onClick={openStart}>
						<img className={style.skansenLogo} src="/logo.svg" />
					</button>

					<div className={style.buttonList}>
						<button className={style.button} onClick={changeLanguage}>
							<Image className={style.languageButton} alt="flag" src={language == "se" ? flagSE : flagEN} />
						</button>

						<button className={style.button} onClick={openInfo}>
							<div className={style.infoButton}>
								?
							</div>
						</button>
					</div>
				</div>
			</div>


			<div className={`${style.panel} ${!open ? style.hidePanel : ""}`}>
				<div className={style.panelContent}>

					{/* Start page */}
					<div className={`${style.startPage} ${page != "start" ? style.hidePage : ""}`}>
						<small>
							Välkommen till
						</small>
						<h1 className="font-extrabold">
							Skansens Tips&shy;promenad
						</h1>
						<p>
							Ta en tur i parken och utforska natur, djur och kultur.
							Vid varje station hittar du en kod bestående av symboler.
							Tryck in rätt kod i mobilen för att låsa upp stationen.
							Se, lyssna och läs och svara på några kluriga frågor.
							Lycka till!
						</p>

						<div className="text-center">
							<BigButton onClick={closePanel}>
								Starta tipspromenad
							</BigButton>
							<TextButton onClick={openInfo}>
								Hur spelar jag?
							</TextButton>
						</div>

						<Image alt="Start page image" src={startImage} />
					</div>

					{/* Info page */}
					<div className={`${style.infoPage} ${page != "info" ? style.hidePage : ""}`}>
						<h1 className="font-extrabold">
							Instruktioner
						</h1>
						<p>
							Consectetur est minim occaecat ex magna anim sint pariatur culpa velit. Mollit aliqua non nisi aliquip quis cupidatat ut qui ullamco quis aliqua ea. Cillum quis ut exercitation veniam adipisicing commodo commodo. Anim esse commodo est non minim irure esse officia. Commodo est enim quis tempor duis labore nostrud consectetur aute qui qui. Eu reprehenderit anim adipisicing cillum ullamco ex Lorem elit ea.
						</p>
						<p>
							Kom tillbaka senare.
						</p>

						<div className="text-center">
							<BigButton onClick={closePanel}>
								Starta tipspromenad
							</BigButton>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
