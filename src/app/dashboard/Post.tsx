import {
	PermIdentityClientIcon,
	ThumbUpOffAltClientIcon,
	DeleteClientIcon,
} from "@/components/Icons";
import { formatTimeAgo } from "@/lib/dateFormat";
import { PostType } from "@/types/types";
import React from "react";

type Props = { post: PostType };

export default function Post({ post }: Props) {
	return (
		<div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-300 dark:border-transparent p-4">
			<div className="flex items-center gap-3">
				{post.user.avatar ? (
					<img
						src={post.user.avatar}
						alt={post.user.name}
						width={60}
						height={60}
						className="rounded-full"
					/>
				) : (
					<PermIdentityClientIcon className="w-[60px] h-[60px]" />
				)}
				<div>
					<p className="font-semibold">{post.user.name}</p>
					<p className="text-neutral-500 dark:text-neutral-300 text-xl">{post.user.email}</p>
					<p className="text-neutral-500 dark:text-neutral-300 text-lg">
						{formatTimeAgo(post.timestamp)}
					</p>
				</div>
			</div>
			<p className="mt-5 mb-4">{post.message}</p>
			{post.imageURL !== "" && <img src={post.imageURL} />}
			<div className="flex justify-around items-center text-neutral-500 dark:text-neutral-300 border-t-2 pt-6 pb-4">
				<button className="flex items-center gap-1 cursor-pointer hover:text-black dark:hover:text-white">
					<ThumbUpOffAltClientIcon className="scale-x-[-1] w-8 h-8" />
					<span>Like</span>
				</button>
				<button className="flex items-center gap-1 cursor-pointer hover:text-black dark:hover:text-white">
					<DeleteClientIcon className="w-8 h-8" />
					<span>Delete post</span>
				</button>
			</div>
		</div>
	);
}
