import React, { useState } from 'react';
import { CartIcon, SearchIcon, ChevronDownIcon } from './icons';
import { Page } from '../App';

interface NavLink {
  label: string;
  page: Page;
  submenu?: string[];
}

const navLinks: NavLink[] = [
  { label: "Home", page: 'home' },
  { label: "E-Bikes", page: 'ebikes' },
  { label: "Solar Solutions", page: 'solar', submenu: ["Panels", "Batteries", "Generators"] },
  { label: "Payment Plans", page: 'payment' },
  { label: "About Us", page: 'about' },
  { label: "Contact", page: 'contact' },
];

interface HeaderProps {
    onNavigate: (page: Page) => void;
    currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0D1B2A] h-[70px] px-4 md:px-8 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <div className="flex items-center gap-4">
        <button onClick={() => onNavigate('home')} className="text-2xl font-bold text-white tracking-wider">YkS</button>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <div key={link.label} className="relative group">
            <button 
              onClick={() => onNavigate(link.page)} 
              className={`flex items-center transition-colors duration-300 ${currentPage === link.page ? 'text-[#00BFA6]' : 'text-white hover:text-[#00BFA6]'}`}
            >
              {link.label}
              {link.submenu && <ChevronDownIcon className="w-4 h-4 ml-1" />}
            </button>
            {link.submenu && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                {link.submenu.map((item) => (
                  <button key={item} onClick={() => onNavigate('solar')} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#00BFA6]">
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile actions */}
      <div className="flex items-center gap-3 md:hidden">
        <button onClick={() => setIsOpen(true)} aria-label="Open menu" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

      {/* Right side (desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-[200px] h-[32px] bg-white rounded-md pl-4 pr-8 text-sm placeholder-[#333333] focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition-all duration-300"
          />
          <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
        <div className="relative">
          <CartIcon className="w-6 h-6 text-white cursor-pointer hover:text-[#00BFA6] transition-colors" />
          <span className="absolute -top-1 -right-2 bg-[#4CAF50] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-white h-full p-6 shadow-xl">
            <button onClick={() => setIsOpen(false)} className="mb-6 text-gray-700">Close</button>
            <nav className="flex flex-col gap-3">
              {navLinks.map(link => (
                <button key={link.label} onClick={() => { onNavigate(link.page); setIsOpen(false); }} className="text-left text-gray-800 py-2 px-2 rounded-md hover:bg-gray-100">
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex-1" onClick={() => setIsOpen(false)} aria-hidden />
        </div>
      )}
    </header>
  );
};

export default Header;