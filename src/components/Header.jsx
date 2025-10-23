"use client";

import { useState, useEffect } from "react";
import logoMuls from "../image/muls_logo.png";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Banner from "./Banner";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header with Banner */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#037546a9]" : "bg-[#037546] shadow"
        }`}
      >
        {/* Banner */}
        <Banner />

        {/* Navigation */}
        <nav className="flex max-w-[1600px] mx-auto items-center justify-start px-4 sm:px-6 lg:px-8 h-[80px] lg:h-[100px]">
          <div className="flex max-w-[1600px] mx-auto items-center justify-start px-4 sm:px-6 lg:px-8 h-[70px] sm:h-[80px] lg:h-[100px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  alt="MULS logo"
                  src={logoMuls}
                  className="h-[45px] sm:h-[55px] lg:h-[75px] w-auto"
                />
              </Link>
            </div>

            {/* University Name */}
            <div className="flex-1 px-3 sm:px-6">
              <div className="text-white font-semibold">
                {/* Desktop Version */}
                <div className="hidden md:block">
                  <h4 className="text-base lg:text-lg xl:text-lg leading-tight">
                    ХӨДӨӨ АЖ АХУЙН ИХ СУРГУУЛЬ
                  </h4>
                  <hr className="border-[#f9dd0d] border-2 my-1 lg:my-1" />
                  <h4 className="text-sm lg:text-base xl:text-lg leading-tight">
                    MONGOLIAN UNIVERSITY OF LIFE SCIENCES
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Desktop Nav Links */}
          <PopoverGroup className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-20">
            <a
              href="/"
              className="text-xl font-semibold text-white hover:text-[#f9dd0d]"
            >
              Нүүр
            </a>
            <a
              href="#"
              className="text-xl font-semibold text-white hover:text-[#f9dd0d]"
            >
              Танилцуулга
            </a>
            <a
              href="/signin"
              className="text-xl font-semibold text-white hover:text-[#f9dd0d]"
            >
              Элсэлтийн бүртгэл
            </a>
          </PopoverGroup>

          {/* Desktop Login Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="p-2 bg-[#f9dd0d] rounded-md text-xl font-semibold text-[#323a46] hover:bg-white"
            >
              Нэвтрэх
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm sm:max-w-md md:max-w-lg bg-white p-[5%] overflow-y-auto sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Muls</span>
                <img
                  alt="muls logo"
                  src={logoMuls}
                  className="h-[50px] w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Нүүр
                  </a>
                  <a
                    href="/signin"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Элсэлтийн бүртгэл
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-full px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Нэвтрэх
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Spacer for Fixed Header */}
      <div
        className={`${
          showBanner ? "pt-[80px] lg:pt-[100px]" : "pt-[50px] lg:pt-[60px]"
        }`}
      >
        {/* Page content goes here */}
      </div>
    </>
  );
}
