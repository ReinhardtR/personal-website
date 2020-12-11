import React from "react";

export const Card = ({ width, height, title, titleSize, icon, desc }) => {
  return (
    <div
      className={`${width} ${height} bg-gradient-to-br from-first to-second rounded-2xl p-1.5 group transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg`}
    >
      <div
        className={`w-full h-full rounded-xl flex flex-col justify-center items-center text-center`}
      >
        <div className={`${titleSize} text-white dark:text-darkBlue font-bold`}>
          {title}
        </div>
        {icon}
        {/* If desc is defined, return it. */}
        {desc && (
          <div className="transition duration-300 opacity-0 group-hover:opacity-100 text-sm font-medium text-white dark:text-darkBlue">
            {desc}
          </div>
        )}
      </div>
    </div>
  );
};
