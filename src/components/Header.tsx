import { useStore } from '@nanostores/react';

import { stations, visitedStations } from '@/stores/stations';

export const Admins = () => {
	return (
		<ul>
			haha
			{/* {list.map(user => <UserItem user={user} />)} */}
		</ul>
	)
}


export default function Header() {
	const list = useStore(visitedStations);

	return (
		<>
			<div className='bg-white shadow-lg relative' style={{ zIndex: 2 }}>
				<div className='w-full mx-auto flex justify-center p-4'>
					{/* <h3 className="text-white">Skansen karta</h3> */}
					<img className="h-7" src="/logo.svg" />

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
