import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rosen Apartments Saarbrücken – Central Furnished Apartments | 24/7 Check-in",
  description: "Fully furnished apartments in the heart of Saarbrücken. Premium, Comfort & Studio options with full kitchen, Smart TV & 24/7 self check-in. From Rosenstraße 2.",
  openGraph: {
    title: "Rosen Apartments Saarbrücken – Central Furnished Apartments | 24/7 Check-in",
    description: "Fully furnished apartments in the heart of Saarbrücken. Premium, Comfort & Studio options with full kitchen, Smart TV & 24/7 self check-in. From Rosenstraße 2.",
    images: [{ url: "/images/appartements/premium1.JPG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosen Apartments Saarbrücken – Central Furnished Apartments | 24/7 Check-in",
    description: "Fully furnished apartments in the heart of Saarbrücken. Premium, Comfort & Studio options with full kitchen, Smart TV & 24/7 self check-in. From Rosenstraße 2.",
    images: ["/images/appartements/premium1.JPG"],
  },
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

