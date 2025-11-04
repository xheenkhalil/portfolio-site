// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; 
import "./globals.css";
import Footer from "@/components/Footer";
import HeaderBar from "@/components/HeaderBar"; // <-- MODIFICATION: Import HeaderBar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio – Moses Thomas",
  description:
    "Personal portfolio of Moses Thomas – Data Scientist, Data Analyst, Writer, Creator",
  metadataBase: new URL("https://mosesthomas.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Moses Thomas | Portfolio",
    description:
      "Explore the portfolio of Moses Thomas – showcasing projects in data science, analytics, and writing.",
    url: "https://mosesthomas.vercel.app",
    siteName: "Moses Thomas Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moses Thomas Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moses Thomas | Portfolio",
    description:
      "Explore the portfolio of Moses Thomas – Data Scientist, Data Analyst, Writer, Creator.",
    images: ["/og-image.png"],
    creator: "@xenzyfer2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Netlify Identity Widget script */}
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />

        <div className="flex flex-col min-h-screen">
          <HeaderBar /> {/* <-- MODIFICATION: Add HeaderBar component */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}