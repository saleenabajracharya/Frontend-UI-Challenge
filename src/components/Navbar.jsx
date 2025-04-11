import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-6 py-4 flex justify-between items-center h-[96px] relative">
      {/* Logo */}
      <div className="flex items-center space-x-2 ml-0 lg:ml-14">
        <img src="/images/Logo.png" alt="" />
        <span className="font-bold text-xl lg:text-4xl text-[#1A1A1A]">Logoipsum</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="navbar-menu">Products</a>
        <a href="#" className="navbar-menu">Solutions</a>
        <a href="#" className="navbar-menu">Help center</a>
        <a href="#" className="navbar-menu">Get started</a>
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-sm text-[var(--primary-color)] hover:underline">Login</button>
        <button className="bg-[var(--primary-color)] hover:bg-[#3726CC] text-white text-sm px-4 py-2 rounded-full me-0 lg:me-14">
          Request a demo
        </button>
      </div>

      {/* Hamburger Icon (Visible on Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[96px] left-0 w-full bg-white flex flex-col items-start gap-4 p-4 shadow-md md:hidden z-50">
          <a href="#" className="navbar-menu ">Products</a>
          <a href="#" className="navbar-menu ">Solutions</a>
          <a href="#" className="navbar-menu">Help center</a>
          <a href="#" className="navbar-menu">Get started</a>
          <button className="text-sm text-[var(--primary-color)] hover:underline">Login</button>
          <button className="bg-[var(--primary-color)] hover:bg-[#3726CC] text-white text-sm px-4 py-2 rounded-full w-300px text-left">
            Request a demo
          </button>
        </div>
      )}
    </nav>
  );
};
