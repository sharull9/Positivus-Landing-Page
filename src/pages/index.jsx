import Head from "next/head";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandLogos from "@/components/BrandLogos";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import WorkingProcess from "@/components/WorkingProcess";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

const sg = Space_Grotesk({ subsets: ["latin"], weight: ["300", "500"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Positivus-Landing-Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=0.1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center w-full h-screen">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[800px] w-[395px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-x-hidden w-[375px] h-[780px] bg-white dark:bg-gray-800  overflow-y-scroll">
            <main
              className={`${sg.className} bg-white relative overflow-x-hidden`}
            >
              <Header />
              <HeroSection />
              <BrandLogos />
              <Services />
              <CaseStudies />
              <WorkingProcess />
              <Team />
              <Testimonials />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}