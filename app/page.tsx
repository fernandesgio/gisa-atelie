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
        <ProductCatalog />
        <CustomOrderForm />

        {/* Seção Sobre Nós com o Selo Oficial Corrigido */}
        <section id="sobre" className="py-16 px-4 max-w-4xl mx-auto text-center">
          <div className="bg-[#F8B8D0]/10 rounded-3xl p-8 border border-[#F8B8D0]/30 flex flex-col md:flex-row items-center gap-8 text-left">
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-[#4A3E3D]">Sobre o Ateliê</h3>
              <p className="text-base text-[#4A3E3D]/80 leading-relaxed">
                O <strong>gisa ateliê</strong> nasceu da paixão por pixel art e artesanato. Cada peça é produzida manualmente com atenção milimétrica aos detalhes para transformar personagens, memórias e ideias em arte durável através das pequenas contas de Hama Beads.
              </p>
            </div>
            {/* Removido o hidden para o selo aparecer em todos os dispositivos */}
            <div className="w-40 h-40 flex-shrink-0 bg-white p-2 rounded-full shadow-sm border border-[#F8B8D0]/20 mx-auto md:mx-0 order-1 md:order-2 flex items-center justify-center overflow-hidden">
              <img src="/selo.png" alt="Selo Gisa Ateliê" className="w-full h-full object-contain" />
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
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
            <a href="https://wa.me/seu-numero" target="_blank" rel="noopener noreferrer" className="hover:text-[#CDB4F6] transition-colors">
              💬 WhatsApp
            </a>
          </div>
          
          <div className="flex flex-col md:items-end gap-2 text-xs text-[#FFF9F4]/70">
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <a href="#" className="hover:underline">Trocas e Devoluções</a>
          </div>
        </div>
        <div className="text-center text-xs text-[#FFF9F4]/40 mt-8 pt-4 border-t border-[#FFF9F4]/10">
          © {new Date().getFullYear()} Gisa Ateliê. Feito com ❤️ por vocês.
        </div>
      </footer>
    </div>
  );
}