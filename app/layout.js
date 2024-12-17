import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar.js";
import Pathbar from "./components/Pathbar";

// Custom Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Global SEO metadata
export const metadata = {
  title: "RwInsight - Educational Resources, News, and Healthcare",
  description:
    "RwInsight provides articles, PDFs, documents, and trending news related to education, healthcare, and more.",
  keywords:
    "educational resources, healthcare news, engineering, computer science, PDFs, documents, trending news, education",
  authors: [{ name: "RwInsight Team", url: "https://rwinsight.site" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "RwInsight - Educational Resources, News, and Healthcare",
    description:
      "RwInsight provides articles, PDFs, documents, and trending news related to education, healthcare, and more.",
    url: "https://rwinsight.site",
    siteName: "RwInsight",
    type: "website",
    images: [
      {
        url: "https://rwinsight.site/images/web-logo.jpg",
        width: 1200,
        height: 1200,
        alt: "RwInsight Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rwinsight",
    title: "RwInsight - Educational Resources, News, and Healthcare",
    description:
      "RwInsight provides articles, PDFs, documents, and trending news related to education, healthcare, and more.",
    images: "https://rwinsight.site/images/web-logo.jpg",
  },
  robots: "index, follow",
  canonical: "https://rwinsight.site", // Canonical URL for SEO
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Pathbar/>
        {children}
      </body>
    </html>
  );
}
