// pages/challenges-sprint.js
"use client";

import React, { useState } from 'react';

const ChallengesSprint = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const materia = [
    {
      nome: 'Artificial Intelligence e Chatbot',
      professor: 'Elton Ogoshi',
      entregaveis: [
        {
          content: 'Coleta e tratamento de dados com Kanggle',
          date: '2023-11-04',
          feedback: 'Gostei da avaliação que foi feita alunos! Parabéns!',
          grade: 100,
          entrega: 'Os alunos devem realizar a coleta e o tratamento de dados utilizando a plataforma Kanggle. A entrega deve incluir uma análise detalhada dos dados coletados, explicando as metodologias empregadas e os resultados obtidos, com um foco especial na aplicabilidade das informações para o desenvolvimento de chatbots. Além disso, devem apresentar uma documentação que descreva o processo e os aprendizados adquiridos durante a atividade.'
        },
      ],
    },
    {
      nome: 'Building Relational Database',
      professor: 'Francisco Douglas',
      entregaveis: [
        {
          content: 'Conexão da API com banco de dados oracle',
          date: '2023-11-04',
          feedback: 'Boa coleta de dados. Faltou mais selects com join',
          grade: 85,
          entrega:'Os alunos devem conectar uma API a um banco de dados Oracle, demonstrando a integração de dados e a funcionalidade do sistema. A entrega deve incluir um relatório detalhado que explique as consultas realizadas, incluindo o uso de joins, e as justificativas para a estruturação do banco de dados. É importante apresentar gráficos que ilustrem a relação entre as tabelas, bem como a análise da eficiência das consultas realizadas.'
        },
      ],
    },
    {
      nome: 'Computational Thinking Using Python',
      professor: 'Alberto Messias',
      entregaveis: [
        {
          content: 'Trabalho com api IA META e dados em json',
          date: '2023-11-04',
          feedback: 'Api bem desenvolvida, senti falta de mais dados.',
          grade: 90,
          entrega: 'Os alunos devem desenvolver um projeto utilizando a API IA META e trabalhar com dados em formato JSON. A entrega deve incluir um código bem documentado e uma explicação sobre como a API foi utilizada para manipular e analisar os dados. Além disso, é necessário apresentar exemplos práticos de como os dados foram extraídos e utilizados, bem como uma análise crítica sobre os resultados obtidos e a eficiência do código.'
        },
      ],
    },
    {
      nome: 'Domain Driven Design Using Java',
      professor: 'Eduardo Gondo',
      entregaveis: [
        {
          content: 'Construção da API e criar banco local em java',
          date: '2023-11-04',
          feedback: 'Faltou completar pagina homepage dentro da API.',
          grade: 80,
          entrega: 'O foco desta entrega é a construção de uma API e a criação de um banco de dados local em Java. Os alunos devem apresentar um projeto que demonstre a arquitetura da aplicação, incluindo o uso de princípios de Design Orientado a Domínio. A entrega deve incluir a documentação do código, explicando cada funcionalidade implementada, e um relatório sobre a estrutura do banco de dados, destacando as principais entidades e relacionamentos.'
        },
      ],
    },
    {
      nome: 'Front-End Design Engineering',
      professor: 'Alexandre Carlos',
      entregaveis: [
        {
          content: 'Criacao do site institucional com o Next.js',
          date: '2023-11-04',
          feedback: 'Site bem estruturado e com excelentes dados.',
          grade: 100,
          entrega: ' Os alunos devem criar um site institucional utilizando Next.js, focando na usabilidade e na experiência do usuário. A entrega deve incluir o código-fonte do projeto e uma análise do design, abordando aspectos como responsividade e acessibilidade. Além disso, os alunos devem apresentar uma documentação que descreva as tecnologias utilizadas, as decisões de design tomadas e os testes realizados para garantir a funcionalidade do site.'
        },
      ],
    },
    {
      nome: 'Software Engineering And Business Model',
      professor: 'Paulo Cesar',
      entregaveis: [
        {
          content: 'PDF com identidade da startup e detalhes chave',
          date: '2023-11-04',
          feedback: 'Revisão bem elaborada, mas com pontos a melhorar.',
          grade: 82,
          entrega: 'Os alunos devem elaborar um PDF que apresente a identidade visual da startup e os detalhes-chave do modelo de negócios. A entrega deve incluir uma descrição clara da proposta de valor, análise de mercado e concorrência, além de um plano financeiro básico. Os alunos devem explicar como a identidade visual se alinha com a estratégia da startup e apresentar uma análise SWOT que destaque os pontos fortes, fracos, oportunidades e ameaças do negócio.'
        },
      ],
    },
  ];

  const handleDeliveryClick = (delivery)  => {
    setSelectedDelivery(delivery);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDelivery(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">CHALLENGE SPRINT</h1>
      <div className="w-full h-0.5 bg-red-500 mb-4"></div>
      <h2 className="text-xl font-semibold mb-4 text-white">DISCIPLINAS</h2>
      <ul className="list-disc pl-6 mb-6">
        {materia.map((materia, index) => (
          <li key={index}>
            {materia.nome} - <em>{materia.professor}</em>
            <table className="min-w-full bg-white border border-gray-300 mt-4 mb-6">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-black">Conteúdo</th>
                  <th className="border px-4 py-2 text-black">Data</th>
                  <th className="border px-4 py-2 text-black">Feedback</th>
                  <th className="border px-4 py-2 text-black">Nota</th>
                </tr>
              </thead>
              <tbody>
                {materia.entregaveis.map((delivery, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleDeliveryClick(delivery)}
                  >
                    <td className="border px-4 py-2 text-black">{delivery.content}</td>
                    <td className="border px-4 py-2 text-black">{delivery.date}</td>
                    <td className="border px-4 py-2 text-black">{delivery.feedback}</td>
                    <td className="border px-4 py-2 text-black">{delivery.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
            <h2 className="text-xl font-bold mb-4">Detalhes do Entregável</h2>
            {selectedDelivery && (
              <>
                <p className='mb-2'><strong>Conteúdo:</strong> {selectedDelivery.entrega}</p>
                <p className='mb-2'><strong>Feedback:</strong> {selectedDelivery.feedback}</p>
                <p><strong>Nota:</strong> {selectedDelivery.grade}</p>
              </>
            )}
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={closeModal}
            >Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengesSprint;
