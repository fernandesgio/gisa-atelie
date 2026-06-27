import React from 'react';
import { ShoppingBasket, MessageSquareHeart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#FFF9F4] to-white py-16 md:py-24 px-4 text-center overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <span className="inline-block bg-[#F8B8D0]/20 text-[#4A3E3D] text-xs md:text-sm font-bold px-4 py-1.5 rounded-full border border-[#F8B8D0] mb-6">
          ✨ Feito à mão com Pixel Art
        </span>
        
        {/* TÍTULO PRINCIPAL EM PIXEL ART COLORIDO (CORRIGIDO PARA NÃO QUEBRAR PALAVRAS NO MEIO) */}
        <div className="flex justify-center mb-6">
          <h2 style={{ 
            fontFamily: "'Silkscreen', sans-serif", 
            fontSize: 'clamp(1.4rem, 4.5vw, 2.3rem)', 
            fontWeight: 'bold', 
            letterSpacing: '0.05em', 
            lineHeight: '1.5',
            userSelect: 'none',
            display: 'flex',
            flexWrap: 'wrap', 
            justifyContent: 'center',
            maxWidth: '100%'
          }}>
            {"Arte em Hama Beads feita com carinho".split(" ").map((word, wordIndex) => {
              // Criamos um bloco que mantém a palavra unida (whiteSpace: 'nowrap')
              return (
                <span 
                  key={wordIndex} 
                  style={{ 
                    whiteSpace: 'nowrap', 
                    display: 'inline-block',
                    marginRight: '0.4em' // Espaço perfeito entre as palavras
                  }}
                >
                  {word.split("").map((char, charIndex) => {
                    // Calculamos a cor baseada na posição global da letra
                    const colors = ['#45015a'];
                    const globalIndex = wordIndex + charIndex; 
                    const currentColor = colors[globalIndex % colors.length];

                    return (
                      <span key={charIndex} style={{ fontFamily: "'Silkscreen', sans-serif", color: currentColor }}>
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </h2>
        </div>

        <p className="text-sm md:text-lg text-[#4A3E3D]/80 font-medium mb-10 max-w-xl mx-auto">
          Peças exclusivas, personalizadas e produzidas pixel por pixel para dar vida aos seus personagens favoritos.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/produtos" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F8B8D0] hover:bg-[#F8B8D0]/90 text-[#4A3E3D] font-bold px-8 py-3.5 rounded-full shadow-md transition-all border-b-4 border-[#4A3E3D]/20">
            <ShoppingBasket className="w-5 h-5" /> Ver Produtos
          </a>
          <a href="#encomenda" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-[#FFF9F4] text-[#4A3E3D] font-bold px-8 py-3.5 rounded-full border-2 border-[#CDB4F6] shadow-sm transition-all">
            <MessageSquareHeart className="w-5 h-5 text-[#CDB4F6]" /> Fazer Encomenda
          </a>
        </div>
      </div>
    </section>
  );
}