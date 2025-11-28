import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Moses Thomas | Data Scientist & Full Stack Developer",
    template: "%s | Moses Thomas",
  },
  description:
    "Portfolio of Moses Thomas – Expert in Data Science, Machine Learning, and Full Stack Web Development. View projects, skills, and professional experience.",
  metadataBase: new URL("https://mosesthomas.vercel.app"),
  keywords: [
    "Moses Thomas",
    "Data Scientist",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Data Analytics",
  ],
  authors: [{ name: "Moses Thomas", url: "https://mosesthomas.vercel.app" }],
  creator: "Moses Thomas",
  publisher: "Moses Thomas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Moses Thomas | Data Scientist & Full Stack Developer",
    description:
      "Explore the portfolio of Moses Thomas – showcasing projects in data science, analytics, and web development.",
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
    title: "Moses Thomas | Data Scientist & Full Stack Developer",
    description:
      "Explore the portfolio of Moses Thomas – Data Scientist, Data Analyst, Writer, Creator.",
    images: ["/og-image.png"],
    creator: "@xenzyfer2",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Moses Thomas",
  url: "https://mosesthomas.vercel.app",
  image: "https://mosesthomas.vercel.app/og-image.png",
  sameAs: [
    "https://www.linkedin.com/in/moses-thomas-61195434a/",
    "https://github.com/xheenkhalil",
    "https://twitter.com/xenzyfer2",
  ],
  jobTitle: "Data Scientist & Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  description:
    "Moses Thomas is a Data Scientist and Full Stack Developer specializing in building data-driven applications and scalable web solutions.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* ✅ Netlify Identity Widget script */}
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />

        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}