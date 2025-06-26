import { Geist, Geist_Mono } from "next/font/google";
import { Caveat } from "next/font/google";
import "./styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Metadata } from "next";
import { Viewport } from "next";
import SchemaOrg from "../components/SchemaOrg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftSuave | Custom AI Software Solutions for Business Growth",
  description:
    "Boost your business with SoftSuave’s custom AI software solutions. Specializing in AI development, IT outsourcing, web and mobile app services.",
  keywords:
    "softsuave, ai software solutions, custom AI development, IT outsourcing, hire developers, mobile app development, web development, android app, ios app, artificial intelligence",
  metadataBase: new URL("https://www.softsuave.com"),
  alternates: {
    canonical: "https://www.softsuave.com",
  },
  authors: [
    {
      name: "SoftSuave Technologies",
      url: "https://www.softsuave.com",
    },
  ],
  creator: "SoftSuave",
  publisher: "SoftSuave Technologies",
  category: "Technology",
  openGraph: {
    type: "website",
    title: "SoftSuave | Custom AI Software Solutions for Business Growth",
    description:
      "Discover how SoftSuave's AI software solutions empower businesses with automation, efficiency, and digital innovation.",
    url: "https://www.softsuave.com",
    siteName: "SoftSuave Technologies",
    images: [
      {
        url: "https://www.softsuave.com/assets/images/og-img-ai-solution.webp",
        width: 1200,
        height: 630,
        alt: "SoftSuave AI Software Solutions",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@softsuave",
    creator: "@softsuave",
    title: "SoftSuave | Custom AI Software Solutions for Business Growth",
    description:
      "Explore SoftSuave's tailored AI software solutions and IT outsourcing services to elevate your digital capabilities.",
    images: ["https://www.softsuave.com/assets/images/og-img-ai-solution.webp"],
  },
  icons: {
    icon: [
      {
        url: "https://www.softsuave.com/favicon.svg",
        type: "image/svg+xml",
        sizes: "13x15",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#FD1942",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${caveat.variable}`}
      >
        <SchemaOrg />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
