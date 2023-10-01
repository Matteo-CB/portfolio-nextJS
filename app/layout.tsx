import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Portfolio Développeur Front end React | Next.js | Node.js | SEO Matteo Chante-Biyikli",
  description:
    "Salut ! Je suis Matteo, Développeur Front end React Next js. Je suis prêt à entendre dans votre projet, venez voir mon portfolio !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`relative ${inter.className} h-[5000px] bg-gray-50 text-gray-950`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] -z-10 sm:w-[68.75rem]"></div>
        <div className="-z-10 bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
