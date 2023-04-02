import TechnologySphere from "../components/TechnologySphere/TechnologySphere";
import TextAnimation from "../components/TextAnimation/TextAnimation";

export default function About() {
  return (
    <div className="flex h-screen items-center md:justify-evenly bg-background-color ">
      <div className="flex flex-col md:w-1/4 gap-6 px-8 md:px-0">
        <div className="text-4xl md:text-7xl text-font-color-hoover font-semibold">
          <TextAnimation text="About Me" />
        </div>
        <div className="md:w-full">
          <h1 className="text-text-color md:font-normal md:text-2xl text-lg">
            I am an IT student and my goal is to become a Frontend Developer. I
            am looking for an internship that will give me an opportunity to
            learn skills that will help me with accustoming to job market. In my
            free time I am developing my own pojects in order to learn as much
            as I can by my own.
          </h1>
        </div>
      </div>
      <div className="md:block hidden">
        <TechnologySphere />
      </div>
    </div>
  );
}
