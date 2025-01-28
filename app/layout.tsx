import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Provider } from "@/components/ui/provider";
import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ninjas#4744",
  description: "We're FIRST robotics team from Hadera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <AppNavbar />
          <main>{children}</main>
          <AppFooter />
        </Provider>
      </body>
    </html>
  );
}
