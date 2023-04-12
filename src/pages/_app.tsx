import '@/styles/tailwind.css'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'

import { Mulish } from 'next/font/google'
const skansenFont = Mulish({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<div className={`flex flex-col h-screen ${skansenFont.className}`}>

				<Header />

				<main className='w-full mx-auto flex flex-1 overflow-auto'>
					<Component {...pageProps} />
				</main>

			</div>
		</>
	)
}
