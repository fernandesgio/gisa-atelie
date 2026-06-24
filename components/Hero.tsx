import React from 'react';
import { ShoppingBasket, MessageSquareHeart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#FFF9F4] to-white py-16 md:py-24 px-4 text-center overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <span className="inline-block bg-[#F8B8D0]/20 text-[#4A3E3D] text-xs md:text-sm font-bold px-4 py-1.5 rounded-full border border-[#F8B8D0] mb-6">
          ✨ Feito à mão com Pixel Art
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-[#4A3E3D] mb-6 leading-tight">
          Arte em Hama Beads feita com carinho
        </h2>
        <p className="text-sm md:text-lg text-[#4A3E3D]/80 font-medium mb-10 max-w-xl mx-auto">
          Peças exclusivas, personalizadas e produzidas pixel por pixel para dar vida aos seus personagens favoritos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#catalogo" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F8B8D0] hover:bg-[#F8B8D0]/90 text-[#4A3E3D] font-bold px-8 py-3.5 rounded-full shadow-md transition-all border-b-4 border-[#4A3E3D]/20">
            <ShoppingBasket className="w-5 h-5" /> Ver Produtos
          </a>
          <a href="#personalizados" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-[#FFF9F4] text-[#4A3E3D] font-bold px-8 py-3.5 rounded-full border-2 border-[#CDB4F6] shadow-sm transition-all">
            <MessageSquareHeart className="w-5 h-5 text-[#CDB4F6]" /> Fazer Encomenda
          </a>
        </div>
      </div>
    </section>
  );
}