import Link from "next/link";

export default function Button({children, href, disabled}: any) {
	return (
		<Link href={href} className={`text-lg col-span-1 px-4 py-2 rounded-lg ${disabled ? 'bg-gray-400' : 'bg-red-400 hover:bg-red-500'}`}>
			{children}
		</Link>
	);
}
