'use client';

import React from 'react';
import Header from '../../components/Header';
import AllProducts from '../../components/AllProducts';

export default function ProdutosPage() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#4A3E3D]">
      {/* Reutiliza o cabeçalho para manter a identidade do site */}
      <Header />
      
      <main className="pt-20 bg-[#FFF9F4]/30 min-h-[calc(100vh-300px)]">
        <AllProducts />
      </main>

      {/* Rodapé da página de produtos */}
      <footer className="bg-[#4A3E3D] text-[#FFF9F4] py-10 px-4 text-sm border-t-4 border-[#F8B8D0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <h4 className="font-bold text-lg mb-2">gisa ateliê</h4>
            <p className="text-[#FFF9F4]/70 text-xs">Pixels que conectam, detalhes que encantam.</p>
          </div>
          
          <div className="flex justify-center gap-6 font-semibold">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F8B8D0] transition-colors">
              📸 Instagram
            </a>
            <a href="https://wa.me/5511958935029" target="_blank" rel="noopener noreferrer" className="hover:text-[#CDB4F6] transition-colors">
              💬 WhatsApp
            </a>
          </div>
          
          <div className="flex flex-col md:items-end gap-2 text-xs text-[#FFF9F4]/70">
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <a href="#" className="hover:underline">Trocas e Devoluções</a>
          </div>
        </div>
      </footer>
    </div>
  );
}