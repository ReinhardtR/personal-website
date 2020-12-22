import React from "react";
import { Link } from "@reach/router";
import { Card } from "../elements/card";
import DarkModeSwitch from "../elements/darkModeSwitch";
import LoopingText from "../elements/loopingText";
import { ReactComponent as GitHubLogo } from "../../assets/github.svg";
import { ReactComponent as SocialsLogo } from "../../assets/socials.svg";

const Landing = () => {
  return (
    <>
      <div className="w-auto h-auto m-2 bg-white dark:bg-darkBlue transition duration-300 rounded-xl flex flex-col justify-between items-center shadow-2xl">
        <h1 className="m-5 text-darkBlue dark:text-white font-bold text-5xl text-center">
          Reinhardt Alexander Rijna
        </h1>
        <div className="w-full flex flex-wrap justify-center items-center m-2 mb-5 text-2xl">
          <Link to="/personal-website/projects" className="m-2">
            <Card
              width={"w-48"}
              height={"h-64"}
              title={"Projects"}
              titleSize={"text-3xl"}
              icon={
                <GitHubLogo
                  className="fill-current text-white dark:text-darkBlue"
                  width="70%"
                  height="70%"
                />
              }
            />
          </Link>
          {/* <Link to="/personal-website/socials" className="m-2">
            <Card
              width={"w-48"}
              height={"h-64"}
              title={"Socials"}
              titleSize={"text-3xl"}
              icon={
                <SocialsLogo
                  className="fill-current text-white dark:text-darkBlue"
                  width="70%"
                  height="70%"
                />
              }
            />
          </Link> */}
        </div>
        <div className="animate-bounce mb-1">
          <LoopingText />
        </div>
      </div>
      <div className="sm:absolute sm:top-5 sm:right-5 my-5">
        <DarkModeSwitch />
      </div>
    </>
  );
};

export default Landing;
