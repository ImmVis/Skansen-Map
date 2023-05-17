import z from "zod";
import path, { posix } from "path";
import { MatterData, fetchAllFiles, parseFrontmatter, convertRelativeImagePath } from "./MdxLoader";


/** Content folder for station files */
export const folderPath = "/stations/";


/** Zod schema for quiz frontmatter */
const QuestionMeta = z.object({
	image: z.union([z.string(), z.null()]),
	question: z.string(),
	options: z.array(z.string()),
	correct: z.number(),
	shortAnswers: z.optional(z.boolean()),
});

/** Zod schema for station frontmatter */
const StationMeta = z.object({
	hidden: z.optional(z.boolean()),
	id: z.string(),
	name: z.string(),
	brief: z.string(),
	icon: z.string(),
	pin: z.string(),
	color: z.string(),
	position: z.object({
		lat: z.number(),
		lng: z.number(),
	}),
	symbols: z.array(
		z.string()
	),
	password: z.array(
		z.string()
	),
	quiz: z.array(QuestionMeta)
});

/** Frontmatter variables at the top of the .mdx file */
export type StationMeta = z.infer<typeof StationMeta>;
export type QuestionMeta = z.infer<typeof QuestionMeta>;

/** Contains frontmatter data for an station .mdx file */
export interface StationData extends MatterData {
	data: StationMeta;
}


/** Returns matter data for all stations */
export async function getAllStations(): Promise<MatterData[]> {
	let matterList = await fetchAllFiles(path.join(".", folderPath));
	matterList = matterList.filter(f => !f.data.hidden);
	return matterList.map(matterData =>
		validateData(matterData as StationData)
	);
};

/** Returns matter data for one station */
export async function getStation(slug: string): Promise<MatterData> {
	const stations = await getAllStations();
	const matterData = stations.find(p => p.slug == slug);
	if (!matterData) { throw new Error(`Station not found: ${slug}`); }
	return validateData(matterData as StationData);
};


/** Final adjustments to mdx data */
function validateData(matter: StationData): StationData {
	// Parse frontmatter and perform type checks
	matter.data = parseFrontmatter<StationMeta>(StationMeta, matter.data, matter.mdxPath);

	// Fix pathing for local images
	matter.data.icon = convertRelativeImagePath(matter.mdxPath, matter.data.icon);
	matter.data.pin = convertRelativeImagePath(matter.mdxPath, matter.data.pin, "https://picsum.photos/256/256");

	matter.data.quiz.forEach(question => {
		if (question.image) {
			question.image = convertRelativeImagePath(matter.mdxPath, question.image)
		}
	});

	return matter;
}
