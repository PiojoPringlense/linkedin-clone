"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import LinkedinLogo from "@/../public/logo-with-text.svg";
import LoopIcon from "@mui/icons-material/Loop";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
	const emailRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

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
		setIsLoading(true);
		if (!emailRef.current || !nameRef.current || !passwordRef.current) return;
		const newUser = {
			email: emailRef.current.value,
			name: nameRef.current.value,
			password: passwordRef.current.value,
		};

		const options = {
			method: "POST",
			body: JSON.stringify(newUser),
		};

		const res = await fetch("http://localhost:3000/api/auth/register", options);

		if (res.ok) {
			router.push("/signin");
			setIsLoading(false);
		} else {
			alert("Problem creating user! Please try again");
			emailRef.current.value = "";
			nameRef.current.value = "";
			passwordRef.current.value = "";
			setIsLoading(false);
		}
	}

	return (
		<div className="min-h-screen px-20 py-12 text-xl">
			<form className="grid max-w-xl mx-auto" onSubmit={handleSubmit}>
				<Image className="mb-7 mx-auto" width={128} src={LinkedinLogo} alt="Linkedin Logo" />
				<h2 className="text-2xl mb-16 text-center">Join LinkedIn now &mdash; it's free!</h2>
				<label htmlFor="email" className="flex flex-col text-stone-500  mb-9">
					Email or phone number
					<input
						ref={emailRef}
						className="grow border-2 border-stone-500 rounded px-4 py-2 placeholder:text-stone-500"
						type="email"
						name="email"
						id="email"
						required
					/>
				</label>
				<label htmlFor="name" className="flex flex-col text-stone-500  mb-9">
					Your name
					<input
						ref={nameRef}
						className="grow border-2 border-stone-500 rounded px-4 py-2 placeholder:text-stone-500"
						type="text"
						name="name"
						id="name"
						required
					/>
				</label>
				<label htmlFor="password" className="flex flex-col text-stone-500  relative mb-8">
					Password (6 or more characters)
					<input
						ref={passwordRef}
						className="grow border-2 border-stone-500 rounded px-4 py-2 placeholder:text-stone-500"
						type="password"
						name="password"
						id="password"
						minLength={6}
						required
					/>
					<button
						className=" bg-white absolute  bottom-2 right-4"
						onClick={handleShowPassword}>
						show
					</button>
				</label>

				<button
					disabled={isLoading}
					type="submit"
					className="rounded-full bg-blue-700 text-white p-5 border-4 border-blue-700 hover:bg-white hover:text-black transition-colors mb-16 disabled:bg-stone-500 disabled:border-stone-500 disabled:text-white">
					{isLoading ? <LoopIcon className="animate-spin" /> : "Continue"}
				</button>
				<div className="flex items-center justify-center gap-2">
					<span>Already on LinkedIn?</span>
					<Link className="text-blue-700" href="/signin">
						Sign in
					</Link>
				</div>
			</form>
		</div>
	);
}
