import TechnologySphere from "../components/TechnologySphere/TechnologySphere";
import TextAnimation from "../components/TextAnimation/TextAnimation";
("use client");

export default function About() {
  return (
    <div className="flex w-full h-screen items-center justify-between bg-background-color p-16">
      <div className="flex w-1/3">
        {/* <TextAnimation text="About Me" /> */}
        <h1 className="text-border-color font-normal text-2xl">
          I am an IT student and my goal is to become a Frontend Developer. I am
          looking for an internship that will give me an opportunity to learn
          skills that will help me with accustoming to job market. In my free
          time I am developing my own pojects in order to learn as much as I can
          by my own.
        </h1>
      </div>
      <div className="">
        <TechnologySphere />
      </div>
    </div>
  );
}
