import path from "path";


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

export function makeCustomImageComponent(mdxPath: string) {
	function MyImage({ src, ...props }: JSX.IntrinsicElements["img"]) {
		// const imagePath = path.join("/", folderPath, src!);
		const imagePath = convertRelativeImagePath(mdxPath, src!)
		return (
			<img src={imagePath} {...props} alt={imagePath}></img>
		);
	}
	return MyImage;
}


function CustomComponent({ title, description }: { title: string; description: string }) {
	return (
		<div className="border-solid bg-red-500">
			<p>Hello world</p>
			<p>Title: {title}</p>
			<p>Description: {description}</p>
		</div>
	);
}


function UserImage({ liuId }: { liuId: string }) {
	return (
		<p>IMAGE!!! {liuId}</p>
	);
}


function Quiz({ children, index, header, image, question }: { children: any, index: string, header: string, image: string, question: string }) {
	return (
		<div className="mt-0 mb-8 px-4 text-left w-full flex flex-col justify-center">
			<h5 className="font-black">{ header }</h5>
			<img src={ image } />
			<h4 className="mt-4 mb-6">{ question }</h4>
			<div className="grid grid-cols-1 gap-4">
				{ ...children }
			</div>
		</div>
	);
}

function Option({ children, correct }: { children: any, correct: boolean }) {
	return (
		<div className="col-span-1 bg-white hover:bg-amber-200 text-gray-900 font-semibold rounded-md px-3 py-2 tracking-tight">
			{ ...children }
			{/* {correct && <span> (CORRECT)</span>} */}
		</div>
	);
}


export function getCustomComponents(mdxPath: string) {
	return {
		img: makeCustomImageComponent(mdxPath),
		Quiz,
		Option,
	};
}
