import type { Metadata } from "next";

import { Noto_Sans_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";
import {GlobalStyle} from "@/styles/GlobalStyle";
import StyledComponentsRegistry from "@/lib/registry";
import PageTransition from "@/components/layout/PageTransition";

const noto = Noto_Sans_Display({
	subsets: ['latin'],
	style: 'italic',
	weight: '600',
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
			<body className={noto.className}>
				<StyledComponentsRegistry>
					<GlobalStyle />
					<AppNavbar />
					<PageTransition>{children}</PageTransition>
					<Analytics />
					<SpeedInsights />
					<AppFooter />
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
