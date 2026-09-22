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
      <body className={inter.className}>
        <main className="bg-foxOrange h-full w-full flex flex-col">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
      <Script
        src="https://u.crust.monster/e45e75e27812"
        data-website-id="25a50dcf-3f9a-4dab-b6d6-41ece4608ee1"
        strategy="afterInteractive"
      />
    </html>
  );
}
