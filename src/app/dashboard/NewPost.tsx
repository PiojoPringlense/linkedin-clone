"use client";
import { PermIdentityClientIcon, BusinessCenterClientIcon } from "@/components/Icons";
import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import PanoramaIcon from "@mui/icons-material/Panorama";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import ArticleIcon from "@mui/icons-material/Article";
import CloseIcon from "@mui/icons-material/Close";
import LoopIcon from "@mui/icons-material/Loop";

export default function NewPost() {
	const [isOpen, setIsOpen] = useState(false);
	const { data: session, status } = useSession();
	const messageRef = useRef<HTMLTextAreaElement>(null);
	const imageURLRef = useRef<HTMLInputElement>(null);
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!messageRef || !messageRef.current || !imageURLRef || !imageURLRef.current) return;
		setIsLoading(true);

		const newPost = {
			userId: session?.user.id,
			message: messageRef.current.value,
			imageURL: imageURLRef.current.value,
		};

		const options = {
			method: "POST",
			body: JSON.stringify(newPost),
		};

		const res = await fetch("http://localhost:3000/api/post", options);

		if (res.ok) {
			messageRef.current.value = "";
			imageURLRef.current.value = "";

			setIsOpen(false);
			setIsLoading(false);
		} else {
			alert("Problem posting! Please try again");
			setIsLoading(false);
		}
	}

	function handleClose() {
		if (!messageRef || !messageRef.current || !imageURLRef || !imageURLRef.current) return;

		messageRef.current.value = "";
		imageURLRef.current.value = "";

		setIsOpen(false);
	}

	return (
		<div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-300 dark:border-transparent p-4 text-neutral-500 dark:text-neutral-300">
			<div className="flex items-center gap-3">
				{session?.user.avatar ? (
					<img
						src={session.user.avatar}
						alt={session.user.name}
						width={60}
						height={60}
						className="rounded-full"
					/>
				) : (
					<PermIdentityClientIcon className="w-[60px] h-[60px]" />
				)}
				<button
					className="border rounded-full grow text-left p-4 border-gray-400 dark:border-slate-500 cursor-text"
					onClick={() => setIsOpen(true)}>
					Start a post
				</button>
			</div>
			<div className="flex items-center justify-around pt-5 pb-1">
				<div className="flex items-center gap-1 cursor-pointer hover:text-black dark:hover:text-white">
					<PanoramaIcon className="w-8 h-8 text-blue-400" />
					<p>Photo</p>
				</div>
				<div className="flex items-center gap-1 cursor-pointer hover:text-black dark:hover:text-white">
					<VideoCameraBackIcon className="w-8 h-8 text-green-400" />
					<p>Video</p>
				</div>
				<div className="flex items-center gap-1 cursor-pointer hover:text-black dark:hover:text-white">
					<BusinessCenterClientIcon className="w-8 h-8 text-blue-300" />
					<p>Job</p>
				</div>
				<div className="flex items-center gap-1 cursor-pointer hover:text-black dark:hover:text-white">
					<ArticleIcon className="w-8 h-8 text-red-400" />
					<p>Write Article</p>
				</div>
			</div>

			{isOpen && (
				<div className="absolute inset-0 bg-black bg-opacity-25 z-50 ">
					<div className="aboslute left-0 top-0 right-0 h-screen grid place-content-center">
						<div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-300 dark:border-transparent text-neutral-500 dark:text-neutral-300 min-w-[750px]">
							<div className="p-6 flex items-center justify-between border-b border-gray-400 dark:border-slate-500">
								<p>Create a post</p>
								<button onClick={handleClose}>
									<CloseIcon />
								</button>
							</div>
							<form className="p-6" onSubmit={handleSubmit}>
								<div className="flex items-center gap-3 text-black dark:text-white">
									{session?.user.avatar ? (
										<img
											src={session.user.avatar}
											alt={session.user.name}
											width={60}
											height={60}
											className="rounded-full"
										/>
									) : (
										<PermIdentityClientIcon className="w-[60px] h-[60px]" />
									)}
									<p>{session?.user.name}</p>
								</div>
								<textarea
									ref={messageRef}
									required
									className="w-full h-36 outline-gray-400 dark:outline-slate-500 bg-transparent mt-3"
									name="message"
									id="message"
									placeholder="What do you want to talk about?"></textarea>
								<div className="flex items-center justify-between gap-3">
									<input
										ref={imageURLRef}
										className="grow py-2 outline-gray-400 dark:outline-slate-500 bg-transparent"
										type="text"
										name="imageURL"
										id="imageURL"
										placeholder="Add a photo URL (optional)"
									/>
									<button
										disabled={isLoading}
										type="submit"
										className="bg-stone-300 hover:bg-blue-400 hover:text-white rounded-full px-6 py-4">
										{isLoading ? <LoopIcon className="animate-spin" /> : "Post"}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
