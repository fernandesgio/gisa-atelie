'use client';

import React, { useState } from 'react';

export default function CustomOrderForm() {
  const [petType, setPetType] = useState('');
  const [details, setDetails] = useState('');
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    const baseText = `Olá, Gisa Ateliê! Gostaria de fazer uma encomenda personalizada:\n\n` +
                     `• Tipo de Pet: ${petType}\n` +
                     `• Detalhes Extras: ${details}\n` +
                     `• Foto de Referência: ${fileName ? `Sim (${fileName})` : 'Não enviada'}`;
                     
    const photoPrompt = fileName ? `\n\nEstou com a foto de referência pronta para te mandar em seguida aqui no chat!` : '';
    
    const whatsappUrl = `https://wa.me/seu-numero?text=${encodeURIComponent(baseText + photoPrompt)}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="encomenda" className="py-16 px-4 bg-[#FFF9F4] border-y border-[#F8B8D0]/20">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 border border-[#F8B8D0]/30 shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#4A3E3D]">Encomenda Personalizada</h2>
        <p className="text-sm text-center text-[#4A3E3D]/70 mb-8">Transforme a foto do seu companheiro em arte de pixel!</p>
        
        <form onSubmit={handleSendOrder} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2">Qual o bichinho? (Ex: Gato, Cachorro, Calopsita)</label>
            <input 
              type="text" 
              required
              className="w-full p-3 rounded-xl border border-[#F8B8D0]/30 focus:outline-none focus:border-[#F8B8D0]" 
              placeholder="Ex: Gatinho Siamês"
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Algum detalhe importante? (Cores da coleira, manchinhas)</label>
            <textarea 
              className="w-full p-3 rounded-xl border border-[#F8B8D0]/30 focus:outline-none focus:border-[#F8B8D0] h-24" 
              placeholder="Ex: Ele tem uma manchinha branca no focinho e usa coleira rosa."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>

          {/* Área de Upload de Imagem Aprimorada */}
          <div>
            <label className="block text-sm font-bold mb-2">Foto de Referência do seu Pet</label>
            <div className="bg-[#FFF9F4] p-4 rounded-xl border border-dashed border-[#F8B8D0]/50 flex flex-col items-center justify-center text-center relative cursor-pointer hover:bg-[#FFF4EC] transition-colors">
              <input 
                type="file" 
                accept="image/*"
                id="pet-photo"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              />
              <span className="text-2xl mb-1">📸</span>
              <span className="text-sm font-semibold text-[#4A3E3D]">
                {fileName ? `✓ Imagem selecionada: ${fileName}` : 'Clique para selecionar a foto do computador/celular'}
              </span>
              <span className="text-xs text-[#4A3E3D]/60 mt-1">
                A foto será confirmada no formulário e você a enviará no anexo do WhatsApp.
              </span>
            </div>
          </div>

          <button 
            type="submit" 
            className={`w-full font-bold py-3 rounded-xl transition-colors shadow-sm ${
              submitted ? 'bg-[#A3E635] text-[#244605]' : 'bg-[#CDB4F6] hover:bg-[#bfa3eb] text-white'
            }`}
          >
            {submitted ? '✓ Pedido Gerado! Envie a foto anexada no chat do WhatsApp' : 'Enviar Pedido para o WhatsApp'}
          </button>
          
          {submitted && (
            <p className="text-xs text-center text-[#4A3E3D]/80 mt-2 bg-[#A3E635]/20 p-2 rounded-lg animate-pulse">
              💡 <strong>Não se esqueça:</strong> Ao abrir o WhatsApp, clique no ícone de clipe/mais e envie a foto selecionada para o Ateliê!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}