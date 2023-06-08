import prisma from ".";
import { Prisma } from "@prisma/client";

export async function getUsers() {
	try {
		const users = await prisma.user.findMany();
		return { users };
	} catch (error) {
		return { error };
	}
}

export async function createUser(user: Prisma.UserCreateInput) {
	try {
		const userFromDB = await prisma.user.create({ data: user });
		return { user: userFromDB };
	} catch (error) {
		return { error };
	}
}

export async function getUserById(id: string) {
	try {
		const user = await prisma.user.findUnique({
			where: { id },
			include: { posts: true },
		});
		return { user };
	} catch (error) {
		return { error };
	}
}

export async function getUserByEmail(email: string) {
	try {
		const user = await prisma.user.findFirst({
			where: { email },
			include: { posts: false },
		});
		return { user };
	} catch (error) {
		return { error };
	}
}
