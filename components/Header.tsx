'use client';

import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-[#F8B8D0]/20 py-4 px-6 flex justify-between items-center z-40">
      <div className="flex items-center gap-2">
        {/* Adicionando a logo pixel art oficial */}
        <img src="/logo.png" alt="Gisa Ateliê Logo" className="h-12 object-contain" />
      </div>
      <nav className="hidden md:flex gap-6 font-semibold text-sm">
        <a href="#catalogo" className="hover:text-[#F8B8D0] transition-colors">Produtos</a>
        <a href="#encomenda" className="hover:text-[#F8B8D0] transition-colors">Encomenda Personalizada</a>
        <a href="#sobre" className="hover:text-[#F8B8D0] transition-colors">Sobre</a>
      </nav>
    </header>
  );
}