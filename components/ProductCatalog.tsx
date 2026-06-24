'use client';

import React, { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Chaveiro Gatinho Personalizado', price: 'R$ 25,00', tag: 'Pet', desc: 'Chaveiro em Hama Beads feito com base na foto do seu felino favorito.' },
  { id: 2, name: 'Ímã de Geladeira Cãozinho', price: 'R$ 22,00', tag: 'Pet', desc: 'Lindo ímã pixelado para decorar seu ambiente com a carinha do seu doguinho.' },
  { id: 3, name: 'Placa Decorativa Pets Welcome', price: 'R$ 45,00', tag: 'Decoração', desc: 'Placa perfeita para a entrada da sua casa mostrando o amor pelos animais.' },
];

export default function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const openModal = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProduct(product);
  };

  return (
    <section id="catalogo" className="py-16 px-4 max-w-7xl mx-auto relative">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#4A3E3D]">Nosso Catálogo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div 
            key={product.id} 
            className="bg-[#FFF9F4] rounded-3xl p-6 border border-[#F8B8D0]/30 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            onClick={(e) => openModal(product, e)}
          >
            <div>
              <div className="bg-white rounded-2xl h-48 mb-4 flex items-center justify-center border border-[#F8B8D0]/10 overflow-hidden p-2">
                <img src="/pet-banner.png" alt={product.name} className="h-40 object-contain group-hover:scale-105 transition-transform" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7a59b0] bg-[#CDB4F6]/20 px-3 py-1 rounded-full">{product.tag}</span>
              <h3 className="font-bold text-lg mt-3 text-[#4A3E3D]">{product.name}</h3>
              <p className="text-[#F8B8D0] font-bold mt-1">{product.price}</p>
            </div>
            
            <button 
              onClick={(e) => openModal(product, e)}
              className="mt-6 w-full bg-[#F8B8D0] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#f3a4c1] transition-colors shadow-sm"
            >
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>

      {/* Janela de Detalhes Modificada com Z-Index Máximo (z-50) */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity">
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl border border-[#F8B8D0]/20"
            onClick={(e) => e.stopPropagation()} // Impede fechar clicando dentro da caixa
          >
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-3xl font-light text-[#4A3E3D]/60 hover:text-[#4A3E3D] transition-colors"
            >
              &times;
            </button>
            
            <div className="bg-[#FFF9F4] rounded-2xl h-64 flex items-center justify-center p-4 mb-4 mt-2">
              <img src="/pet-banner.png" alt={selectedProduct.name} className="h-56 object-contain" />
            </div>
            
            <span className="text-xs font-bold uppercase bg-[#CDB4F6]/20 text-[#7a59b0] px-3 py-1 rounded-full">{selectedProduct.tag}</span>
            <h3 className="text-2xl font-bold mt-3 text-[#4A3E3D]">{selectedProduct.name}</h3>
            <p className="text-xl font-bold text-[#F8B8D0] mt-1">{selectedProduct.price}</p>
            <p className="text-sm text-[#4A3E3D]/80 mt-4 leading-relaxed">{selectedProduct.desc}</p>
            
            <a 
              href={`https://wa.me/seu-numero?text=Olá! Quero encomendar o ${encodeURIComponent(selectedProduct.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center bg-[#4A3E3D] text-white py-3 rounded-xl font-bold hover:bg-[#5c4e4d] transition-colors shadow-md"
            >
              Encomendar via WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
}