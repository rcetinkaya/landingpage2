import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import {Navbar} from "@/components/navbar";
import { Footer } from "@/components/footer";


export const metadata: Metadata = {
  title: "Ramazan LandingPage",
  description: "Generated Ramazan",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Navbar/>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
