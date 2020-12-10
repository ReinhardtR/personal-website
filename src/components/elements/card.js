import React from "react";

export const Card = ({ width, height, title, icon, bgStyle }) => {
  return (
    <div
      className={`${width} ${height} bg-gradient-to-br from-first to-second rounded-2xl p-1.5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg`}
    >
      <div
        className={`w-full h-full ${bgStyle} rounded-xl flex flex-col justify-center items-center text-center`}
      >
        <div className="text-3xl text-white dark:text-darkBlue font-bold">
          {title}
        </div>
        {icon}
      </div>
    </div>
  );
};
