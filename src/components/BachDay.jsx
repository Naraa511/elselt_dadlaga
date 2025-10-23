"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Button } from "@/components/ui/button";
import AlphabetSelector from "./AlphabetSelector";


export default function BachDay() {
  const [RegistrationNumber, setRegistrationNumber] = useState(""); // burtgeliin dugaar
  const [firstLetter, setFirstLetter] = useState("");
  const [secondLetter, setSecondLetter] = useState("");
  const [registerDigit, setRegisterDigit] = useState("");
  const [open, setOpen] = useState(false);
  
  const [registrations, setRegistrations] = useState([]); // deerh medeellee hadgalaj bui heseg
  function handleSubmit(e) {
    e.preventDefault();
    
    const fullRegisterDigit = firstLetter + secondLetter + registerDigit;

    const newRegistration = {
      RegistrationNumber,
      fullRegisterDigit
    };
    
    const updatedRegistrations = [...registrations, newRegistration];
    setRegistrations(updatedRegistrations);
    console.log("All registrations:", updatedRegistrations);

    

    setRegistrationNumber("");
    setFirstLetter("");
    setSecondLetter("");
    setRegisterDigit("");

    setOpen(false);
  }
  return (
    <div>
        <div  className='flex flex-col sm:flex-row gap-6'>
          <Button
          onClick={() => setOpen(true)}
          className="bg-[#037546] hover:bg-[#f9dd0d] hover:text-gray-600 font-bold text-white text-lg px-8 py-6 h-1/3 cursor-pointer rounded-lg shadow "
        >Баклавар/Өдөр/</Button>
        </div>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
        
              transition
              className="relative transform rounded-lg bg-white px-4 pt-5 pb-4
               text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-xl  sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div>
                <div className="mx-auto flex size-32 items-center justify-center rounded-full bg-green-100">
                  <img
                    src="https://elselt.muls.edu.mn/assets/images/logo-lg.png"
                    alt=""
                    height="100"
                  />
                </div>
                <div className="mt-2 text-start sm:mt-5">
                  <form onSubmit={handleSubmit}>
                    <label
                      htmlFor="RegisterNumber"
                      className="block text-sm/6 font-bold text-gray-900"
                    >
                      Боловсролын үнэлгээний төвийн бүртгэлийн дугаар
                    </label>
                    <div className="mt-2">
                      <input
                        id="RegisterNumber"
                        name="RegisterNumber"
                        type="text"
                        required
                        placeholder="Бүртгэлийн дугаар"
                        value={RegistrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                        className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                      ></input>
                    </div>

                    <label
                      htmlFor="register-digit"
                      className="block text-sm/6 font-bold text-gray-900 mt-4"
                    >
                      Регистр
                    </label>
                    <div className="mt-2 flex gap-2">

                      <AlphabetSelector currentLetter={firstLetter} setLetter={setFirstLetter} title='РД эхний үсгээ сонгоно уу' defaultLetter='Р'/>
                      <AlphabetSelector currentLetter={secondLetter} setLetter={setSecondLetter} title='РД хоёр дахь үсгээ сонгоно уу'  defaultLetter = 'Д'/>

                      <input
                        id="register-digit"
                        type="number"
                        required
                        placeholder="Регистр"
                        value={registerDigit}
                        onChange={(e) => setRegisterDigit(e.target.value)}
                        className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                      ></input>
                    </div>
                    <div className="mt-5 sm:mt-6">
                        <button
                            type='submit'
                            className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Бүртгүүлэх
                        </button>
                    </div>
                  </form>
                </div>
              </div>

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
