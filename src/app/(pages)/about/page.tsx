'use client';

import React from 'react';
import Image from 'next/image';
import NavMenu from '../../components/NavMenu';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import image1 from "../../../../public/nissan-skyline-gt-r-1920x1080-14212.jpg";

export default function About() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('mrezamehboodi@gmail.com');
    alert('ایمیل کپی شد!');
  };

  return (
    <main className="relative flex flex-col items-center justify-center h-screen">
      <NavMenu />
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image1}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div id="about" className="relative z-10 text-center mt-20 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg animate__animated animate__fadeIn" dir="rtl">
        <h2 className="text-4xl font-bold text-black animate__animated animate__fadeInDown">
          درباره من
        </h2>
        <p className="mt-8 text-lg font-semibold text-black animate__animated animate__fadeInUp">
          من تحصیل کرده رشته کامپیوتر و گرایش نرم‌افزار هستم و مسلط به Next.js، React و Tailwind می‌باشم.
        </p>
        <div className="mt-6 flex justify-center space-x-4 rtl:space-x-reverse">
          <a href="https://github.com/nogitsune09" target="_blank" rel="noopener noreferrer" className="text-black text-3xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mohammadreza-mehboodi-59141a318/" target="_blank" rel="noopener noreferrer" className="text-black text-3xl">
            <FaLinkedin />
          </a>
        </div>
        <button 
          onClick={() => window.location.href='https://dragonshop.vercel.app/'}
          className="mt-8 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out"
        >
          سایت فروشگاهی با Next.js
        </button>
        <button 
          onClick={copyToClipboard}
          className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          کپی ایمیل من
        </button>
      </div>
    </main>
  );
}
