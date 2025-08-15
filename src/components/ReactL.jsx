import React from 'react';

const ReactL = () => {
  return (
    <div className="mt-2 p-4 sm:p-6 rounded-xl shadow-[8px_8px_16px_#0e0e0e,-8px_-8px_16px_#161616] hover:shadow-[4px_4px_8px_#0e0e0e,-4px_-4px_8px_#161616] transition-all duration-300">
      <h1 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
        Currently learning React concepts and libraries, including:
      </h1>
      <ul className="flex flex-wrap gap-2 sm:gap-4">
        {[
          'React Router DOM',
          'useEffect',
          'React Toastify',
          'Framer Motion',
        ].map((item, index) => (
          <li
            key={index}
            className="px-3 sm:px-4 py-2 rounded-xl shadow-[8px_8px_16px_#0e0e0e,-8px_-8px_16px_#161616] hover:shadow-[4px_4px_8px_#0e0e0e,-4px_-4px_8px_#161616] transition-all duration-300 text-sm sm:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReactL;
