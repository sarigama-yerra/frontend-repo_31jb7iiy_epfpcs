import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0F14]/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between text-white">
        <a href="#" className="font-semibold tracking-tight">BlueStack</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#auth" className="text-sm text-white/80 hover:text-white">Sign in</a>
          <a href="#auth" className="inline-flex items-center justify-center rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-white/90 transition">Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;