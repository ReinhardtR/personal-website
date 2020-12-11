import React from "react";
import DarkModeSwitch from "../elements/darkModeSwitch";
import { ProjectCard } from "../elements/projectCard";
import CubeIcon from "../../assets/cube.svg";
import PathIcon from "../../assets/path.svg";
import ArrayIcon from "../../assets/array.svg";
import WeatherIcon from "../../assets/weather.svg";

const Projects = () => {
  return (
    <>
      <div className="w-auto h-1/2 m-2 p-4 bg-white dark:bg-darkBlue transition duration-300 rounded-xl flex flex-col justify-between items-center shadow-2xl">
        <h1 className="my-5 text-darkBlue dark:text-white font-bold text-5xl text-center">
          Projects
        </h1>
        <div className="h-full flex flex-grow flex-wrap justify-center items-center m-2 text-2xl">
          <ProjectCard
            title={"Snake Game"}
            link={"https://reinhardtr.github.io/snake"}
            bgStyle={"bg-gradient-to-br from-first to-second"}
            icon={CubeIcon}
            desc={
              "I recreated the famous retro game Snake. The game uses Google Auth and Gmail, to connect the users to a live Leaderboard via. Firebase."
            }
          />
          <ProjectCard
            title={"Sorting Visualizer"}
            link={"https://reinhardtr.github.io/sorting-visualizer"}
            bgStyle={"bg-gradient-to-br from-first to-second"}
            icon={ArrayIcon}
            desc={
              "I created a tool, that visualizes the process of a sorting algorithm, sorting randomly generetaed arrays, at a user defined speed."
            }
          />
          <ProjectCard
            title={"Pathfinding Visualizer"}
            link={"https://reinhardtr.github.io/pathfinding-visualizer"}
            bgStyle={"bg-gradient-to-br from-first to-second"}
            icon={PathIcon}
            desc={
              "I recreated the famous retro game Snake. The game uses Google Auth and Gmail, to connect the users to a live Leaderboard via. Firebase."
            }
          />
          <ProjectCard
            title={"Stellar Weather"}
            link={"https://reinhardtr.github.io/stellarweather"}
            bgStyle={"bg-gradient-to-br from-first to-second"}
            icon={WeatherIcon}
            desc={
              "I recreated the famous retro game Snake. The game uses Google Auth and Gmail, to connect the users to a live Leaderboard via. Firebase."
            }
          />
        </div>
      </div>
      <div className="sm:absolute sm:top-5 sm:right-5 my-5">
        <DarkModeSwitch />
      </div>
    </>
  );
};

export default Projects;
