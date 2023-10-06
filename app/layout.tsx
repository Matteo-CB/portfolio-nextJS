import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSection";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

const PortfolioJsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Portfolio Développeur Front end React | Next.js | Node.js | SEO Matteo Chante-Biyikli",
    url: "https://www.example.com",
    description:
      "Mon portfolio de développeur Front end React, Next.js et Node.js",
    publisher: {
      "@type": "Organization",
      name: "Matteo Chante-Biyikli",
      logo: {
        "@type": "ImageObject",
        url: "https://www.example.com/logo.png",
        width: 600,
        height: 60,
      },
    },
    image: {
      "@type": "ImageObject",
      url: "https://www.example.com/image.png",
      width: 1200,
      height: 630,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

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
    <html lang="fr" className="!scroll-smooth">
      <Head>
        <PortfolioJsonLd />
      </Head>
      <body
        className={`relative ${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36 transition dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] -z-10 sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="-z-10  bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]  dark:bg-[#676394]"></div>

        <ActiveSectionContextProvider>
          {children}
          <Footer />
        </ActiveSectionContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}
