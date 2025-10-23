import React from "react";
import Professions from "../../../design/src/Professions.js";
import { Link } from "react-router-dom";

export default function ProfessionCards() {
  return (
    <div className="py-4 sm:py-8">
      <h3 className="text-4xl text-center font-semibold mb-4">
        Элсэлт авч буй мэргэжлүүд
      </h3>
      <div className="mx-auto max-w-7xl px-1 lg:px-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:rounded-2xl">
          {Professions.map((profession) => (
            <Link
              to={`/majorview/${profession.ProgrammId}`}
              key={profession.ProgrammId}
              className="flex"
            >
              <div
                className="group bg-gray-600/5 p-6 sm:p-8 dark:bg-white/5 flex flex-col items-center rounded-lg hover:shadow-xl hover:text-white hover:bg-[#03754694] transition-shadow duration-300 min-h-[220px] w-full "
              >
                <img
                  src={profession.logo}
                  alt={profession.name}
                  className="w-22 h-18 object-contain dark:hidden group-hover:w-26 group-hover:h-22"
                />
                {/* Container grows to fill space */}
                <div className="flex-grow flex items-center justify-center text-center pt-4">
                  <p className="text-gray-800 font-semibold group-hover:text-white">
                    {profession.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
