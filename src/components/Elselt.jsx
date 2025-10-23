'use client'

import { useState } from 'react'
import BachDay from './BachDay';
import BachEve from './BachEve';

export default function Elselt() {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex flex-col items-center min-h-screen bg-white py-28'>
      
      <h1 className='text-gray-800 text-4xl font-bold mb-8 text-center'>
        Элсэлтийн бүртгэл
      </h1>
      
      <div className='flex flex-col sm:flex-row gap-6'>
        <BachDay />
        <BachEve />
      </div>
      
    </div>
  )
}