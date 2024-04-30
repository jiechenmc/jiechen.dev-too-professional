'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Icon } from '@iconify/react';
import NavItem from "@/components/home/NavItem";
import TopBanner from "@/components/home/TopBanner";

export default function Home() {
  const handleGithubRedirect = () => {
    console.log("Clicked")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TopBanner />

      <div className="relative z-[-1] flex flex-col gap-5 place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/self.jpg"
          alt="My selfie"
          width={180}
          height={180}
          priority
        />
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Jie Chen
        </h2>
        <h4 className="scroll-m-20 text-m font-semibold tracking-tight">
          Cloud Infrastructure Engineer Intern @ Robert Half
        </h4>
        <div className="grid grid-flow-col gap-4">
          <Button type="button" variant="outline" size="icon" onClick={handleGithubRedirect}>
            <Icon icon="logos:github-icon" width="31" height="34" />
          </Button>
          <Button type="button" variant="outline" size="icon" onClick={handleGithubRedirect}>
            <Icon icon="mdi:resume" width="31" height="34" />
          </Button>
          <Button type="button" variant="outline" size="icon" onClick={handleGithubRedirect}>
            <Icon icon="logos:linkedin-icon" width="31" height="34" />
          </Button>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

        <NavItem title="About" href="/about" body="Learn more about me :D" />
        <NavItem title="Projects" href="/projects" body="Check out some projects I have done in the past." />
        <NavItem title="Tutorials" href="/tutorials" body="Check out some tutorials that I have made for others and myself." />
        <NavItem title="Skills" href="/skills" body="Visualization of my skillset" />

      </div>
    </main>
  );
}
