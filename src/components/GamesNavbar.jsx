import { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from "../assets/Logo.png";

export default function GamesNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 w-full z-50">
      <div className="flex justify-between items-center px-4 md:px-margin py-2 md:py-xs w-full max-w-7xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
        {/* Logo */}
        <div className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface tracking-tight">
          <img alt="Selena Interactive" className="h-10 md:h-14 w-auto object-contain" src={LOGO} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-gutter items-center">
          <Link className="text-primary font-bold border-b-2 border-primary pb-1" to="/">HOME</Link>
          <a className="text-white/80 hover:text-white transition-colors hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded" href="#about">ABOUT</a>
          <Link className="text-white/80 hover:text-white transition-colors hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded" to="/catalog">GAMES</Link>
          <a className="text-white/80 hover:text-white transition-colors hover:bg-white/5 transition-all duration-300 px-3 py-1 rounded" href="#developer">DEVELOPER</a>
        </div>

        {/* Desktop Join Discord - sekarang berupa link */}
        <a
          href="https://discord.gg/WnsszG64vQ"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-primary-container text-on-surface font-title-md text-title-md px-3 py-1 md:px-sm md:py-xs rounded-lg hover:scale-105 transition-transform active:scale-95 shadow-lg text-sm md:text-base"
        >
          Join Discord
        </a>

        {/* Mobile Hamburger (9 titik) */}
        <button 
          className="md:hidden flex flex-col gap-1 p-2 items-center justify-center w-10 h-10" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 bg-white rounded-full"></span>
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay (dari kiri ke kanan) */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background blur */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-md" 
          onClick={closeMenu}
        ></div>

        {/* Menu Panel dari kiri */}
        <div 
          className={`absolute top-0 left-0 h-full w-3/4 max-w-xs bg-black/90 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full py-8 px-6">
            {/* Logo kecil di dalam menu */}
            <div className="mb-8">
              <img alt="Selena Interactive" className="h-12 w-auto object-contain" src={LOGO} />
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-4 text-white text-lg font-medium">
              <Link to="/" className="hover:text-primary transition-colors" onClick={closeMenu}>HOME</Link>
              <a href="#about" className="hover:text-primary transition-colors" onClick={closeMenu}>ABOUT</a>
              <Link to="/catalog" className="hover:text-primary transition-colors" onClick={closeMenu}>GAMES</Link>
              <a href="#developer" className="hover:text-primary transition-colors" onClick={closeMenu}>DEVELOPER</a>
            </nav>

            {/* Mobile Join Discord - sekarang berupa link */}
            <a
              href="https://discord.gg/WnsszG64vQ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-primary-container text-on-surface font-title-md text-title-md px-4 py-2 rounded-lg hover:scale-105 transition-transform active:scale-95 shadow-lg text-sm md:text-base w-full text-center"
              onClick={closeMenu}
            >
              Join Discord
            </a>

            {/* Spacer */}
            <div className="flex-grow"></div>

            {/* Footer kecil di menu */}
            <p className="text-white/30 text-xs text-center">© 2026 Selena Interactive</p>
          </div>
        </div>
      </div>
    </nav>
  );
}