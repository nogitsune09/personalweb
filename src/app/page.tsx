'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import 'animate.css';
import image1 from "../../public/nissan-skyline-gt-r-1920x1080-14212.jpg";
import NavMenu from './components/NavMenu';
import { useRouter } from 'next/navigation';

export default function Home() {
  const bgRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const xPos = (clientX / innerWidth) * 100;
    const yPos = (clientY / innerHeight) * 100;

    gsap.to(bgRef.current, {
      backgroundPosition: `${xPos}% ${yPos}%`,
      duration: 0.5,
      ease: 'power3.out',
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const handleButtonClick = () => {
    router.push('/about');
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(bgRef.current, { backgroundPosition: '50% 50%', duration: 5, ease: 'power1.inOut' })
      .to(bgRef.current, { backgroundPosition: '0% 50%', duration: 5, ease: 'power1.inOut' })
      .to(bgRef.current, { backgroundPosition: '50% 0%', duration: 5, ease: 'power1.inOut' })
      .to(bgRef.current, { backgroundPosition: '100% 50%', duration: 5, ease: 'power1.inOut' });
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center h-screen">
      <NavMenu />
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={image1}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 text-center mt-20 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg animate__animated animate__fadeIn">
        <h1 className="hero-text text-5xl font-bold text-purple-800 animate__animated animate__fadeInDown">
          خوش آمدید به سایت شخصی من
        </h1>
        <p className="mt-4 text-3xl font-bold text-purple-600 animate__animated animate__fadeInUp">
          محمدرضا مهبودی
        </p>
        <button 
          onClick={handleButtonClick}
          className="mt-8 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out"
        >
          بیشتر بدانید
        </button>
      </div>
    </main>
  );
}
