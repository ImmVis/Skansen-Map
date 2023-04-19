import { useStore } from '@nanostores/react';
import { visitedStations } from '@/stores/stations';

import Image from "next/image";
import flagSE from "@/assets/icon-menu-flag-se.png";
import flagEN from "@/assets/icon-menu-flag-en.png";


export default function Header() {
	const list = useStore(visitedStations);

	return (
		<>
			<div className='bg-white shadow-lg relative' style={{ zIndex: 2 }}>
				<div className='w-full mx-auto flex justify-between p-4 items-center'>

					<img className="h-7" src="/logo.svg" />

					<div className="flex gap-4">
						<Image width="32" height="32" alt="flag" src={flagSE} />
						{/* <Image width="32" height="32" alt="flag" src={flagEN} /> */}

						<div className="bg-rose-100 rounded-full w-8 h-8 flex justify-center font-bold text-3xl" style={{ lineHeight: "32px", color: "var(--skansen-red)" }}>
							?
						</div>
					</div>

					{/* <div className='flex flex-row ml-8'>
						<span>You have visited:</span>
						<div className='grid grid-cols-4'>
							{list.map(station => (
								<div key={station.name} className='col-span-1 mx-2'>
									<b>{station.name}</b>
								</div>
							))}
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
}
