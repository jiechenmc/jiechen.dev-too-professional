'use client'
import Image from "next/image";
import NavItem from "@/components/home/NavItem";
import TopBanner from "@/components/home/TopBanner";
import { H2, H4 } from "@/components/typography";
import LinkBar from "@/components/home/LinkBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TopBanner lText="" rText="" />

      <div className="relative  flex flex-col gap-5 place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative z-[-1] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert select-none"
          src="/self.jpg"
          alt="Jie Chen selfie"
          width={256}
          height={256}
          priority
        />
        <H2>
          Jie Chen
        </H2>
        <H4>
          Cloud Infrastructure Engineer Intern @ Robert Half
        </H4>
        <LinkBar />
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <NavItem title="About" href="/about" body="Learn more about me :D" />
        <NavItem title="Projects" href="/projects" body="Check out some projects I have done in the past." />
        <NavItem title="Blog" href="https://blog.jiechen.dev" body="Check out some tutorials that I have made for others and myself." />
        <NavItem title="Loqi" href="https://loqi.jiechen.dev" body="An generative AI study application that I am currently working on with my Vertically Integrated Projects (VIP) Team" />
      </div>
    </main >
  );
}
