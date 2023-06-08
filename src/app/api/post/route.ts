import { createPost, getPosts } from "@/lib/Prisma/posts";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const newPost = await request.json();

	if (!newPost.message || newPost.message === "" || !newPost.userId || newPost.userId === "")
		return NextResponse.json({ error: "Insuficent user data" }, { status: 500 });

	if (!newPost.imageURL) newPost.imageURL = "";
	newPost.likes = 0;
	newPost.timestamp = new Date();

	console.log(newPost);

	const { post, error } = await createPost(newPost);

	if (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}

	return NextResponse.json(post);
}

export async function GET() {
	const { posts, error } = await getPosts();
	if (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}
	return NextResponse.json(posts);
}
