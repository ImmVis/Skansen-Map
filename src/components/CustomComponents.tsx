import { useState } from "react";
import path from "path";
import Image from "next/image";

import playButton from "@/assets/play.svg";


// Convert relative image path to static (/public/content/.../)
export function convertRelativeImagePath(mdxPath: string, imagePath: string): string {
	const folderPath = path.dirname(mdxPath);
	if (imagePath) {

		// Allow outsourced images
		if (imagePath.startsWith("http")) {
			return imagePath;
		}

		// Convert relative to static
		if (!imagePath.includes("/content")) {
			const staticPath = path.join("/", folderPath, imagePath);
			return staticPath;
		}
	}

	return imagePath;
}

// export function makeCustomImageComponent(mdxPath: string) {
// 	function MyImage({ src, ...props }: JSX.IntrinsicElements["img"]) {
// 		// const imagePath = path.join("/", folderPath, src!);
// 		const imagePath = convertRelativeImagePath(mdxPath, src!)
// 		return (
// 			<img src={imagePath} {...props} alt={imagePath}></img>
// 		);
// 	}
// 	return MyImage;
// }


function Video({ src }: { src: string }) {

	const [isPlaying, setIsPlaying] = useState(false);
	function togglePlayback({ target: video }: any) {
		if (video.paused) {
			video.play();
		}
		else {
			video.pause();
		}
		setIsPlaying(!video.paused);
	}

	return (
		<div className="video-wrapper">
			<video onClick={togglePlayback} playsInline >
				<source src={src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			{!isPlaying && <div className="video-playbutton">
				<Image alt="play" src={playButton} />
			</div>}
		</div>
	);
}


export function getCustomComponents(mdxPath: string) {
	return {
		// img: makeCustomImageComponent(mdxPath),
		Video
	};
}
