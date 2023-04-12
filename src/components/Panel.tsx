// import { useState } from "react";
// import dynamic from "next/dynamic";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { StationData } from "@/helpers/StationHelper";
import { getCustomComponents } from "@/components/CustomComponents";


type PanelProps = {
	stations: StationData[];
	selectedStation: StationData | undefined;
	isExploring: boolean;
	onExplore: any;
	onClose: any;
}

export default function Panel({ stations, selectedStation, isExploring, onExplore, onClose }: PanelProps) {

	return (
		<div className="panel-content">

			{/* No station selected */}
			<div className={`flex flex-col h-full justify-center ${selectedStation && "hidden"}`}>
				<span className="font-extrabold">Tryck på en station</span>
			</div>


			{/* Station preview info */}
			{stations.map(station => (
				<div key={station.data.id + "preview"} className={`flex flex-col h-full justify-center ${!(!isExploring && station == selectedStation) && "hidden"}`}>
					<span className="text-xl font-extrabold pt-3">{station.data.name}</span>
					<Image width={256} height={256} className="panel-preview-image flex-1" alt={station.data.image} src={station.data.image} />
					<button className="panel-explore-button" onClick={onExplore}>Explore</button>

					<button className="panel-close-button" onClick={onClose}>&times;</button>
				</div>
			))}


			{/* Station detailed info */}
			{stations.map(station => (
				<div key={station.data.id + "detail"} className={`px-2 pt-10 ${!(isExploring && station == selectedStation) && "hidden"}`}>
					<Image width={256} height={256} className="m-auto w-64 h-32 object-cover rounded-full" alt={station.data.image} src={station.data.image} />

					<MDXRemote {...station.content} components={getCustomComponents(station.mdxPath)} />

					<button className="panel-explore-button" onClick={onClose}>Go back</button>

					<button className="panel-close-button" onClick={onClose}>&times;</button>
				</div>
			))}
		</div>
	);

	/*
	return (
		<div className="panel-content">
			{(selectedStation ? (
				(isExploring ? (
					// Station detailed info
					<div className="px-2 pt-10">
						<Image width={256} height={256} className="m-auto w-64 h-32 object-cover rounded-full" alt={selectedStation.data.image} src={selectedStation.data.image} />

						<MDXRemote {...selectedStation.content} components={getCustomComponents(selectedStation.mdxPath)} />

						<button className="panel-explore-button" onClick={onClose}>Go back</button>

						<button className="panel-close-button" onClick={onClose}>&times;</button>
					</div>

				) : (
					// Station preview info
					<div className="flex flex-col h-full justify-center">
						<span className="text-xl font-extrabold pt-3">{selectedStation.data.name}</span>
						<Image width={256} height={256} className="panel-preview-image flex-1" alt={selectedStation.data.image} src={selectedStation.data.image} />
						<button className="panel-explore-button" onClick={onExplore}>Explore</button>

						<button className="panel-close-button" onClick={onClose}>&times;</button>
					</div>
				))

			) : (
				// No station selected
				<div className="flex flex-col h-full justify-center">
					<span className="font-extrabold">Tryck på en station</span>
				</div>
			))}
		</div>
	);
	*/

}
