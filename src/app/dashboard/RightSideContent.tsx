import React from "react";
import DashboardPromoImage from "@/../../public/Dashboard-Promo-Image.jpg";
import Image from "next/image";

type Props = {};

export default function RightSideContent({}: Props) {
	return (
		<div className="grid gap-3 justify-normal place-content-start">
			<div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-300 dark:border-transparent p-4 grid gap-6">
				<div className="flex justify-between items-center">
					<p className="font-bold text-2xl">LinkedIn News</p>
					<span className="bg-black dark:bg-white text-white dark:text-black font-bold grid place-content-center rounded-full w-8 h-8">
						i
					</span>
				</div>
				<ul className="text-xl grid gap-5">
					<li className="flex items-center gap-3">
						<span className="bg-current h-2 w-2 rounded-full flex-shrink-0 flex-grow-0"></span>
						<div className="grid gap-2">
							<p className="line-clamp-1	">
								New Study Reveals Surprising Link Between Coffee Consumption and Longevity
							</p>
							<p className="text-neutral-500 dark:text-neutral-300">1 hour ago</p>
						</div>
					</li>
					<li className="flex items-center gap-3">
						<span className="bg-current h-2 w-2 rounded-full flex-shrink-0 flex-grow-0"></span>

						<div className="grid gap-2">
							<p className="line-clamp-1	">
								Local Community Comes Together to Rebuild Park After Devastating Storm
							</p>
							<p className="text-neutral-500 dark:text-neutral-300">2 hours ago</p>
						</div>
					</li>
					<li className="flex items-center gap-3">
						<span className="bg-current h-2 w-2 rounded-full flex-shrink-0 flex-grow-0"></span>

						<div className="grid gap-2">
							<p className="line-clamp-1	">
								Breakthrough Discovery: Scientists Uncover Promising Treatment for
								Alzheimer's
							</p>
							<p className="text-neutral-500 dark:text-neutral-300">2 hours ago</p>
						</div>
					</li>
					<li className="flex items-center gap-3">
						<span className="bg-current h-2 w-2 rounded-full flex-shrink-0 flex-grow-0"></span>

						<div className="grid gap-2">
							<p className="line-clamp-1	">
								World Record Shattered as Athlete Achieves Unprecedented Feat of Strength
							</p>
							<p className="text-neutral-500 dark:text-neutral-300">4 hours ago</p>
						</div>
					</li>
					<li className="flex items-center gap-3">
						<span className="bg-current h-2 w-2 rounded-full flex-shrink-0 flex-grow-0"></span>

						<div className="grid gap-2">
							<p className="line-clamp-1	">
								Renowned Artist's Exhibition Takes Art World by Storm with Bold
								Interpretations
							</p>
							<p className="text-neutral-500 dark:text-neutral-300">4 hours ago</p>
						</div>
					</li>
				</ul>
			</div>
			<div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-300 dark:border-transparent">
				<div className="relative px-4">
					<Image src={DashboardPromoImage} alt="Promo Image" className="w-full" />
				</div>
			</div>
		</div>
	);
}
