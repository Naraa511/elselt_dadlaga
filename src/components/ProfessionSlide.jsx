import React from "react";
import Professions from "../../../design/src/Professions.js";
import { Link } from "react-router-dom";
import universityData from "../../../design/src/universityData.js";
export default function ProfessionCards() {
  return (
    <div className="py-4 sm:py-8">
      <h3 className=" text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-4xl text-center font-semibold mb-4">
        Элсэлт авч буй мэргэжлүүд
      </h3>

      <div className="mx-auto max-w-7xl px-1 lg:px-1">
    {universityData.School.map((school) => (
        <div key={school.SchoolId}>
            <p className="text-center text-xl sm:text-lg md:text-lg lg:text-xl xl:text-3xl text-[#03754694] py-3 font-semibold">{school.SchoolName}</p>
            <div key={school.SchoolId} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:rounded-2xl">
                
                
                 {school.Programm.map((programms) => (
                    programms.Professions.map((profession)=>(
                    <Link
                    to={`/majorview/${programms.ProgrammId}`}
                    key={programms.ProgrammId}
                    className="group bg-gray-600/5 p-6 sm:p-8 dark:bg-white/5 flex flex-col items-center rounded-lg hover:shadow-xl hover:text-white hover:bg-[#03754694] transition-shadow duration-300 min-h-[220px] w-full"
                    >
                        <img
                        src={profession.logo}
                        alt={profession.name}
                        className="w-22 h-18 object-contain dark:hidden group-hover:w-26 group-hover:h-22"
                        />
                        {/* Container grows to fill space */}
                        <div className="flex-grow flex items-center justify-center text-center pt-4"
                        key={profession.ProfessionId}>
                        <p className="text-gray-800 font-semibold group-hover:text-white">
                            {profession.name}
                        </p>
                        </div>
                    </Link>
                    ))
                 ))}

            </div>
            </div>
            ))}
      </div>

    </div>

  );
}
