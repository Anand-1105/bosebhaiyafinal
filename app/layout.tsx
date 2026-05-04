import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Chatbot from "./components/common/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Souhardya Bose — Professor · Builder · Community Leader",
  description:
    "I turn classrooms into launchpads and ideas into movements. Founder of Techfluence — 6 editions, 100K+ reach, 30+ global leaders shaping tomorrow's tech landscape.",
  keywords: ["Souhardya Bose", "Techfluence", "Professor", "Community Leader", "Builder", "Tech Education", "Entrepreneurship"],
  authors: [{ name: "Souhardya Bose" }],
  creator: "Souhardya Bose",
  publisher: "Souhardya Bose",
  metadataBase: new URL("https://souhardyabose.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://souhardyabose.com",
    title: "Souhardya Bose — Professor · Builder · Community Leader",
    description: "I turn classrooms into launchpads and ideas into movements. Founder of Techfluence.",
    siteName: "Souhardya Bose",
  },
  twitter: {
    card: "summary_large_image",
    title: "Souhardya Bose — Professor · Builder · Community Leader",
    description: "I turn classrooms into launchpads and ideas into movements.",
    creator: "@SouhardyaBose", // Replace with actual handle if different
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Souhardya Bose",
    "url": "https://souhardyabose.com",
    "jobTitle": "Professor, Builder, Community Leader",
    "sameAs": [
      "https://linkedin.com/in/souhardyabose", // Add actual links if you have them
      "https://twitter.com/SouhardyaBose"
    ],
    "description": "Founder of Techfluence — Turning classrooms into launchpads and ideas into movements."
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WC2LX3M89P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WC2LX3M89P');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
