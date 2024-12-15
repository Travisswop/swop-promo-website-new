import { Baloo_2 } from "next/font/google";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";

const baloo = Baloo_2({ subsets: ["latin"] });
const fira = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Swop Website",
  description: "",
  // metadataBase: new URL('https://trip-law-new-website.vercel.app'),
  // alternates: {
  //   canonical: '/',
  //   languages: {
  //     'en-US': '/en-USA',
  //   },
  // },
  // openGraph: {
  //   images: '/opengraph-image.jpg',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <Providers>
          <MainNavbar />
          <div className=" mt-28 relative z-10">{children}</div>
          <Analytics />
          <SpeedInsights />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
