import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from "next/script";
import Header from "@/components/nav/header";
import Footer from "@/components/nav/footer";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mochafox.com"),
  title: "MochaFox",
  description: "Real Certified Coffee Fox",
  openGraph: {
    images: ["/warm.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://u.pawnode.co/0b747956a67cc900"
          data-website-id="9a7c4f43-1d90-4b57-b3b4-bc701cd31f74"
          strategy="afterInteractive"
        />
        <Script
          src="https://umami.pawnode.co/recorder.js"
          data-website-id="9a7c4f43-1d90-4b57-b3b4-bc701cd31f74"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <main className="bg-foxOrange h-full w-full flex flex-col">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
