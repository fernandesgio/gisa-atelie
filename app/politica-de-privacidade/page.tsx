'use client';

import React from 'react';
import Link from 'next/link';

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-[#FFF9F4] text-[#4A3E3D] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-[#F8B8D0]/30 shadow-sm">
        
        <Link href="/" className="text-xs font-bold text-[#f274a4] hover:underline mb-6 inline-block">
          ← Voltar para a Home
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-[#4A3E3D]">Política de Privacidade</h1>
        <p className="text-sm text-[#4A3E3D]/80 mb-6">
          A sua privacidade é extremamente importante para nós. Esta política explica como o <strong>Gisa Ateliê</strong> gerencia as informações coletadas na nossa plataforma em conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </p>

        <div className="space-y-6 text-sm text-[#4A3E3D]/90">
          <section>
            <h2 className="text-lg font-bold mb-2 text-[#7a59b0]">1. Coleta de Dados Mínima</h2>
            <p>
              Nosso site adota o princípio da minimização de dados. Nós não guardamos, coletamos ou armazenamos suas informações pessoais ou de contato em bancos de dados próprios ou servidores de terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-[#7a59b0]">2. Redirecionamento e Formulários</h2>
            <p>
              As informações preenchidas nos formulários de "Encomenda Personalizada" ou ao clicar em "Ver Detalhes" servem unicamente para estruturar uma mensagem de texto pré-formatada. No momento do envio, você é redirecionado de forma segura para o aplicativo do WhatsApp. O tratamento desses dados ocorre diretamente entre o cliente e o ateliê durante o atendimento comercial.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-[#7a59b0]">3. Uso de Imagens Enviadas</h2>
            <p>
              Qualquer imagem ou foto de referência enviada (como fotos de animais de estimação para chaveiros personalizados) será utilizada única e exclusivamente como guia artístico para a montagem dos blocos de pixel art, sendo descartada após a entrega do pedido, a menos que haja autorização explícita para divulgação nas nossas redes sociais.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}