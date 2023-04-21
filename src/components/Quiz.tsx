import { StationMeta } from "@/helpers/StationHelper";

export default function Quiz({ children, index, header, image, question }: { children: any, index: string, header: string, image: string, question: string }) {
	return (
		<div className="mt-0 mb-8 px-4 text-left w-full flex flex-col justify-center">
			<h5 className="font-black">{header}</h5>
			<img src={image} />
			<h4 className="mt-4 mb-6">{question}</h4>
			<div className="grid grid-cols-1 gap-4">
				{...children}
			</div>
		</div>
	);
}

function Option({ children, correct }: { children: any, correct: boolean }) {
	return (
		<div className="col-span-1 bg-skansen-red text-white hover:bg-rose-500 text-lg font-bold rounded-md px-3 py-2 tracking-tight">
			{...children}
			{/* {correct && <span> (CORRECT) </span>} */}
		</div>
	);
}
