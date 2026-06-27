'use client';

import React from 'react';
import Link from 'next/link';

export default function TrocasEDevolucoes() {
  return (
    <main className="min-h-screen bg-[#FFF9F4] text-[#4A3E3D] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-[#F8B8D0]/30 shadow-sm">
        
        <Link href="/" className="text-xs font-bold text-[#f274a4] hover:underline mb-6 inline-block">
          ← Voltar para a Home
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-[#4A3E3D]">Política de Trocas e Devoluções</h1>
        <p className="text-sm text-[#4A3E3D]/80 mb-6">
          No <strong>Gisa Ateliê</strong>, cada peça em Hama Beads é produzida à mão, pixel por pixel, com muito carinho. Para garantir a sua transparência e satisfação, nossa política é baseada no Código de Defesa do Consumidor.
        </p>

        <div className="space-y-6 text-sm text-[#4A3E3D]/90">
          <section>
            <h2 className="text-lg font-bold mb-2 text-[#7a59b0]">1. Peças Personalizadas (Sob Encomenda)</h2>
            <p>
              Por se tratarem de produtos customizados e fabricados estritamente sob as especificações enviadas pelo cliente (como fotos de pets ou designs específicos), <strong>não realizamos trocas ou devoluções por arrependimento de compra</strong> após o início da produção da peça.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-[#7a59b0]">2. Danos no Transporte ou Defeitos de Fabricação</h2>
            <p>
              Caso a sua peça sofra algum dano durante o envio ou apresente alguma desconformidade com o projeto aprovado:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Entre em contato conosco via WhatsApp em até <strong>7 (sete) dias corridos</strong> após o recebimento.</li>
              <li>Envie uma foto ou vídeo nítido demonstrando o estado do produto.</li>
              <li>Sendo constatado o dano, providenciaremos a confecção e o reenvio de uma nova peça sem custos adicionais.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-[#7a59b0]">3. Cuidados Especiais com Hama Beads</h2>
            <p className="bg-[#FFF9F4] p-4 rounded-xl border-l-4 border-[#f274a4] text-xs">
              <strong>Atenção:</strong> As peças em Hama Beads são fundidas através de calor e possuem flexibilidade limitada. Quebras decorrentes de quedas, pressão excessiva, exposição ao calor extremo ou mau uso não são cobertas pela garantia de troca.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}