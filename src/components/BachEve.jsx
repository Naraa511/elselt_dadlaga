import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { civilization } from "../data/Civilization";
import AlphabetSelector from "./AlphabetSelector";
import universityData from "../../../design/src/universityData";

export default function BachEve() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    civilization: "",
    city: "",
    district: "",
    lastName: "",
    firstName: "",
    gender: "",
    firstLetter: "Р",
    secondLetter: "Д",
    registerDigit: "",
    mail: "",
    phoneNumber: "",
    school: "",
    elsehMergejil: "",
  });
  const [data, setData] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "civilization") {
      setFormData((prev) => ({
        ...prev,
        civilization: value,
        city: "",
        district: "",
      }));
    } else if (name === "city") {
      setFormData((prev) => ({
        ...prev,
        city: value,
        district: "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Ensure registerDigit is a string
    const registerDigitStr = String(formData.registerDigit || "");

    // Combine letters and register digit
    const fullRegisterDigit = `${formData.firstLetter}${formData.secondLetter}${registerDigitStr}`;

    const NewFormData = { ...formData, fullRegisterDigit };

    // Add new submission to data and log updated array
    setData((prevData) => {
      const updatedData = [...prevData, NewFormData];
      console.log("All data:", updatedData);
      return updatedData;
    });

    // Reset form
    setFormData({
      civilization: "",
      city: "",
      district: "",
      lastName: "",
      firstName: "",
      gender: "",
      firstLetter: "Р",
      secondLetter: "Д",
      registerDigit: "",
      mail: "",
      phoneNumber: "",
      school: "",
      elsehMergejil: "",
    });

    setOpen(false);
  }

  // Selected country and cities
  const selectedCountry = civilization.find(
    (c) => c.CountryName === formData.civilization
  );
  const cities = selectedCountry ? selectedCountry.Cities : [];

  // Selected city and districts
  const selectedCityObj = selectedCountry
    ? selectedCountry.Cities.find((c) => c.cityName === formData.city)
    : null;
  const districts = selectedCityObj ? selectedCityObj.Districts : [];

  // Selected school and programs
  const selectedSchool = universityData.School.find(
    (s) => s.SchoolName === formData.school
  );
  const surguuliud = selectedSchool ? selectedSchool.Programm : [];

  return (
    <div>
      <div className="flex flex-col sm:flex-col gap-6">
        <Button
          onClick={() => setOpen(true)}
          className="bg-[#f9dd0d] hover:bg-[#037546] hover:text-white font-bold text-gray-600 cursor-pointer text-lg px-8 py-6 h-1/3 rounded-lg shadow"
        >
          Баклавар/Орой, Эчнээн/
        </Button>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8 text-center mt-[10%] pt-[25%]">
            <DialogPanel className="relative transform rounded-lg bg-white px-4 pb-6 text-left shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl sm:p-8 pt-[5%]">
              <div>
                <div className="mx-auto flex items-center text-center font-semibold justify-center text-xl sm:text-2xl">
                  Бакалаврын эчнээ ангийн бүртгэл
                </div>
                <h4>Ерөнхий мэдээлэл</h4>
              </div>

              <div className=" text-start sm:mt-5 ">

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6"
                >
                  {/* Civilization */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="civilization"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Иргэншил
                    </label>
                    <select
                      id="civilization"
                      name="civilization"
                      value={formData.civilization}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 h-10 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Сонгоно уу</option>
                      {civilization.map((country) => (
                        <option
                          key={country.CountryId}
                          value={country.CountryName}
                        >
                          {country.CountryName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="city"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Аймаг, хот
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={!formData.civilization}
                      className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 h-10 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:text-gray-400"
                    >
                      <option value="">Сонгоно уу</option>
                      {cities.map((city) => (
                        <option key={city.cityId} value={city.cityName}>
                          {city.cityName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* District */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="district"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Сум, дүүрэг
                    </label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      disabled={!formData.city}
                      className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 h-10 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:text-gray-400"
                    >
                      <option value="">Сонгоно уу</option>
                      {districts.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Last name */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="lastName"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Овог
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 px-3 py-2 h-10 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  {/* First name */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="firstName"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Нэр
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 px-3 py-2 h-10 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Gender */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="gender"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Хүйс
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 h-10 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="эрэгтэй">Эрэгтэй</option>
                      <option value="эмэгтэй">Эмэгтэй</option>
                    </select>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="phoneNumber"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Утас
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 px-3 py-2 h-10 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="mail"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Мэйл хаяг
                    </label>
                    <input
                      type="email"
                      id="mail"
                      name="mail"
                      value={formData.mail}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 h-10 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Register */}
                  <div className="flex flex-col lg:col-span-2">
                    <label
                      htmlFor="register-digit"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Регистр
                    </label>
                    <div className="flex flex-row gap-2">
                      <AlphabetSelector
                        currentLetter={formData.firstLetter}
                        setLetter={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            firstLetter: value,
                          }))
                        }
                        title="РД эхний үсэг"
                        defaultLetter="Р"
                      />
                      <AlphabetSelector
                        currentLetter={formData.secondLetter}
                        setLetter={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            secondLetter: value,
                          }))
                        }
                        title="РД хоёр дахь үсэг"
                        defaultLetter="Д"
                      />
                      <input
                        id="register-digit"
                        name="registerDigit"
                        type="number"
                        required
                        value={formData.registerDigit}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 h-10 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Section heading */}
                  <div className="col-span-full text-left text-xl sm:text-lg mt-6">
                    <h4>Элсэх хөтөлбөр</h4>
                  </div>

                  {/* School */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="school"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Бүрэлдэхүүн сургууль
                    </label>
                    <select
                      id="school"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 h-10 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Утга сонгоно уу</option>
                      {universityData.School.map((school) => (
                        <option key={school.SchoolId} value={school.SchoolName}>
                          {school.SchoolName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Program */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="elsehMergejil"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Элсэх мэргэжил
                    </label>
                    <select
                      id="elsehMergejil"
                      name="elsehMergejil"
                      value={formData.elsehMergejil}
                      onChange={handleChange}
                      disabled={!formData.school}
                      className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 h-10 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:text-gray-400"
                    >
                      <option value="">Утга сонгоно уу</option>
                      {surguuliud.map((school) =>
                        school.Professions.map((profession) => (
                          <option
                            key={profession.ProfessionId}
                            value={profession.name}
                          >
                            {profession.name}
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                  <div className="col-span-full text-left text-xl sm:text-lg bg-red-50 border-l-4 border-red-400 p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-6">
                    <h2 className="text-red-800 font-bold text-lg mb-3">
                      Санамж:
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        ХААИС-ийн бакалаврын оройн хөтөлбөрт бакалаврын зэрэгтэй
                        иргэнийг элсүүлэх ба Элсэлтийн ерөнхий шалгалт (ЭЕШ)
                        өгсөн байхыг шаардахгүй.
                      </li>
                      <li>
                        Бүртгүүлэгч нь элсэхийг хүссэн хөтөлбөрт харгалзах
                        элсэлтийн шалгалт өгнө.
                      </li>
                      <li>
                        Бүртгүүлэгч бүртгэлтэй холбоотой төлбөр тооцоог цахим
                        хэлбэрээр хийнэ.
                      </li>
                      <li>
                        Өмнө нь эзэмшсэн бакалаврын боловсролын диплом нь
                        БСШУСЯ-ны Боловсролын сургалтын мэдээллийн системд
                        бүртгэгдсэн байх.
                      </li>
                    </ul>
                  </div>
                  

                  {/* Submit */}
                  <div className="col-span-full">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Бүртгүүлэх
                    </button>
                  </div>
                </form>
                
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
