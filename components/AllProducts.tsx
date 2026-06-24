'use client';

import React, { useState } from 'react';

// Categorias unificadas e organizadas
const CATEGORIES = [
  'Todos', 'Games', 'Geek', 'Acessórios', 'Ímãs', 'Chaveiros', 'Decorações', 'Porta Copos', 'Paisagens', 'Bandeiras'
];

// Array de produtos genéricos com todas as categorias que vocês pediram
const ALL_PRODUCTS = [
  { id: 1, name: 'Chaveiro Gatinho Personalizado', price: 'R$ 25,00', category: 'Chaveiros', desc: 'Chaveiro em Hama Beads feito com base na foto do seu felino favorito.', img: '/produtos/chaveiro-gato.png' },
  { id: 2, name: 'Ímã Controlinho Retrô', price: 'R$ 18,00', category: 'Games', desc: 'Lindo ímã de geladeira em formato de controle clássico de videogame.', img: '/produtos/ima-controle.png' },
  { id: 3, name: 'Porta Copo Pokebola', price: 'R$ 15,00', category: 'Porta Copos', desc: 'Proteja seus móveis com estilo geek usando esse porta copos pixelado.', img: '/produtos/porta-copo-poke.png' },
  { id: 4, name: 'Placa Pixel Art Herói Pop', price: 'R$ 50,00', category: 'Geek', desc: 'Placa decorativa perfeita para o seu quarto geek ou setup gamer.', img: '/produtos/placa-geek.png' },
  { id: 5, name: 'Brinco Espadinha Pixel', price: 'R$ 20,00', category: 'Acessórios', desc: 'Par de brincos super leves e estilosos feitos em mini Hama Beads.', img: '/produtos/brinco-espada.png' },
  { id: 6, name: 'Quadro Mini Paisagem Outono', price: 'R$ 75,00', category: 'Paisagens', desc: 'Uma linda obra de arte em pixel representando uma árvore de outono.', img: '/produtos/quadro-paisagem.png' },
  { id: 7, name: 'Bandeira Star Wars Imperial', price: 'R$ 60,00', category: 'Bandeiras', desc: 'Flâmula decorativa pixelada para pendurar na parede.', img: '/produtos/bandeira-starwars.png' },
  { id: 8, name: 'Vaso de Planta Pixel Flor', price: 'R$ 45,00', category: 'Decorações', desc: 'Item decorativo em 3D imitando os vasinhos dos jogos clássicos.', img: '/produtos/vaso-flor.png' },
  { id: 9, name: 'Ímã de Geladeira Cãozinho', price: 'R$ 22,00', category: 'Ímãs', desc: 'Lindo ímã pixelado para decorar seu ambiente com a carinha do seu doguinho.', img: '/produtos/ima-cao.png' },
];

export default function AllProducts() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Filtra os produtos com base na categoria selecionada
  const filteredProducts = activeCategory === 'Todos' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(product => product.category === activeCategory);

  return (
    <section id="produtos" className="py-20 px-4 max-w-7xl mx-auto relative z-30 scroll-mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#4A3E3D] mb-3">Nossa Vitrine Completa</h2>
        <p className="text-sm text-[#4A3E3D]/70 max-w-xl mx-auto">
          Explore todas as criações do Gisa Ateliê. Peças feitas à mão, pixel por pixel, com muito amor e carinho!
        </p>
      </div>

      {/* Menu de Filtros Horizontal / Responsivo */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shadow-sm ${
              activeCategory === category
                ? 'bg-[#4A3E3D] text-white'
                : 'bg-[#FFF9F4] text-[#4A3E3D]/80 border border-[#F8B8D0]/30 hover:bg-[#F8B8D0]/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de Produtos Dinâmico */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-[#FFF9F4] rounded-3xl border border-dashed border-[#F8B8D0]/40">
          <p className="text-sm text-[#4A3E3D]/60 font-medium">Em breve teremos fotos reais desta categoria por aqui! ✨</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-[#FFF9F4] rounded-3xl p-5 border border-[#F8B8D0]/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Imagem (Fundo branco padrão) */}
                <div className="bg-white rounded-2xl h-44 mb-4 flex items-center justify-center border border-[#F8B8D0]/10 overflow-hidden p-2 relative">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/300x300/fff9f4/4a3e3d?text=Foto+Em+Breve';
                    }}
                    className="h-36 object-contain group-hover:scale-105 transition-transform" 
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a59b0] bg-[#CDB4F6]/20 px-2.5 py-1 rounded-full">
                  {product.category}
                </span>
                <h3 className="font-bold text-base mt-2.5 text-[#4A3E3D] line-clamp-1">{product.name}</h3>
                {/* COR DO PREÇO AJUSTADA NO CARD */}
                <p className="text-[#f274a4] font-extrabold text-sm mt-0.5">{product.price}</p>
              </div>
              
              <button 
                type="button"
                onClick={() => setSelectedProduct(product)}
                className="mt-4 w-full bg-[#f274a4] text-white py-2 rounded-xl text-xs font-semibold hover:bg-[#e05b8c] transition-colors shadow-sm cursor-pointer"
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal Isolado para Detalhes do Produto */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[99999]">
          <div className="absolute inset-0" onClick={() => setSelectedProduct(null)}></div>
          
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative z-50 shadow-2xl border border-[#F8B8D0]/20">
            <button 
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-3xl font-light text-[#4A3E3D]/60 hover:text-[#4A3E3D] cursor-pointer"
            >
              &times;
            </button>
            
            <div className="bg-[#FFF9F4] rounded-2xl h-64 flex items-center justify-center p-4 mb-4 mt-2">
              <img 
                src={selectedProduct.img} 
                alt={selectedProduct.name} 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/fff9f4/4a3e3d?text=Foto+Em+Breve';
                }}
                className="h-56 object-contain" 
              />
            </div>
            
            <span className="text-xs font-bold uppercase bg-[#CDB4F6]/20 text-[#7a59b0] px-3 py-1 rounded-full">{selectedProduct.category}</span>
            <h3 className="text-2xl font-bold mt-3 text-[#4A3E3D]">{selectedProduct.name}</h3>
            {/* COR DO PREÇO AJUSTADA NO MODAL */}
            <p className="text-xl font-extrabold text-[#f274a4] mt-1">{selectedProduct.price}</p>
            <p className="text-sm text-[#4A3E3D]/80 mt-4 leading-relaxed">{selectedProduct.desc}</p>
            
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá, Gisa Ateliê! Fiquei sabendo da vitrine do site e quero encomendar o item: ${selectedProduct.name} (${selectedProduct.price})`)}`}
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