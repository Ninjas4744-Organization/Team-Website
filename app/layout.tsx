import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Provider } from "@/components/ui/provider";
import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";
import {GlobalStyle} from "@/styles/GlobalStyle";
import StyledComponentsRegistry from "@/lib/registry";
import PageTransition from "@/components/layout/PageTransition";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ninjas #4744",
	description: "We're FIRST robotics team from Hadera",
	other: {
		"google-site-verification": "cb8QhnaD_l9CKK1khygeTrrkyUpe-vIkrdaq-0gQZsE",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<StyledComponentsRegistry>
					<GlobalStyle />
					<Provider>
						<AppNavbar />
						<PageTransition>{children}</PageTransition>
						<Analytics />
						<SpeedInsights />
						<AppFooter />
					</Provider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
