import prisma from ".";
import { Prisma } from "@prisma/client";

export async function getPosts() {
	try {
		const posts = await prisma.post.findMany({
			include: { user: true },
			orderBy: { timestamp: "desc" },
		});
		return { posts };
	} catch (error) {
		return { error };
	}
}

export async function createPost(post: Prisma.PostCreateInput) {
	try {
		const postFromDB = await prisma.post.create({ data: post });
		return { post: postFromDB };
	} catch (error) {
		return { error };
	}
}

export async function deletePost(id: string) {
	try {
		const postFromDB = await prisma.post.delete({ where: { id } });
		return { post: postFromDB };
	} catch (error) {
		return { error };
	}
}

export async function likePost(id: string) {
	try {
		const postFromDB = await prisma.post.update({
			where: { id },
			data: { likes: { increment: 1 } },
		});
		return { post: postFromDB };
	} catch (error) {
		return { error };
	}
}
