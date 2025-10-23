"use client";

import { useState, useEffect } from "react";
import logoMuls from "../image/muls_logo.png";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Banner from './Banner';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true); // Control banner visibility

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#037546a9]" : "bg-[#037546] shadow"}`}>
        {/* Optional Banner */}
        {showBanner && <Banner />}

        {/* Navigation */}
        <nav className="flex max-w-[1600px] mx-auto items-center justify-between px-4 sm:px-6 lg:px-8 h-[80px] lg:h-[100px]">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 h-full">
              <img
                alt="muls logo"
                src={logoMuls}
                className="h-[60px] lg:h-[80px] w-auto"
              />
            </Link>
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
          <PopoverGroup className="hidden lg:flex lg:gap-x-20">
            <a href="/" className="text-xl font-semibold text-white hover:text-[#f9dd0d]">Нүүр</a>
            <a href="#" className="text-xl font-semibold text-white hover:text-[#f9dd0d]">Танилцуулга</a>
            <a href="/signin" className="text-xl font-semibold text-white hover:text-[#f9dd0d]">Элсэлтийн бүртгэл</a>
          </PopoverGroup>

          {/* Desktop Login Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="p-2 bg-[#f9dd0d] rounded-md text-xl font-semibold text-[#323a46] hover:bg-white">Нэвтрэх</a>
          </div>
        </nav>
      </header>

      {/* Dynamic Spacer */}
      <div className={`${showBanner ? "pt-[80px] lg:pt-[100px]" : "pt-[50px] lg:pt-[60px]"}`}>
        {/* Page content goes here */}
      </div>
    </>
  );
}
