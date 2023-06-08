import Link from "next/link";
import React from "react";
import UserBackground from "@/../../public/user-background.png";
import { PermIdentityClientIcon } from "@/components/Icons";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function LeftSideContent() {
	const session = await getServerSession(authOptions);

	if (!session) return <div></div>;

	return (
		<div className="grid gap-3 justify-normal place-content-start">
			<div className="bg-white dark:bg-neutral-800 rounded-xl grid border border-neutral-300 dark:border-transparent overflow-hidden">
				<div className="grid ">
					<div className="col-start-1 row-start-1 relative overflow-hidden">
						<Image
							src={UserBackground}
							alt="User background"
							className="absolute inset-0 w-full"
						/>
					</div>
					<div className="col-start-1 row-start-1 border border-neutral-300 rounded-full p-1 bg-white translate-y-8 place-self-center">
						{session.user.avatar ? (
							<img src={session.user.avatar} className="w-20 h-20 rounded-full" />
						) : (
							<PermIdentityClientIcon className="w-20 h-20 rounded-full" />
						)}
					</div>
				</div>
				<div className="text-center pt-16 pb-6 grid gap-3">
					<p>{session.user.name}</p>
					<p className="text-neutral-500 dark:text-neutral-300">{session.user.email}</p>
				</div>
				<div className="px-6 py-4 grid gap-2 border border-transparent dark:border-b-neutral-300 dark:border-t-neutral-300">
					<div className="flex justify-between">
						<p className="">Who viewed your profile</p>
						<p className="text-right text-blue-500">321</p>
					</div>
					<div className="flex justify-between">
						<p className="">Views of your post</p>
						<p className="text-right text-blue-500">1,892</p>
					</div>
				</div>
				<div className="px-6 py-4 border border-transparent dark:border-b-neutral-300">
					<p className="text-lg text-neutral-500 dark:text-neutral-300">
						Access exclusive tools & insights
					</p>
					<div className="flex items-center mt-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							data-supported-dps="24x24"
							width="24"
							height="24"
							focusable="false">
							<path
								d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
								fill="#f8c77e"></path>
							<path
								d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
								fill="#e7a33e"></path>
						</svg>
						<span className="ml-1">Try Premium for free</span>
					</div>
				</div>
				<div className="px-6 py-4 flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						data-supported-dps="16x16"
						width="24"
						height="24"
						fill="currentColor">
						<path d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z"></path>
					</svg>
					<span className="ml-1">My items</span>
				</div>
			</div>
			<div className="bg-white dark:bg-neutral-800 rounded-xl grid border border-neutral-300 dark:border-transparent">
				<div className="flex items-center justify-between">
					<div className="grid gap-4 px-4 py-6 text-blue-500">
						<Link href="#">Groups</Link>
						<Link href="#">Events</Link>
						<Link href="#">Followed Hashtags</Link>
					</div>
					<span className="p-2 text-3xl text-neutral-600 dark:text-stone-300 cursor-pointer hover:text-neutral-800 dark:hover:text-white">
						+
					</span>
				</div>
				<Link
					className="text-neutral-500 dark:text-neutral-300 text-center p-5 border border-transparent dark:border-t-neutral-300"
					href="#">
					Discover More
				</Link>
			</div>
		</div>
	);
}
