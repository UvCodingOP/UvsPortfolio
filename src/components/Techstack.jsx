import React from 'react';

const Techstack = ({ skill, level, color }) => {
  return (
    <div className="w-full space-y-2 sm:space-y-3">

      <div className="flex justify-between items-center">
        <span className="text-sm sm:text-base font-medium text-gray-300">{skill}</span>
        <span className="text-xs sm:text-sm font-medium text-gray-500">{level}%</span>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">

        <div
          className={`h-2 sm:h-3 rounded-full ${color}`}
          style={{ width: `${level}%`, transition: "width 1s ease-in-out" }}
        ></div>
      </div>
    </div>
  );
};

export default Techstack;
