import React from "react";
// import Professions from "../../../design/src/Professions.js";
import { Link, useParams } from "react-router-dom";
import universityData from "../../../design/src/universityData.js";

export default function Professions() {
  const { schoolId } = useParams();
  const school = universityData.School.find((school) => school.SchoolId === schoolId);

  // Handle case where school is not found
  if (!school) {
    return (
      <div className="py-4 sm:py-8">
        <h3 className="text-4xl text-center font-semibold mb-4">
          Сургууль олдсонгүй
        </h3>
      </div>
    );
  }

  return (
<div class="py-4 sm:py-8">
      <h3 class="text-2xl sm:text-3xl text-center font-semibold mb-4 py-8">
        {school.SchoolName} - Элсэлт авч буй мэргэжлүүд
      </h3>
      <div className="mx-auto max-w-7xl px-1 lg:px-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:rounded-2xl">
        {school.Programm.map((programms) => (
                    programms.Professions.map((profession)=>(
                    <Link
                    to={`/majorview/${programms.ProgrammId}`}
                    key={programms.ProgrammId}
                    className="group flex flex-col items-center justify-between p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full min-h-[200px]"
                    >
                      <div className="flex items-center justify-center h-20 w-20 mb-3 flex-shrink-0">
                        <img
                        src={profession.logo}
                        alt={profession.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>  
                        {/* Container grows to fill space */}
                        <div className="text-center flex-grow flex items-center justify-center"
                        key={profession.ProfessionId}>
                        <p className="text-sm sm:text-base min-h-[50px] font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight px-2">
                            {profession.name}
                        </p>
                        </div>
                    </Link>
                    ))
                 ))}
        </div>
      </div>

    </div>
  );
}