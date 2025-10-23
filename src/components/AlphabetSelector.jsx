"use client";
import { useState, useEffect, useRef } from "react";

const letters = [
  { id: 1, name: "А" },
  { id: 2, name: "Б" },
  { id: 3, name: "В" },
  { id: 4, name: "Г" },
  { id: 5, name: "Д" },
  { id: 6, name: "Е" },
  { id: 7, name: "Ё" },
  { id: 8, name: "Ж" },
  { id: 9, name: "З" },
  { id: 10, name: "И" },
  { id: 11, name: "Й" },
  { id: 12, name: "К" },
  { id: 13, name: "Л" },
  { id: 14, name: "М" },
  { id: 15, name: "Н" },
  { id: 16, name: "О" },
  { id: 17, name: "Ө" },
  { id: 18, name: "П" },
  { id: 19, name: "Р" },
  { id: 20, name: "С" },
  { id: 21, name: "Т" },
  { id: 22, name: "У" },
  { id: 23, name: "Ү" },
  { id: 24, name: "Ф" },
  { id: 25, name: "Х" },
  { id: 26, name: "Ц" },
  { id: 27, name: "Ч" },
  { id: 28, name: "Ш" },
  { id: 29, name: "Щ" },
  { id: 30, name: "Ъ" },
  { id: 31, name: "Ы" },
  { id: 32, name: "Ь" },
  { id: 33, name: "Э" },
  { id: 34, name: "Ю" },
  { id: 35, name: "Я" },
];

const AlphabetSelector = ({
  currentLetter,
  setLetter,
  title,
  defaultLetter,
}) => {
  const [isShow, setIsShow] = useState(false);
  const ref = useRef();

  const handleLetterClick = (letter) => {
    setLetter(letter.name);
    setIsShow(false);
  };

  // Close dropdown if click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref} className="relative inline-block w-1/4">
      <div
        className="p-3 border rounded-md flex items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors h-10"
        onClick={() => setIsShow(!isShow)}
      >
        {currentLetter || defaultLetter || "-"}
      </div>

      {isShow && (
        <div className="absolute z-50 mt-1 left-0 p-4 w-screen max-w-[32rem] bg-white rounded-md shadow-lg border border-gray-200">
          <h3 className="text-xl text-center text-gray-800 font-bold mb-3">
            {title}
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {letters.map((letter) => (
              <p
                key={letter.id}
                onClick={() => handleLetterClick(letter)}
                className="
                  bg-blue-100
                  text-sm md:text-base lg:text-lg xl:text-xl
                  text-gray-800
                  text-center
                  cursor-pointer
                  rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl
                  hover:bg-blue-400
                  hover:text-white
                  transition-colors
                "
              >
                {letter.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlphabetSelector;
