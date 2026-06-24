'use client';

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import CustomOrderForm from '../components/CustomOrderForm';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#4A3E3D]">
      <Header />
      <main>
        <Hero />
        
        {/* Catálogo Resumido de Destaques */}
        <ProductCatalog />
        
        {/* Formulário de Encomendas */}
        <CustomOrderForm />
      </main>

      {/* Rodapé */}
      <footer className="bg-[#4A3E3D] text-[#FFF9F4] py-10 px-4 text-sm border-t-4 border-[#F8B8D0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <h4 className="font-bold text-lg mb-2">gisa ateliê</h4>
            <p className="text-[#FFF9F4]/70 text-xs">Pixels que conectam, detalhes que encantam.</p>
          </div>
          
          <div className="flex justify-center gap-6 font-semibold">
            {/* LINK DO INSTAGRAM AJUSTADO PARA VARIÁVEL DE AMBIENTE */}
            <a 
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com'} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#F8B8D0] transition-colors"
            >
              📸 Instagram
            </a>
            {/* LINK DO WHATSAPP COM VARIÁVEL DE AMBIENTE */}
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#CDB4F6] transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
          
          <div className="flex flex-col md:items-end gap-2 text-xs text-[#FFF9F4]/70">
            <a href="/politica-de-privacidade" className="hover:underline">Política de Privacidade</a>
            <a href="/trocas-e-devolucoes" className="hover:underline">Trocas e Devoluções</a>
          </div>
        </div>
        <div className="text-center text-xs text-[#FFF9F4]/40 mt-8 pt-4 border-t border-[#FFF9F4]/10">
          © {new Date().getFullYear()} Gisa Ateliê. Feito com ❤️ por vocês.
        </div>
      </footer>
    </div>
  );
}