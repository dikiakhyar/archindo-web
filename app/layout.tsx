import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeContext";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Archindo Geointelligence",
  description:
    "Advancing geospatial intelligence and AI-driven solutions for impactful research and real-world applications.",

  openGraph: {
    title: "Archindo Geointelligence",
    description:
      "Geospatial Intelligence & AI Solutions for a smarter future.",
    url: "https://archindo-geointelligence.vercel.app",
    siteName: "Archindo Geointelligence",
    images: [
      {
        url: "/hero.png", // 🔥 gambar preview
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
        <body className="min-h-full flex flex-col">

  <ThemeProvider>
    <Navbar />
    {children}
    <Footer />
  </ThemeProvider>

</body>
    </html>
  );
}
