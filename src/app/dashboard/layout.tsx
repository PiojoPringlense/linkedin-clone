"use client";
import NavBar from "@/app/dashboard/NavBar";
import { ThemeContext } from "@/lib/providers";
import { useContext } from "react";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	const { darkMode } = useContext(ThemeContext);
	const { data: session, status } = useSession();
	const router = useRouter();
	if (status === "unauthenticated") router.push("/signin");

	return (
		<div className={darkMode ? "dark" : ""}>
			<div className="bg-stone-100 dark:bg-black text-black dark:text-white min-h-screen relative">
				{session?.user && <NavBar user={session!.user} />}
				{session?.user && children}
			</div>
		</div>
	);
}
