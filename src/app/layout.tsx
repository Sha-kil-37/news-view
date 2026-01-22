import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

//

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
    default: "Global News App",
    template: "%s | Global News App",
  },
  description:
    "Read top headlines from around the world. Filter news by country and category.",
  keywords: ["news app", "world news", "latest headlines", "nextjs news app"],
  authors: [{ name: "Shakil Ahmed" }],
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Global News App",
    description: "Stay updated with the latest international news by country.",
    url: "https://your-domain.com",
    siteName: "Global News App",
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

//
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
        {children}
      </body>
    </html>
  );
}
