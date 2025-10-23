import { useState } from "react";
import "../style/AboutProfessions.css"
import universityData from "../../../design/src/universityData";
import { Link } from "react-router-dom";

export default function Schools({ className = "md:w-2xs", onItemClick  }) {
    const [activeSchoolId, setActiveSchoolId] = useState(null);
const handleProgramClick = () => {
        if (onItemClick) {
            onItemClick();
        }
    };
    function toggleShown(id) {
        setActiveSchoolId((prevId) => (prevId === id ? null : id));
    }
  return (
           <div className={`w-full ${className}`}>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
            Бүрэлдэхүүн сургуулиуд
          </h1>

          <ul className="space-y-4">
            {universityData.School.map((school) => (
              <li key={school.SchoolId}>
                <button
                  onClick={() => toggleShown(school.SchoolId)}
                  className="w-full text-left text-xl font-medium text-indigo-700 hover:text-indigo-900 hover:underline focus:outline-none transition"
                >
                  {school.SchoolName}
                </button>

                {/* Show programs if active */}
                {activeSchoolId === school.SchoolId && (
                  <div className="mt-2 ml-4 space-y-1">
                    {school.Programm.map((programms) => (
                      <Link
                        to={`/majorview/${programms.ProgrammId}`}
                        key={programms.ProgrammId}
                        className="block text-lg text-gray-700 hover:text-gray-900 hover:underline"
                        onClick={handleProgramClick}
                      >
                        {programms.ProgrammName}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
    
)
}
