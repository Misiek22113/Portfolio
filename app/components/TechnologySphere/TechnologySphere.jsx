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
        radius: 400,
        maxSpeed: "normal",
        initSpeed: "slow",
        keep: true,
      };

      TagCloud(container, technologies, options);
    };
  }, []);

  return (
    <div className="text-font-color-hoover">
      <span className="tagcloud inline-block items-center font-sans font-semibold text-xl"></span>
    </div>
  );
};

export default TechnologySphere;
