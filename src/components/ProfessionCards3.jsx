import { Link } from "react-router-dom";
import universityData from "../../../design/src/universityData.js";

export default function ProfessionCards3() {
  return (
    <div className="py-4 sm:py-8">
      <h3 className="text-4xl text-center font-semibold mb-8">
        Бүрэлдэхүүн сургуулиуд
      </h3>

      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Grid container for all schools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {universityData.School.map((school) => (
            <div key={school.SchoolId} className="flex flex-col">
              {/* School card */}
              <Link
                to={`/professions/${school.SchoolId}`}
                className="group flex flex-col items-center justify-between p-4 bg-white rounded-2xl shadow-blue-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full min-h-[250px]"
              >
                {/* Logo container with fixed dimensions */}
                <div className="flex items-center justify-center h-20 w-20 mb-3 flex-shrink-0">
                  <img
                    src={school.SchoolLogo}
                    alt={`${school.SchoolName} logo`}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* School name with proper text handling */}
                <div className="text-center flex-grow flex items-center justify-center">
                  <h4
                    className="
                      text-sm sm:text-base font-semibold text-gray-800
                      group-hover:text-purple-600
                      min-h-[48px] leading-snug
                      transition-colors duration-300 px-2 text-center
                      flex items-center justify-center
                    "
                  >
                    {school.SchoolName}
                  </h4>
                </div>

                {/* Optional: Add a small indicator for more info */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-0.5 bg-purple-500 rounded-full"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
