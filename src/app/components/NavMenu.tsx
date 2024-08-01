'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const items = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
];

const NavMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-20">
      <div className="relative flex flex-col justify-between p-5 w-full border-b border-gray-200 md:flex-row bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
        <div className="flex justify-between items-center w-full md:hidden">
          <h1 className="text-xl font-bold text-white">Logo</h1>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-white">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`flex-col md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'} items-center justify-center w-full space-y-2 md:space-y-0 md:space-x-4`}>
          {items.map((item) => (
            <Link key={item.name} href={item.href} legacyBehavior>
              <a className="p-4 cursor-pointer transition-transform duration-300 ease-out no-underline text-gray-900 tracking-wider uppercase text-xs my-1 md:my-0 relative border-2 border-gray-300 rounded-lg hover:bg-opacity-80 hover:scale-105 hover:border-black"
                 style={{ backgroundColor: `rgba(156, 39, 176, 0.2)` }} // Adding a subtle purple background
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
