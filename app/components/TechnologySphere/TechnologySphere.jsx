"use client";
import TagCloud from "TagCloud";
import { useEffect } from "react";

const TechnologySphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const technologies = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Git",
        "GitHub",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "slow",
        keep: true,
      };

      TagCloud(container, technologies, options);
    };
  }, []);

  return (
    <>
      <div className="">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TechnologySphere;
