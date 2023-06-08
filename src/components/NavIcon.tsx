import React, { JSXElementConstructor, ReactElement } from "react";

type Props = {
	children: React.ReactNode;
	text: string;
	isActive?: boolean;
	isLanding?: boolean;
};

export default function NavIcon({ children, text, isActive = false, isLanding = false }: Props) {
	const newChildren = React.cloneElement(
		children as ReactElement<any, string | JSXElementConstructor<any>>,
		{ style: { width: 32, height: 32 } }
	);

	const colors = isLanding
		? "text-gray-500 hover:text-black"
		: isActive
		? "text-black dark:text-white"
		: "text-stone-500 dark:text-stone-300 hover:text-black hover:dark:text-white";

	return (
		<div
			className={`relative flex flex-col items-center gap-2 cursor-pointer leading-none ${colors}`}>
			{newChildren}
			{text}
			{isActive && (
				<span className="absolute border-2 border-black dark:border-white -left-4 -right-4 -bottom-3"></span>
			)}
		</div>
	);
}
