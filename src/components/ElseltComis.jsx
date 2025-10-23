import { useState } from 'react';
import userLogo from '../image/user.png';
import Schools from './Schools';
import { Dialog, DialogPanel } from "@headlessui/react";
import logoMuls from '../image/muls_logo.png';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const provinces = [
  { name: 'Архангай аймаг', provinceId: 1 },
  { name: 'Баян-Өлгий аймаг', provinceId: 2 },
  { name: 'Баянхонгор аймаг', provinceId: 3 },
  { name: 'Булган аймаг', provinceId: 4 },
  { name: 'Говь-Алтай аймаг', provinceId: 5 },
  { name: 'Говьсүмбэр аймаг', provinceId: 6 },
  { name: 'Дархан-Уул аймаг', provinceId: 7 },
  { name: 'Дорноговь аймаг', provinceId: 8 },
  { name: 'Дорнод аймаг', provinceId: 9 },
  { name: 'Дундговь аймаг', provinceId: 10 },
  { name: 'Завхан аймаг', provinceId: 11 },
  { name: 'Орхон аймаг', provinceId: 12 },
  { name: 'Өвөрхангай аймаг', provinceId: 13 },
  { name: 'Өмнөговь аймаг', provinceId: 14 },
  { name: 'Сүхбаатар аймаг', provinceId: 15 },
  { name: 'Сэлэнгэ аймаг', provinceId: 16 },
  { name: 'Төв аймаг', provinceId: 17 },
  { name: 'Увс аймаг', provinceId: 18 },
  { name: 'Ховд аймаг', provinceId: 19 },
  { name: 'Хөвсгөл аймаг', provinceId: 20 },
  { name: 'Хэнтий аймаг', provinceId: 21 },
  { name: 'Улаанбаатар хот', provinceId: 22 }
];

const teachers = [
  { memberID: 'e1', fname: 'Наянжин', lname: 'Сарангарав', mail: 'sarangarav@muls.edu.mn', phone: '96679570', img: userLogo, provinceID: 8 },
  { memberID: 'e2', fname: 'Өлзий', lname: 'Нарангарав', mail: 'narangarav@muls.edu.mn', phone: '88059531', img: userLogo, provinceID: 8 },
  { memberID: 'e3', fname: 'Бат', lname: 'Эрдэнэ', mail: 'baterdene@muls.edu.mn', phone: '99112233', img: userLogo, provinceID: 1 },
  { memberID: 'e4', fname: 'Сараа', lname: 'Даваажав', mail: 'saraa@muls.edu.mn', phone: '99224455', img: userLogo, provinceID: 2 },
  { memberID: 'e5', fname: 'Дөлгөөн', lname: 'Баярсайхан', mail: 'dulgunn@muls.edu.mn', phone: '99335566', img: userLogo, provinceID: 3 },
  { memberID: 'e6', fname: 'Энх', lname: 'Сүхбаатар', mail: 'enkh@muls.edu.mn', phone: '99446677', img: userLogo, provinceID: 4 },
  { memberID: 'e7', fname: 'Болормаа', lname: 'Ганбат', mail: 'bolormaa@muls.edu.mn', phone: '99557788', img: userLogo, provinceID: 5 },
  { memberID: 'e8', fname: 'Халиун', lname: 'Отгонбаяр', mail: 'khaliun@muls.edu.mn', phone: '99668899', img: userLogo, provinceID: 6 },
  { memberID: 'e9', fname: 'Ган-Эрдэнэ', lname: 'Төмөрсүх', mail: 'ganerdene@muls.edu.mn', phone: '99779900', img: userLogo, provinceID: 7 },
  { memberID: 'e10', fname: 'Мөнхзул', lname: 'Энхтуяа', mail: 'munkhzul@muls.edu.mn', phone: '99880011', img: userLogo, provinceID: 9 },
  { memberID: 'e11', fname: 'Одгэрэл', lname: 'Лхагвасүрэн', mail: 'odgerel@muls.edu.mn', phone: '99991122', img: userLogo, provinceID: 10 },
  { memberID: 'e12', fname: 'Тэмүүлэн', lname: 'Батсайхан', mail: 'temuulen@muls.edu.mn', phone: '88112233', img: userLogo, provinceID: 11 },
  { memberID: 'e13', fname: 'Ану', lname: 'Жаргалсайхан', mail: 'anu@muls.edu.mn', phone: '88223344', img: userLogo, provinceID: 12 },
  { memberID: 'e14', fname: 'Саруул', lname: 'Мөнхбат', mail: 'saruul@muls.edu.mn', phone: '88334455', img: userLogo, provinceID: 13 },
  { memberID: 'e15', fname: 'Номин', lname: 'Отгон', mail: 'nominn@muls.edu.mn', phone: '88445566', img: userLogo, provinceID: 14 },
  { memberID: 'e16', fname: 'Хүслэн', lname: 'Ганзориг', mail: 'khuslen@muls.edu.mn', phone: '88556677', img: userLogo, provinceID: 15 }
];

export default function ElseltComis() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-gray-50 py-20 sm:py-28'>
      {/* Header & Sidebar */}
      <div className='flex flex-col md:flex-row gap-10 px-4 max-w-7xl mx-auto'>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 rounded-md text-gray-700 hover:bg-gray-200"
          >
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar for desktop */}
        <div className="hidden [@media(min-width:800px)]:block">
          <Schools />
        </div>

        {/* Mobile menu dialog */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/30" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <img alt="muls logo" src={logoMuls} className="h-12 w-auto" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-200"
              >
                <XMarkIcon aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-6 space-y-4">
              <a href="/" className="block text-lg font-medium text-gray-700 hover:text-blue-600">Нүүр хуудас</a>
              <Schools />
            </nav>
          </DialogPanel>
        </Dialog>

        {/* Main content */}
        <div className="flex-1">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">Элсэлтийн комисс</h2>
            <p className="mt-4 text-lg text-gray-600">Хөдөө орон нутагт ажиллаж буй багш нарын мэдээлэл</p>
          </div>

          {/* Teachers Grid */}
          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            {teachers.map((teacher) => {
              const provinceObj = provinces.find(p => p.provinceId === teacher.provinceID);
              return (
                <li
                  key={teacher.memberID}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 text-center border border-gray-200 flex flex-col justify-between min-h-[400px]"
                >
                  <img
                    src={teacher.img}
                    alt={`${teacher.fname} ${teacher.lname}`}
                    className="mx-auto w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">{teacher.fname} {teacher.lname}</h3>
                    <p className="text-sm text-gray-700">{teacher.mail}</p>
                    <p className="mt-2 text-sm font-medium text-gray-700">{teacher.phone}</p>
                    <h3 className="mt-4 text-lg text-gray-800 border-t border-gray-800 pt-2">
                      {provinceObj ? provinceObj.name : 'Аймаг мэдээлэл алга'}
                    </h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
