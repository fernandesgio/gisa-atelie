'use client';

import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-[#F8B8D0]/20 py-4 px-6 flex justify-between items-center z-40">
      <div className="flex items-center gap-2">
        <a href="/" className="cursor-pointer block">
          <img src="/logo.png" alt="Gisa Ateliê Logo" className="h-22 object-contain" />
        </a>
      </div>
      
      <nav 
        className="hidden md:flex gap-6 font-semibold text-sm"
        style={{ fontFamily: "'Silkscreen', sans-serif" }}
      >
        <a href="/produtos" className="hover:text-[#f274a4] transition-colors">
          Produtos
        </a>
        <a href="/#encomenda" className="hover:text-[#f274a4] transition-colors">
          Encomenda Personalizada
        </a>
        <a href="/sobre" className="hover:text-[#f274a4] transition-colors">
          Sobre
        </a>
      </nav>
    </header>
  );
}