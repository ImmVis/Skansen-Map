import '@/styles/tailwind.css'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '@/components/Header'

import { useStore } from "@nanostores/react";
import { PageState, pageStateAtom } from "@/stores/states";

import { useWindowSize } from 'usehooks-ts';
import Confetti from 'react-confetti';

import { Mulish } from 'next/font/google'
const skansenFont = Mulish({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
	const { width, height } = useWindowSize();

	const pageState = useStore(pageStateAtom);


	return (
		<>
			<Head>
				<title>Tipspromenad - Skansen</title>
				<meta name="description" content="Prova på en interaktiv tipspromenad på Skansen!" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

				<meta property="og:title" content="Tipspromenad - Skansen" />
				<meta property="og:description" content="Prova på en interaktiv tipspromenad på Skansen!" />
				<meta property="og:image" content="https://skansen.se/wp-content/uploads/2022/02/logo-1.svg" />
				<meta property="og:image:secure_url" content="https://skansen.se/wp-content/uploads/2022/02/logo-1.svg" />
				<meta property="og:url" content="https://quiz.skansen.se/" />
				<meta property="og:type" content="website" />

				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b73337" />
				<meta name="msapplication-TileColor" content="#b73337" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<div className={`flex flex-col ${skansenFont.className}`} style={{ height: "100svh" }}>

				<Header />

				<main className='w-full mx-auto flex flex-1 overflow-auto'>
					<Component {...pageProps} />
				</main>

				<Confetti
					width={width}
					height={height}
					numberOfPieces={pageState == PageState.VictoryScreen ? 50 : 0}
				/>

			</div>
		</>
	)
}
