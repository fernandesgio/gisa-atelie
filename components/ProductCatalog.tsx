'use client';

import React, { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Chaveiro Pet Personalizado', price: 'R$ 32,00', tag: 'Pet', desc: 'Seu pet em pixel art! Chaveiro feito sob encomenda com base na foto do seu bichinho (tamanho padrão). Para outros tamanhos, consulte valores entre R$ 30,00 e R$ 35,00.' },
  { id: 2, name: 'Ímã de Geladeira Cãozinho', price: 'R$ 25,00', tag: 'Pet', desc: 'Lindo ímã pixelado padrão para decorar seu ambiente com a carinha do seu doguinho.' },
  { id: 3, name: 'Placa Decorativa Pets Welcome', price: 'R$ 40,00', tag: 'Decoração', desc: 'Placa perfeita para a entrada da sua casa mostrando o amor pelos animais.' },
];

export default function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <section id="catalogo" className="py-16 px-4 max-w-7xl mx-auto relative z-30 scroll-mt-16">
      {/* TÍTULO PIXELADO E COLORIDO VIA STYLE INLINE */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ 
          fontFamily: "'Silkscreen', sans-serif", 
          fontSize: '1.85rem', 
          fontWeight: 'bold', 
          letterSpacing: '0.05em', 
          userSelect: 'none' 
        }}>
          {"Mais Procurados".split("").map((char, index) => {
            const colors = ['#f182ad', '#946ad8', '#e0574b'];
            const currentColor = colors[index % colors.length];
            if (char === " ") return <span key={index}>&nbsp;</span>;
            return (
              <span key={index} style={{ fontFamily: "'Silkscreen', sans-serif", color: currentColor }}>
                {char}
              </span>
            );
          })}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div 
            key={product.id} 
            className="bg-[#FFF9F4] rounded-3xl p-6 border border-[#F8B8D0]/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="bg-white rounded-2xl h-48 mb-4 flex items-center justify-center border border-[#F8B8D0]/10 overflow-hidden p-2">
                <img src="/pet-banner.png" alt={product.name} className="h-40 object-contain" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7a59b0] bg-[#CDB4F6]/20 px-3 py-1 rounded-full">{product.tag}</span>
              <h3 className="font-bold text-lg mt-3 text-[#4A3E3D]">{product.name}</h3>
              <p className="text-[#f274a4] font-extrabold mt-1">{product.price}</p>
            </div>
            
            <button 
              type="button"
              onClick={() => setSelectedProduct(product)}
              className="mt-6 w-full bg-[#f274a4] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#e05b8c] transition-colors shadow-sm relative z-40 cursor-pointer pointer-events-auto"
            >
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>

      {/* Janela Modal Isolada */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[99999] pointer-events-auto">
          <div className="absolute inset-0" onClick={() => setSelectedProduct(null)}></div>
          
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative z-50 shadow-2xl border border-[#F8B8D0]/20">
            <button 
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-3xl font-light text-[#4A3E3D]/60 hover:text-[#4A3E3D] transition-colors z-50 cursor-pointer"
            >
              &times;
            </button>
            
            <div className="bg-[#FFF9F4] rounded-2xl h-64 flex items-center justify-center p-4 mb-4 mt-2">
              <img src="/pet-banner.png" alt={selectedProduct.name} className="h-56 object-contain" />
            </div>
            
            <span className="text-xs font-bold uppercase bg-[#CDB4F6]/20 text-[#7a59b0] px-3 py-1 rounded-full">{selectedProduct.tag}</span>
            <h3 className="text-2xl font-bold mt-3 text-[#4A3E3D]">{selectedProduct.name}</h3>
            <p className="text-xl font-extrabold text-[#f274a4] mt-1">{selectedProduct.price}</p>
            <p className="text-sm text-[#4A3E3D]/80 mt-4 leading-relaxed">{selectedProduct.desc}</p>
            
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá, Gisa Ateliê! Vi os mais procurados no site e quero encomendar o item: ${selectedProduct.name} (${selectedProduct.price})`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center bg-[#4A3E3D] text-white py-3 rounded-xl font-bold hover:bg-[#5c4e4d] transition-colors shadow-md relative z-50"
            >
              Encomendar via WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
}