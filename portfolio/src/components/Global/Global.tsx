"use client";

import React, { useState } from 'react';

const GlobalSolution = () => {
  const [entregavelAberto, setEntregavelAberto] = useState(null);

  const materias = [
    { 
        nome: 'AI & Chatbot', 
        nota: 85, 
        descricao: 'Desenvolvimento de um modelo de IA com base nos dados coletados previamente, implementando um modelo de machine learning que pode realizar classificação, regressão ou agrupamento, além de uma API REST que disponibiliza a solução para integração com o sistema. Documentação com análise de resultados e código completo em Python.', 
        feedback: 'O modelo foi treinado adequadamente e a API REST atende aos requisitos básicos. No entanto, a documentação da API poderia ser mais detalhada, e o modelo se beneficiaria de ajustes finos para otimização. Também seria interessante incluir testes adicionais para garantir a robustez.'
        },

    {
        nome: 'Building Relational Database', 
        nota: 75, 
        descricao: 'Implementação de scripts DDL e DML para estruturar e popular tabelas de dados, incluindo a criação de relatórios em SQL com consultas de classificação, funções numéricas e agrupamento. Entrega inclui relatórios detalhados com dados válidos para teste e scripts otimizados para análise e operações de banco de dados.', 
        feedback: 'A organização dos scripts foi eficiente, e os relatórios estavam bem elaborados, permitindo uma boa visualização dos dados. Contudo, alguns relatórios poderiam explorar consultas mais avançadas para aprofundar a análise dos dados e permitir insights mais ricos. A estruturação do banco está clara e bem documentada.'
    },

    { 
        nome: 'Computational Thinking Using Python', 
        nota: 90, 
        descricao: 'Desenvolvimento de um sistema CRUD em Python com integração ao banco de dados e consumo de uma API pública externa, permitindo operações de inserção, exclusão e consulta com exportação de dados em JSON. Estrutura de menu com submenus para acesso fácil e organização das funcionalidades de CRUD.', 
        feedback: ' A integração com o banco de dados e a API foi bem realizada e funcionou conforme esperado, mas faltou um tratamento de erros mais robusto, especialmente para lidar com exceções inesperadas. A exportação para JSON foi um diferencial, mas o sistema poderia ter validações mais rigorosas nas entradas.' 
    },

    { 
        nome: 'Domain Driven Design Using Java', 
        nota: 80, 
        descricao: ' Finalização do projeto Java com uma API RESTful para integrar o front-end, seguindo princípios do Domain Driven Design. Entrega inclui endpoints de CRUD, camada de serviço e modelagem de dados conforme regras de negócio, com boas práticas de desenvolvimento aplicadas e foco na integridade dos dados.', 
        feedback: 'A API RESTful estava bem desenvolvida, com endpoints funcionais e estrutura organizada para o front-end. O projeto seguiu boas práticas, mas faltou uma camada de segurança para validação de dados nas requisições mais sensíveis, o que agregaria mais segurança e confiabilidade à solução.' 
    },

    { 
        nome: 'Front-End Design Engineering', 
        nota: 88, 
        descricao: 'Conclusão do front-end com integração ao back-end via API REST, utilizando vite-react + Typescript. Projeto inclui deploy na plataforma Vercel, proporcionando URL de acesso público. Interface responsiva e componentização para garantir modularidade e facilidade de manutenção.', 
        feedback: 'O front-end foi bem projetado, com atenção à responsividade e uso adequado de rotas. A integração com o back-end via API foi funcional, mas alguns detalhes no design poderiam ser refinados para melhorar a experiência do usuário, como otimização de carregamento e correção de pequenas inconsistências visuais.' 
    },

    { 
        nome: 'Software Engineering & Business Model', 
        nota: 82, 
        descricao: 'Entrega final com uma apresentação para vender a solução proposta, incluindo um plano de negócios completo e revisado, precificação detalhada com análise de custos e um SLA que define métricas de qualidade e manutenção do projeto. A entrega visa apresentar a viabilidade e inovação da solução ao mercado e a investidores.', 
        feedback: 'A apresentação foi bem estruturada, com identidade visual forte e plano de negócios detalhado. No entanto, a análise de concorrência foi um pouco superficial, e faltou maior detalhamento nas métricas de SLA. A precificação foi bem explicada, mas poderia incluir estratégias de escalabilidade para a solução.' 
    },
  ];

  const toggleEntregavel = (index) => {
    setEntregavelAberto(entregavelAberto === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Global Solution</h1>
      <h2 className="text-xl font-semibold mb-4 text-red-500">Disciplinas</h2>
      <div className="space-y-4">
        {materias.map((materia, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg p-4 cursor-pointer shadow hover:shadow-lg transition-shadow hover:bg-red-50 hover:-translate-y-1"
            onClick={() => toggleEntregavel(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-black">{materia.nome}</span>
              <p className="text-red-600 font-bold">NOTA: {materia.nota}</p>
            </div>
            {entregavelAberto === index && (
              <div className="mt-2 p-2 bg-gray-100 rounded">
                <p className='mb-2'><strong>Descrição do Entregável:</strong> {materia.descricao}</p>
                <p><strong>Feedback:</strong> {materia.feedback}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalSolution;
