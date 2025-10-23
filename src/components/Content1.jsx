import { useState } from "react";
import haaisGadaa from "../image/haais-gadaa.png";
import { Link } from "react-router-dom";
import universityData from "../../../design/src/universityData";
import { School } from "lucide-react";
import Schools from "./Schools";

const Contents1 = () => {
  const [activeSchoolId, setActiveSchoolId] = useState(null);

  function toggleShown(id) {
    setActiveSchoolId((prevId) => (prevId === id ? null : id));
  }

  return (
    <main className="px-4 py-6 md:px-10 md:py-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left image */}
        <div className="w-full md:w-1/2">
          <img
            src={haaisGadaa}
            alt="хааис гадаах зураг"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right content */}
        <Schools/>
      </div>
    </main>
  );
};

export default Contents;
