import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GridOverlay from "./components/tools/GridOverlay";
import Loader from "./components/Loader/Loader";
import { GSAPTimelineViewer } from "./components/tools/GSAPTimeline";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ink Club",
  description: "Ink Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GridOverlay />
        <Loader />
        {children}
        
        {/* GSAP Timeline Viewer - Solo in development */}
        {process.env.NODE_ENV === "development" && (
          <GSAPTimelineViewer 
            timelineId="loader-timeline"
          />
        )}
      </body>
    </html>
  );
}
