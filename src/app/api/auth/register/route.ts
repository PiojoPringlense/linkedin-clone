import { createUser } from "@/lib/Prisma/users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
	const newUser = await request.json();

	if (
		!newUser.name ||
		newUser.name === "" ||
		!newUser.email ||
		newUser.email === "" ||
		!newUser.password ||
		newUser.name === ""
	)
		return NextResponse.json({ error: "Insuficent user data" }, { status: 500 });

	newUser.password = await bcrypt.hash(newUser.password, 10);

	try {
		const res = await fetch("https://randomuser.me/api/");
		const data = await res.json();
		const avatar = data?.results[0]?.picture?.large;
		newUser.avatar = avatar;
	} catch (error) {
		newUser.avatar = "avatar";
	}

	console.log(newUser);

	const { user, error } = await createUser(newUser);

	if (error) {
		console.log(error);
		return NextResponse.json(error, { status: 500 });
	}

	return NextResponse.json(user);
}
