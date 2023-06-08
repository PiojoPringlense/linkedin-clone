"use client";
import { SessionProvider } from "next-auth/react";

import { createContext, useState } from "react";

const ThemeContext = createContext({ darkMode: false, togleDarkMode: () => {} });

function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [darkMode, setDarkMode] = useState(false);

	function togleDarkMode() {
		setDarkMode(!darkMode);
	}

	return (
		<SessionProvider>
			<ThemeContext.Provider value={{ darkMode, togleDarkMode }}>
				{children}
			</ThemeContext.Provider>
		</SessionProvider>
	);
}

export { ThemeContext, ThemeProvider };
