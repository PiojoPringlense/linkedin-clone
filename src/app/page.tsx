import Image from "next/image";
import LinkedinLogo from "../../public/logo-with-text.svg";
import LandingImage from "../../public/Landing-Page-Stock-Image.svg";
import NavIcon from "@/components/NavIcon";
import {
	BusinessCenterClientIcon,
	ExploreClientIcon,
	OndemandVideoClientIcon,
	PeopleClientIcon,
} from "@/components/Icons";
import Link from "next/link";
import LandingLink from "@/components/LandingLink";

export default async function Home() {
	return (
		<main className="bg-gray-100 min-h-screen grid gap-20 grid-rows-[min-content_1fr]">
			<nav className="max-w-7xl w-full mx-auto flex items-center justify-between py-8 self-start">
				<Image src={LinkedinLogo} alt="Linkedin Logo" />
				<div className="flex items-center gap-7">
					<div className="flex items-center gap-8">
						<NavIcon isLanding text="Discover">
							<ExploreClientIcon />
						</NavIcon>
						<NavIcon isLanding text="People">
							<PeopleClientIcon />
						</NavIcon>
						<NavIcon isLanding text="Learning">
							<OndemandVideoClientIcon />
						</NavIcon>
						<NavIcon isLanding text="Jobs">
							<BusinessCenterClientIcon />
						</NavIcon>
					</div>
					<span className="border border-gray-300 self-stretch"></span>
					<Link
						href="/signin"
						className="text-2xl leading-none text-blue-700 px-8 py-3 border-2 border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-colors">
						Sign in
					</Link>
				</div>
			</nav>
			<div className="grid grid-cols-2 relative isolate">
				<div className=" col-span-2 ">
					<div className="max-w-screen-2xl mx-auto px-12">
						<h1 className="text-7xl text-yellow-700 mt-6 leading-snug">
							Welcome to your
							<br />
							professional community
						</h1>
						<div className="grid gap-6 mt-12">
							<LandingLink link="#">Search for a job</LandingLink>
							<LandingLink link="#">Find a person you know</LandingLink>
							<LandingLink link="#">Learn a new skill</LandingLink>
						</div>
					</div>
				</div>
				<div className="col-start-2 absolute inset-0">
					<Image className="absolute h-full -z-10" src={LandingImage} alt="Men working" />
				</div>
			</div>
		</main>
	);
}
