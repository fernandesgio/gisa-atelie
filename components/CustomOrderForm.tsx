'use client';

import React, { useState } from 'react';

export default function CustomOrderForm() {
  const [petType, setPetType] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const phoneNumber = "5511958935029";
    
    const message = encodeURIComponent(
      `Olá, Gisa Ateliê! Gostaria de fazer uma encomenda personalizada:\n\n` +
      `• Tipo de Peça: ${petType}\n` +
      `• Detalhes Extras: ${details || 'Nenhum'}\n\n` +
      `Estou com a foto de referência pronta para te mandar aqui no chat!`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    setSubmitted(true);
    
    // Abre o WhatsApp na hora
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reseta o estado do botão após alguns segundos
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="encomenda" className="py-16 px-4 bg-[#FFF9F4] border-y border-[#F8B8D0]/20">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 border border-[#F8B8D0]/30 shadow-sm">
        
        {/* TÍTULO EXCLUSIVO EM PIXEL ART COM LETRAS COLORIDAS */}
        <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <h2 style={{ 
            fontFamily: "'Silkscreen', sans-serif", 
            fontSize: '1.65rem', 
            fontWeight: 'bold', 
            letterSpacing: '0.05em', 
            userSelect: 'none' 
          }}>
            {"Encomenda Personalizada".split("").map((char, index) => {
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
        
        <p className="text-sm text-center text-[#4A3E3D]/70 mb-8">Transforme suas ideias e fotos em arte de pixel!</p>
        
        <form onSubmit={handleSendOrder} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2 text-[#4A3E3D]">Qual o projeto? (Ex: Pet, Paisagem, Ímãs, Chaveiros, Objetos decorativos, etc)</label>
            <input 
              type="text" 
              required
              className="w-full p-3 rounded-xl border border-[#F8B8D0]/30 focus:outline-none focus:border-[#F8B8D0] text-[#4A3E3D]" 
              placeholder="Ex: Ímã de gatinho siamês ou chaveiro de controle de videogame"
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#4A3E3D]">Algum detalhe importante? (Cores da coleira, manchinhas, tamanho, tipo de peça, preferências, etc)</label>
            <textarea 
              className="w-full p-3 rounded-xl border border-[#F8B8D0]/30 focus:outline-none focus:border-[#F8B8D0] h-32 text-[#4A3E3D]" 
              placeholder="Ex: Quero em formato de chaveiro. O gatinho tem uma manchinha branca no focinho e usa coleira rosa."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>

          <div className="bg-[#FFF9F4] p-4 rounded-xl border border-dashed border-[#F8B8D0]/50 text-center">
            <span className="text-xl mb-1 block">📸</span>
            <p className="text-xs text-[#4A3E3D]/80">
              <strong>Nota sobre a foto:</strong> Você enviará a foto de referência diretamente pelo chat do WhatsApp após clicar no botão abaixo!
            </p>
          </div>

          <button 
            type="submit" 
            className={`w-full font-bold py-3 rounded-xl transition-colors shadow-sm cursor-pointer ${
              submitted ? 'bg-[#967cbf] text-[#244605]' : 'bg-[#967cbf] hover:bg-[#805cb8] text-white'
            }`}
          >
            {submitted ? '✓ Abrindo WhatsApp...' : 'Enviar Pedido para o WhatsApp'}
          </button>
        </form>
      </div>
    </section>
  );
}