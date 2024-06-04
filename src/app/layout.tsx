import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
// CUSTOM COMPONENTS
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Broking Bisons",
	description:
		"We offer online courses to help individuals of all experience levels master stock market trading and investing. Our expert-led, tailored courses are designed to meet your unique needs and goals.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider defaultTheme="dark" attribute="class">
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
