"use client";
import { signIn, signOut } from "next-auth/react";
import { useContext } from "react";
import { ThemeContext } from "@/lib/providers";

type Props = {};

export default function Login({}: Props) {
	const { darkMode } = useContext(ThemeContext);

	return (
		<>
			<button onClick={() => signIn()}>Sign in</button>
			<button onClick={() => signOut()}>Sign out</button>
			<p className="text-4xl">Dark mode: {darkMode ? "Dark" : "Light"}</p>
		</>
	);
}
