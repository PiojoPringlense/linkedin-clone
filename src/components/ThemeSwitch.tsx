"use client";
import { ThemeContext } from "@/lib/providers";
import { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeSwitch() {
	const { darkMode, togleDarkMode } = useContext(ThemeContext);

	return (
		<label htmlFor="switch" className="bg-gray-600 rounded-full relative p-[6px] inline-block">
			<DarkModeIcon className="text-yellow-300 w-7 h-7 mr-2" />
			<span
				className={`bg-white w-7 h-7 rounded-full absolute top-1 ${
					darkMode ? "right-1" : "left-1"
				}`}></span>
			<input
				className="hidden"
				type="checkbox"
				name="switch"
				id="switch"
				onChange={togleDarkMode}
				checked={darkMode}
			/>
			<LightModeIcon className="text-yellow-300 w-7 h-7" />
		</label>
	);
}
