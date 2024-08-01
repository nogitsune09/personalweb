'use client';

import React from 'react';
import Image from 'next/image';
import NavMenu from '../../components/NavMenu';
import image1 from "../../../../public/nissan-skyline-gt-r-1920x1080-14212.jpg";

const skills = [
  { name: 'Next.js', level: 80 },
  { name: 'React', level: 75 },
  { name: 'JavaScript', level: 90 },
  { name: 'MongoDB', level: 70 },
];

export default function Resume() {
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
      <div id="resume" className="relative z-10 text-center mt-20 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg animate__animated animate__fadeIn">
        <h2 className="text-4xl font-bold text-purple-800 animate__animated animate__fadeInDown">
          رزومه من
        </h2>
        <p className="mt-4 text-3xl font-bold text-purple-600 animate__animated animate__fadeInUp">
          محمدرضا مهبودی
        </p>
        <div className="mt-6 text-left">
          <h3 className="text-2xl font-semibold text-purple-800">مهارت‌ها</h3>
          <ul className="list-disc list-inside mt-2 text-purple-600">
            {skills.map((skill) => (
              <li key={skill.name} className="mt-2">
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button 
          onClick={() => window.location.href='https://dragonshop.vercel.app/'}
          className="mt-8 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out"
        >
          سایت فروشگاهی با Next.js
        </button>
      </div>
    </main>
  );
}
