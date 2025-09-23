// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"; 

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
  metadataBase: new URL("https://yourdomain.com"), // change to your real domain or vercel URL
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
    url: "https://yourdomain.com",
    siteName: "Moses Thomas Portfolio",
    images: [
      {
        url: "/og-image.png", // place this file in /public
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
        {/* Set theme before first paint (no FOUC) */}
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
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer /> {/* Always shows at the bottom */}
        </div>
      </body>
    </html>
  );
}
