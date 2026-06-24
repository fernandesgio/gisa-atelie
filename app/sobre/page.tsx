'use client';

import React from 'react';
import Header from '../../components/Header';

export default function SobrePage() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#4A3E3D]">
      <Header />
      
      <main className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
        <div className="bg-[#F8B8D0]/10 rounded-[2.5rem] p-8 md:p-12 border border-[#F8B8D0]/30 shadow-sm">
          
          {/* Cabeçalho do Sobre */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#4A3E3D] mb-4">A História do Gisa Ateliê</h2>
            <p className="text-sm md:text-base text-[#4A3E3D]/80 max-w-2xl mx-auto">
              Muito mais que pixel art, uma história de amor, arte e doze patinhas!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start text-left">
            
            {/* Coluna da História */}
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#4A3E3D] mb-2 flex items-center gap-2">
                  <span>✨</span> Como tudo começou?
                </h3>
                <p className="text-[#4A3E3D]/80 leading-relaxed text-sm md:text-base">
                  Você deve estar se perguntando: <em>"De onde vem o nome Gisa?"</em>. A resposta está na união de duas paixões e duas pessoas: <strong>Gi</strong>ovanna e I<strong>sa</strong>dora. 
                </p>
              </div>
              
              <p className="text-[#4A3E3D]/80 leading-relaxed text-sm md:text-base">
                A <strong>Isadora</strong> sempre teve mãos mágicas para criar. De pulseiras de miçangas a peças de cerâmica fria, a arte sempre foi seu hobby. Quando conheceu os <em>Hama Beads</em>, ela (que ama um desafio) percebeu que poderia ir além, criando peças gigantes e elaboradamente detalhadas.
              </p>

              <p className="text-[#4A3E3D]/80 leading-relaxed text-sm md:text-base">
                Do outro lado tem a <strong>Giovanna</strong>. Embora ame bordado ponto cruz e botânica, seu foco é 100% em Tecnologia da Informação. Ao ver o talento da esposa, ela uniu seus conhecimentos para programar e construir este site do zero. O objetivo? Criar um espaço perfeito para que a Isa pudesse expressar e vender a sua arte feita com muito carinho ❤️
              </p>
            </div>

            {/* Coluna do Selo e Pets */}
            <div className="w-full lg:w-96 flex flex-col items-center">
              {/* Selo Centralizado */}
              <div className="w-40 h-40 bg-white p-2 rounded-full shadow-md border border-[#F8B8D0]/30 flex items-center justify-center overflow-hidden mb-8 transform hover:scale-105 transition-transform duration-300">
                <img src="/selo.png" alt="Selo Gisa Ateliê" className="w-full h-full object-contain" />
              </div>

              {/* Apresentação dos Pets */}
              <div className="bg-white/60 p-6 rounded-3xl border border-[#F8B8D0]/20 w-full">
                <h4 className="font-bold text-[#4A3E3D] text-center mb-4 text-sm uppercase tracking-wider">
                  As inspirações da nossa logo
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="text-xl">🐶</span>
                    <div>
                      <p className="font-bold text-[#4A3E3D] text-sm">Guarani</p>
                      <p className="text-xs text-[#4A3E3D]/70 leading-snug">Nosso primogênito! Um pretinho com cara de bravo, mas puro charme. Serelepe, dono de uma energia infinita pra correr e cavar o quintal.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-xl">🐾</span>
                    <div>
                      <p className="font-bold text-[#4A3E3D] text-sm">Yara</p>
                      <p className="text-xs text-[#4A3E3D]/70 leading-snug">A filha do meio (e a mais carente). Dá MUITOS beijos nas mamães e, de tanta empolgação, chega a fazer "xixis de felicidade" quando recebe visitas!</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-xl">🐱</span>
                    <div>
                      <p className="font-bold text-[#4A3E3D] text-sm">Dallas</p>
                      <p className="text-xs text-[#4A3E3D]/70 leading-snug">A caçulinha felina. É curiosa, bota ordem nos irmãos e vive dividida entre o colinho quentinho da Isa e as brincadeiras brutas com a Gi.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Rodapé Simplificado para a Página Institucional */}
      <footer className="bg-[#4A3E3D] text-[#FFF9F4] py-10 px-4 text-sm border-t-4 border-[#F8B8D0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <h4 className="font-bold text-lg mb-2">gisa ateliê</h4>
            <p className="text-[#FFF9F4]/70 text-xs">Pixels que conectam, detalhes que encantam.</p>
          </div>
          <div className="flex justify-center gap-6 font-semibold">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F8B8D0] transition-colors">📸 Instagram</a>
            <a href="https://wa.me/5511958935029" target="_blank" rel="noopener noreferrer" className="hover:text-[#CDB4F6] transition-colors">💬 WhatsApp</a>
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