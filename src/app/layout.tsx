import { ThemeProvider } from "@/lib/providers";
import "./globals.css";
import { roboto } from "@/lib/font";

export const metadata = {
	title: "Linkedin Clone",
	description: "Linkedin clone App from cededam",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<ThemeProvider>
				<body className={`text-xl leading-none ${roboto.className}`}>{children}</body>
			</ThemeProvider>
		</html>
	);
}
