import Link from "next/link";

export default function Home() {

	const buttonStyle = 'bg-amber-500 text-lg col-span-4 px-4 py-2 rounded-lg hover:bg-amber-400';

	return (
		<>
			<main className='p-24'>

				<div className='flex flex-row justify-evenly'>
					<Link href="/map" className={buttonStyle}>
						Google Maps interaction
					</Link>
					<Link href="/qr" className={buttonStyle}>
						QR code scanning
					</Link>
					<Link href="/markdown" className={buttonStyle}>
						Markdown content
					</Link>
					<Link href="/api" className={buttonStyle}>
						Session API
					</Link>
				</div>
			</main>
		</>
	)
}
