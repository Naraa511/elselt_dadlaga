import campus from "../image/campus.png";
import ElseltComis from "./ElseltComis";

const links = [
  {
    name: "Элсэлтийн журам",
    href: "https://drive.google.com/file/d/11pxryQRnvoudFIS30ceIIP_iw9aTbfnL/preview",
  },
  { name: " Ур чадварын шалгалт", href: "#" },
  { name: "Элсэлтийн комисс", href: "/workers" },
  { name: "Түгээмэл асуултууд", href: "/question" },
];

export default function NewsEnroll() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <img
        alt=""
        src={campus}
        className="absolute inset-0 -z-10 size-full object-fit object-bottom md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl lg:mx-0 text-center">
          <h2 className="text-3xl font-semibold tracking-tight  text-white sm:text-4xl">
            2025-2026 оны элсэлтийн бүртгэл эхэллээ
          </h2>
          <p className="mt-8 text-xl text-pretty font-bold text-gray-100 sm:text-2xl">
            2025.06.18-2025.07.09
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-xl font-bold text-[#323a46] sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                className="p-2 hover:bg-white bg-[#f9dd0d] rounded-md"
                key={link.name}
                href={link.href}
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
