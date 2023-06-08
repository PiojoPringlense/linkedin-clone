import React from "react";
import LeftSideContent from "./LeftSideContent";
import MainContent from "./MainContent";
import RightSideContent from "./RightSideContent";

type Props = {};

export default async function Dashboard({}: Props) {
	return (
		<div className="px-7 py-9 mx-auto 2xl:max-w-[1640px] grid grid-cols-[328px_1fr_490px] gap-7">
			{/* @ts-expect-error Server Component */}
			<LeftSideContent />
			<MainContent />
			<RightSideContent />
		</div>
	);
}
