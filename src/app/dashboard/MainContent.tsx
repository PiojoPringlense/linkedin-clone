import React from "react";
import NewPost from "./NewPost";
import { getPosts } from "@/lib/Prisma/posts";
import Post from "./Post";

export default async function MainContent() {
	const { posts, error } = await getPosts();
	return (
		<div className="grid gap-9 place-content-start justify-normal">
			<NewPost />
			{posts && posts.map((post) => <Post post={post} />)}
		</div>
	);
}
