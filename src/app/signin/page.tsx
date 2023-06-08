"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import LinkedinLogo from "@/../public/logo-with-text.svg";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [isError, setIsError] = useState(false);
	const router = useRouter();

	function handleShowPassword() {
		if (!passwordRef.current) return;
		if (passwordRef.current?.type === "password") {
			passwordRef.current.type = "text";
		} else {
			passwordRef.current.type = "password";
		}
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsError(false);
		if (!passwordRef.current || !emailRef.current) return;

		const res = await signIn("credentials", {
			email: emailRef.current.value,
			password: passwordRef.current.value,
			redirect: false,
		});

		if (res?.error) {
			setIsError(true);
			return;
		}
		router.push("/dashboard");
	}

	return (
		<div className="min-h-screen px-20 py-12 text-2xl">
			<Image width={168} src={LinkedinLogo} alt="Linkedin Logo" />
			<div className="grid place-content-center gap-14">
				<form className="rounded-lg shadow-2xl grid p-9" onSubmit={handleSubmit}>
					<h1 className="text-5xl font-bold mb-2">Sign in</h1>
					<p className="mb-9">Stay updated on your professional world</p>
					<label
						htmlFor="email"
						className="flex text-stone-500 border-2 border-stone-500 rounded p-6 mb-9 focus-within:outline">
						<input
							ref={emailRef}
							className="grow outline-none placeholder:text-stone-500"
							type="email"
							name="email"
							id="email"
							placeholder="Email or Phone"
							required
						/>
					</label>
					<label
						htmlFor="password"
						className="flex text-stone-500 border-2 border-stone-500 rounded p-6 relative mb-7 focus-within:outline">
						<input
							ref={passwordRef}
							className="grow outline-none placeholder:text-stone-500"
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							required
						/>
						<button
							type="button"
							className="text-blue-700 bg-white text-xl absolute top-0 bottom-0 right-4"
							onClick={handleShowPassword}>
							show
						</button>
					</label>
					{isError && <p className="text-red-500">Invalid Username or Password</p>}
					<Link className="text-blue-700 mb-7" href="#">
						Forgort password
					</Link>
					<button
						type="submit"
						className="rounded-full bg-blue-700 text-white p-5 border-4 border-blue-700 hover:bg-white hover:text-black transition-colors">
						Sign in
					</button>
				</form>
				<div className="flex items-center justify-center gap-2">
					<span>New to LinkedIn?</span>
					<Link className="text-blue-700" href="/register">
						Join now
					</Link>
				</div>
			</div>
		</div>
	);
}
