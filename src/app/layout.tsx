import type { Metadata } from "next";
import "./globals.scss";
import localFont from "next/font/local";
import ColorModeProvider from "@/provider/ThemeProvider";
import Navbar from "@/components/globals/navbar";
import LenisWrapper from "@/components/wrappers/lenis-wrapper";
import { Bebas_Neue, Nunito_Sans } from "next/font/google";
import Footer from "@/components/globals/footer";
import { Toaster } from "sonner";

const averta = Bebas_Neue({
  weight: ["400"],
  variable: "--font-averta",
  subsets: ["latin"],
});

const nunu = Nunito_Sans({
  weight: ["400", "200", "300", "600", "700", "800", "900"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DITSANP",
  description:
    " DITSA: Your Gateway for Digital Transformation with Innovative Solutions and Advanced Technology",
  keywords: [
    "DITSA",
    "Digital Transformation",
    "Innovative Solutions",
    "Advanced Technology",
    "Digital Marketing",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Web Development",
    "Mobile Development",
    "Software Development",
    "Digital Transformation Agency",
    "Digital Transformation Company",
  ],
  openGraph: {
    title:
      "DITSA: Your Gateway for Digital Transformation with Innovative Solutions and Advanced Technology",
    description:
      "DITSA: Your Gateway for Digital Transformation with Innovative Solutions and Advanced Technology",
    url: "https://ditsanp.com/",
    siteName:
      "DITSA: Your Gateway for Digital Transformation with Innovative Solutions and Advanced Technology",
    images: [
      {
        url: "/ditsaog.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={averta.variable + " " + nunu.variable}>
        <LenisWrapper>
          <ColorModeProvider>
            <Navbar />
            {children}
            <Footer />
          </ColorModeProvider>
        </LenisWrapper>
        <Toaster richColors />
      </body>
    </html>
  );
}
