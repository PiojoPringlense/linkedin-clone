import React from "react";
import Link from "next/link";
import { ChevronRightClientIcon } from "./Icons";

type Props = { children: React.ReactNode; link: string };

export default function LandingLink({ children, link }: Props) {
	return (
		<Link
			href={link}
			className="flex items-center justify-between bg-white max-w-[45%] p-7 text-3xl rounded-xl hover:text-gray-500">
			<p>{children}</p>
			<ChevronRightClientIcon className="w-8 h-8" />
		</Link>
	);
}
