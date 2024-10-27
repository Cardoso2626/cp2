"use client";

import { useEffect, useState } from "react";
import { fetchAvaliacoes, adicionarAvaliacao, atualizarAvaliacao, removerAvaliacao, Avaliacao } from "../../services/avaliacoesService";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importa os ícones de edição e remoção

export default function Avaliacoes() {
    const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
    const [novaAvaliacao, setNovaAvaliacao] = useState<Avaliacao>({ id: undefined, nome: '', materia: '', tipo: '', nota: 0 });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [avaliacaoSelecionada, setAvaliacaoSelecionada] = useState<Avaliacao | null>(null);

    const carregarAvaliacoes = async () => {
        try {
            const data = await fetchAvaliacoes();
            setAvaliacoes(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAdicionarAvaliacao = async () => {
        try {
            const nova = await adicionarAvaliacao(novaAvaliacao);
            setAvaliacoes([...avaliacoes, nova]);
            setNovaAvaliacao({ id: undefined, nome: '', materia: '', tipo: '', nota: 0 });
        } catch (error) {
            console.error(error);
        }
    };

    const handleEditarAvaliacao = (id: number) => {
        const avaliacaoParaEditar = avaliacoes.find(avaliacao => avaliacao.id === id);
        if (avaliacaoParaEditar) setNovaAvaliacao(avaliacaoParaEditar);
    };

    const handleAtualizarAvaliacao = async () => {
        if (novaAvaliacao.id !== undefined) {
            try {
                await atualizarAvaliacao(novaAvaliacao.id, novaAvaliacao);
                carregarAvaliacoes();
                setNovaAvaliacao({ id: undefined, nome: '', materia: '', tipo: '', nota: 0 });
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleRemoverAvaliacao = async (id: number) => {
        try {
            await removerAvaliacao(id);
            setAvaliacoes(avaliacoes.filter(avaliacao => avaliacao.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const abrirModal = (avaliacao: Avaliacao) => {
        setAvaliacaoSelecionada(avaliacao);
        setIsModalOpen(true);
    };

    const fecharModal = () => {
        setAvaliacaoSelecionada(null);
        setIsModalOpen(false);
    };

    useEffect(() => {
        carregarAvaliacoes();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-white">Gerenciar Avaliações</h1>
            <div className="flex items-center space-x-2 mb-4">
                {/* Select para nomes dos alunos */}
                <select
                    value={novaAvaliacao.nome}
                    onChange={(e) => setNovaAvaliacao({ ...novaAvaliacao, nome: e.target.value })}
                    className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Selecione o Aluno</option>
                    <option value="João Silva">João Silva</option>
                    <option value="Maria Souza">Maria Souza</option>
                    <option value="Carlos Pereira">Carlos Pereira</option>
                </select>

                {/* Select para matérias */}
                <select
                    value={novaAvaliacao.materia}
                    onChange={(e) => setNovaAvaliacao({ ...novaAvaliacao, materia: e.target.value })}
                    className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Selecione a Matéria</option>
                    <option value="AI & Chatbot">AI & Chatbot</option>
                    <option value="Building Relational Database">Building Relational Database</option>
                    <option value="Computational Thinking Using Python">Computational Thinking Using Python</option>
                    <option value="Domain Driven Design Using Java">Domain Driven Design Using Java</option>
                    <option value="Front-End Design Engineering">Front-End Design Engineering</option>
                    <option value="Software Engineering & Business Model">Software Engineering & Business Model</option>
                </select>

                {/* Select para tipo de avaliação */}
                <select
                    value={novaAvaliacao.tipo}
                    onChange={(e) => setNovaAvaliacao({ ...novaAvaliacao, tipo: e.target.value })}
                    className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Selecione a Avaliação</option>
                    <option value="CP 1">CP 1</option>
                    <option value="CP 2">CP 2</option>
                    <option value="CP 3">CP 3</option>
                </select>

                {/* Campo de Nota */}
                <input
                    placeholder="Nota"
                    type="number"
                    value={novaAvaliacao.nota}
                    onChange={(e) => setNovaAvaliacao({ ...novaAvaliacao, nota: parseFloat(e.target.value) })}
                    className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <button
                    onClick={novaAvaliacao.id ? handleAtualizarAvaliacao : handleAdicionarAvaliacao}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
                >
                    {novaAvaliacao.id ? "Atualizar Avaliação" : "Adicionar Avaliação"}
                </button>
            </div>

            <table className="min-w-full bg-gray-800 text-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-700">
                        <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wide">Aluno</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wide">Matéria</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wide">Avaliação</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wide">Nota</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wide">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {avaliacoes.map((avaliacao, index) => (
                        <tr key={avaliacao.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'} hover:bg-gray-600 transition duration-200`}>
                            <td className="py-3 px-4">{avaliacao.nome}</td>
                            <td className="py-3 px-4">{avaliacao.materia}</td>
                            <td className="py-3 px-4">{avaliacao.tipo}</td>
                            <td className="py-3 px-4">{avaliacao.nota}</td>
                            <td className="py-3 px-4 flex space-x-4">
                                <button onClick={() => handleEditarAvaliacao(avaliacao.id!)} className="text-blue-400 hover:text-blue-300 font-semibold transition duration-300 flex items-center space-x-1">
                                    <FaEdit />
                                    <span>Editar</span>
                                </button>
                                <button onClick={() => handleRemoverAvaliacao(avaliacao.id!)} className="text-red-400 hover:text-red-300 font-semibold transition duration-300 flex items-center space-x-1">
                                    <FaTrashAlt />
                                    <span>Remover</span>
                                </button>
                                <button onClick={() => abrirModal(avaliacao)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300">
                                    Ver Detalhes
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal para exibir detalhes */}
            {isModalOpen && avaliacaoSelecionada && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-black w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Detalhes da Avaliação</h2>
                        <p><strong>Aluno:</strong> {avaliacaoSelecionada.nome}</p>
                        <p><strong>Matéria:</strong> {avaliacaoSelecionada.materia}</p>
                        <p><strong>Avaliação:</strong> {avaliacaoSelecionada.tipo}</p>
                        <p><strong>Nota:</strong> {avaliacaoSelecionada.nota}</p>
                        <p><strong>Feedback:</strong></p>
                        <button onClick={fecharModal} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300">Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
