import React from "react";
import DarkModeSwitch from "../elements/darkModeSwitch";

const Socials = () => {
  return (
    <>
      <div className="w-1/3 h-60 bg-white dark:bg-darkBlue transition duration-300 rounded-xl flex flex-col justify-between items-center shadow-2xl">
        <h1 className="my-5 text-darkBlue dark:text-white font-bold text-5xl text-center">
          Socials
        </h1>
      </div>
      <div className="absolute top-5 right-5">
        <DarkModeSwitch />
      </div>
    </>
  );
};

export default Socials;
