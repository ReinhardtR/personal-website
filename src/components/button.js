import React from "react";

const Button = ({ text, width, height, fontSize }) => {
  return (
    <button
      className={`w-${width} h-${height} text-${fontSize}
      rounded-full bg-gradient-to-br from-first to-second
    text-white font-medium flex justify-center items-center 
      hover:border-2 hover:border-second hover:bg-white
      hover:bg-gradient-to-r hover:from-first hover:to-second
      transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
      shadow-2xl`}
    >
      {text}
    </button>
  );
};

export default Button;
