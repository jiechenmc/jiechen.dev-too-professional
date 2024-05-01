'use client'

import AboveTheFold from "./components/home"
import About from "./components/about";
import Projects from "./components/projects";


export default function Home() {
  return (
    <>
      <AboveTheFold />
      <div>
        <About />
        <Projects />
      </div>
    </>
  );
}
