import React from "react";
import { ReactSVG } from "react-svg";

export const ProjectCard = ({
  width,
  height,
  title,
  bgStyle,
  icon,
  link,
  desc,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${bgStyle} w-80 h-96 m-2 rounded-2xl p-1.5 group shadow-lg`}
    >
      <div
        className={`h-full rounded-xl flex flex-col justify-between items-center text-center`}
      >
        <div className="text-5xl text-white dark:text-darkBlue font-bold">
          {title}
        </div>
        <ReactSVG
          src={icon}
          className="w-2/3 text-white dark:text-darkBlue fill-current group-hover:animate-bounce"
        />
        <div className="transition duration-300 opacity-0 group-hover:opacity-100 text-sm font-medium text-white dark:text-darkBlue">
          {desc}
        </div>
      </div>
    </a>
  );
};
