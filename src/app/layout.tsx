import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";

const poppins = localFont({
  src: "./fonts/poppins-v21-latin-regular.woff2",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Raven Justin Garcia | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  contact_info,
  main,
}: Readonly<{
  contact_info: React.ReactNode;
  main: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} relative overflow-x-hidden antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* BACKGROUND SNIPPET */}
          <div className="relative h-full w-full bg-background">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </div>
          <div className="absolute top-0 z-[-2] h-full w-screen bg-background bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
          {/* BACKGROUND SNIPPET */}
          <div className="mx-auto max-w-screen-lg pt-[150px]">
            <div className="flex w-full justify-center gap-6 py-4">
              {contact_info}
              {main}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
