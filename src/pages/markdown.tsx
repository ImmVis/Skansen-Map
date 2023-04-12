import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import { StationData, getAllStations } from "@/helpers/StationHelper";
import { MDXRemote } from "next-mdx-remote";
import { getCustomComponents } from "@/components/CustomComponents";


export default function StationList({ stations }: { stations: StationData[] }) {
	return (
		<>
			<Head>
				<title>Staff - ImmVis</title>
			</Head>

			<main className="w-full flex flex-col">
				<h1 className="">Stations</h1>

				{stations.map((post) => (
					<StationItem key={post.slug} post={post} />
				))}
			</main>
		</>
	);
}


function StationItem({ post }: { post: StationData }) {
	const { content, data, mdxPath } = post;

	return (
		<div className="bg-yellow-100 border-4 border-solid m-4 border-red-500">
			{/* <Image width={512} height={512} alt={data.name} src={data.image!} /> */}
			<p>Id: <b>{data.id}</b></p>
			<p>Name: <b>{data.name}</b></p>
			<p>Image: <b>{data.image}</b></p>
			<p>Color: <b>{data.color}</b></p>
			<p>Position: <b>{data.position.lat}</b>, <b>{data.position.lng}</b></p>

			<MDXRemote {...content} components={getCustomComponents(mdxPath)} />
		</div>
	);
}


export async function getStaticProps() {
	return {
		props: {
			stations: await getAllStations()
		}
	};
}
