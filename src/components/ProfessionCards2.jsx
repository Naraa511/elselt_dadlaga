import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import universityData from "../../../design/src/universityData.js";

// Helper to split into groups of N
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function ProfessionCards() {
  return (
    <div className="py-6 sm:py-10 ">
      <h3 className="text-3xl sm:text-4xl text-center font-semibold mb-10">
        Элсэлт авч буй мэргэжлүүд
      </h3>

      {universityData.School.map((school) => {
        // Collect professions
        const professions = school.Programm.flatMap((program) =>
          program.Professions.map((p) => ({
            ...p,
            programId: program.ProgrammId,
          }))
        ).sort(() => Math.random() - 0.5);

        // Split into groups of 3
        const chunks = chunkArray(professions, 3);

        return (
          
          <div key={school.SchoolId} className="mb-16 max-w-6xl mx-auto ">
              
           
            {/* School name */}
            <p className="text-center text-xl sm:text-2xl md:text-3xl text-[#03754694] py-5 font-semibold">
              {school.SchoolName}
            </p>

            {/* Professions Swiper */}
            <Swiper
            navigation
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {chunks.map((group, idx) => (
                <SwiperSlide key={idx}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {group.map((profession) => (
                      <Link
                        to={`/majorview/${profession.programId}`}
                        key={profession.ProfessionId}
                        className="group flex flex-col items-center justify-between p-6 bg-[#ffff] rounded-2xl shadow-blue-100 hover:shadow-xl hover:border-1 transition-all duration-300 transform hover:translate-z-4 border border-gray-200 hover:border-gray-800 h-full min-h-[250px]"
                      >
                        {/* Logo */}
                        <div className="flex items-center justify-center h-20 w-20 mb-4 flex-shrink-0">
                          <img
                            src={profession.logo}
                            alt={profession.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Name */}
                        <div className="text-center flex-grow flex items-center justify-center">
                          <h4 className="text-2xl sm:text-xl font-semibold text-[#009ef7] group-hover:text-purple-600 transition-colors duration-300 leading-tight min-h-[48px] px-2">
                            {profession.name}
                          </h4>
                        </div>

                        {/* Small hover indicator */}
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-6 h-0.5 bg-purple-500 rounded-full"></div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* "More details" link under slider */}
            <div className="flex justify-end mt-6">
              <Link
                to={`/professions/${school.SchoolId}`}
                className="px-6 py-2 hover:text-[#009ef7] text-purple-600 transition-colors duration-300 "
              >
                Дэлгэрэнгүй
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
