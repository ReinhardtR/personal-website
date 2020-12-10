import React from "react";
import { Link } from "@reach/router";
import Button from "../elements/button";
import DarkModeSwitch from "../elements/darkModeToggle";
import LoopingText from "../functions/loopingText";

const Landing = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-first to-second flex justify-center items-center">
      <div className="w-1/2 h-60 bg-white dark:bg-blue transition duration-1000 rounded-xl flex flex-col justify-between items-center shadow-2xl">
        <h1 className="my-5 text-blue dark:text-white font-bold text-5xl text-center">
          Reinhardt Alexander Rijna
        </h1>
        <div className="animate-bounce mb-3">
          <LoopingText />
        </div>
        <div className="w-full flex justify-evenly flex-grow-1 mb-5 text-2xl">
          <Link to="/projects">
            <Button
              text={"PROJECTS"}
              width={"36"}
              height={"12"}
              fontSize={"2xl"}
            />
          </Link>
          <Link to="/socials">
            <Button
              text={"SOCIALS"}
              width={"36"}
              height={"12"}
              fontSize={"2xl"}
            />
          </Link>
        </div>
      </div>
      <div className="absolute top-5 right-5">
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Landing;
