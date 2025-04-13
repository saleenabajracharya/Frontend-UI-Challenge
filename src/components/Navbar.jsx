import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Logoipsum</title>
        <meta name="description" content="This is EB Pearl task." />
      </Helmet>
      <nav className="w-full bg-white px-6 py-4 flex justify-between items-center h-[96px] relative" aria-label="Main navigation">
        {/* Logo */}
        <div className="flex items-center space-x-2 ml-0 lg:ml-14">
          <Link className="flex gap-3 md:gap-2" to="/" aria-label="Go to homepage">
            <img src="/images/Logo.png" alt="Logo"/>
            <span className="font-bold text-xl md:text-2xl lg:text-4xl text-[#1A1A1A]">
              Logoipsum
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 md:space-x-4">
          <a href="#" className="navbar-menu">
            Products
          </a>
          <a href="#" className="navbar-menu">
            Solutions
          </a>
          <a href="#" className="navbar-menu">
            Help center
          </a>
          <a href="#" className="navbar-menu">
            Get started
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="text-sm text-[var(--primary-color)] hover:underline"
            aria-label="Login"
          >
            Login
          </button>
          <button
            className="bg-[var(--primary-color)] hover:bg-[#3726CC] text-white text-sm px-4 py-2 rounded-full me-0 lg:me-14"
            aria-label="Request a demo"
          >
            Request a demo
          </button>
        </div>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMenuOpen}
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[96px] left-0 w-full bg-white flex flex-col items-start gap-4 p-4 shadow-md md:hidden z-50">
            <a href="#" className="navbar-menu ">
              Products
            </a>
            <a href="#" className="navbar-menu ">
              Solutions
            </a>
            <a href="#" className="navbar-menu">
              Help center
            </a>
            <a href="#" className="navbar-menu">
              Get started
            </a>
            <button
              className="text-sm text-[var(--primary-color)] hover:underline"
              aria-label="Login"
            >
              Login
            </button>
            <button
              className="bg-[var(--primary-color)] hover:bg-[#3726CC] text-white text-sm px-4 py-2 rounded-full w-300px text-left"
              aria-label="Request a demo"
            >
              Request a demo
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
