import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Professions from "../../../design/src/Professions";
import Schools from "./Schools";
import { Button } from "@/components/ui/button";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import logoMuls from "../image/muls_logo.png";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function AboutProfessions() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.split("v=")[1] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  const getAssetUrl = (imagePath) => {
    return new URL(imagePath, import.meta.url).href;
  };

  const { programmId } = useParams();
  const profession = Professions.find((p) => p.ProgrammId === programmId);

  if (!profession) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold my-10">
        Мэргэжил олдсонгүй! (Profession not found)
      </div>
    );
  }

  const embedUrl = getEmbedUrl(profession.youtubeUrl);

  return (
<div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4 sm:gap-6 md:gap-10 px-4 py-8 md:py-16 max-w-7xl mx-auto">
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
      </div>


      <PopoverGroup className="hidden lg:flex lg:gap-x-20">
        <Schools />
      </PopoverGroup>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MULS</span>
              <img alt="muls logo" src={logoMuls} className="h-15 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-xl text-gray-700  hover:bg-gray-50"
                >
                  Нүүр хуудас
                </a>
                
                <Schools onItemClick={closeMobileMenu} />

               
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <div className="md:w-4/5 space-y-6">
        <h3 className="text-2xl font-bold text-gray-700">
          Мэргэжлийн нэр:{" "}
          <span className="text-gray-900">{profession.name}</span>
        </h3>

        {profession.needs && (
          <h3 className="text-xl font-medium text-gray-700">
            Мэргэжлийн эрэлт хэрэгцээ:{" "}
            <span className="text-gray-900">{profession.needs}</span>
          </h3>
        )}

        {embedUrl && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Танилцуулга бичлэг</h3>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow">
              <iframe
                src={embedUrl}
                title={profession.youtubeAlt || profession.name}
                frameBorder="0"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {profession.description && (
          <div>
            <h3 className="text-xl font-semibold mb-1">Мэргэжлийн тухай</h3>
            <p className="text-gray-700">{profession.description}</p>
          </div>
        )}

        {profession.Skills && (
          <div>
            <h3 className="text-xl font-semibold mb-1">Мэргэжлийн ур чадвар</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {profession.Skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {profession.CareerOpportunities && (
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Ажлын байрны чиглэл, албан тушаал
            </h3>
            {Array.isArray(profession.CareerOpportunities) ? (
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {profession.CareerOpportunities.map((opportunity, index) => (
                  <li key={index}>{opportunity}</li>
                ))}
              </ul>
            ) : profession.CareerOpportunities.match(/\.(png|jpe?g)$/i) ? (
              <img
                src={getAssetUrl(profession.CareerOpportunities)}
                alt="Ажлын байрны боломжийн зураг"
                className="rounded-lg shadow-md mt-2"
              />
            ) : (
              <p className="text-gray-700">{profession.CareerOpportunities}</p>
            )}
          </div>
        )}

        {profession.StudyEnv && (
          <div>
            <h3 className="text-xl font-semibold mb-1">Сурах орчин</h3>
            <img
              src={getAssetUrl(profession.StudyEnv)}
              alt="Сурах орчны зураг"
              className="rounded-lg shadow-md"
            />
          </div>
        )}

        {profession.ExamSubject && (
          <div>
            <h3 className="text-xl font-semibold mb-1">ЭЕШ өгөх хичээлүүд</h3>
            <p className="text-gray-700">{profession.ExamSubject.subject1}</p>
            <p className="text-gray-700">{profession.ExamSubject.subject2}</p>
          </div>
        )}

        <div className="pt-4">
          <Link
            to="/signin"
            className="bg-[#f9dd0d] hover:bg-indigo-400 font-bold text-gray-600 
            text-lg px-6 py-2 rounded-lg shadow"
          >
            Бүртгүүлэх
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutProfessions;
