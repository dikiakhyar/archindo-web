import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import { ThemeProvider } from "./components/ThemeContext";
import { themeInitScript } from "./components/themeScript";

const SITE_URL = "https://www.archindo-geointelligence.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Archindo Geointelligence",
    template: "%s | Archindo Geointelligence",
  },
  description:
    "Advancing geospatial intelligence and AI-driven solutions for impactful research and real-world applications.",
  openGraph: {
    title: "Archindo Geointelligence",
    description: "Geospatial Intelligence & AI Solutions for a smarter future.",
    url: SITE_URL,
    siteName: "Archindo Geointelligence",
    // PNG 1200x630 — ukuran yang diharapkan WhatsApp, LinkedIn, dan X
    // saat menampilkan pratinjau tautan.
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archindo Geointelligence",
    description: "Geospatial Intelligence & AI Solutions for a smarter future.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f3f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* Pasang tema tersimpan sebelum halaman digambar (anti-kedip). */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />

        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollReveal />
        </ThemeProvider>
      </body>
    </html>
  );
}
