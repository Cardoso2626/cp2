import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'data', 'avaliacoes.json');

interface Avaliacao {
    id: number;
    nome: string;
    nota: number;
}

const lerAvaliacoes = (): Avaliacao[] => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Erro ao ler o arquivo JSON:", error);
        return [];
    }
};

const salvarAvaliacoes = (avaliacoes: Avaliacao[]) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(avaliacoes, null, 2));
    } catch (error) {
        console.error("Erro ao salvar o arquivo JSON:", error);
    }
};

export async function GET() {
    const avaliacoes = lerAvaliacoes();
    return NextResponse.json(avaliacoes);
}

export async function POST(request: Request) {
    const novaAvaliacao = await request.json();
    const avaliacoes = lerAvaliacoes();
    const novaEntrada = { ...novaAvaliacao, id: avaliacoes.length ? avaliacoes[avaliacoes.length - 1].id + 1 : 1 };
    avaliacoes.push(novaEntrada);
    salvarAvaliacoes(avaliacoes);
    return NextResponse.json(novaEntrada, { status: 201 });
}

export async function PUT(request: Request) {
    const { id, ...rest } = await request.json();
    const avaliacoes = lerAvaliacoes();
    const index = avaliacoes.findIndex((avaliacao) => avaliacao.id === id);
    if (index === -1) {
        return NextResponse.json({ message: 'Avaliação não encontrada' }, { status: 404 });
    }
    avaliacoes[index] = { ...avaliacoes[index], ...rest };
    salvarAvaliacoes(avaliacoes);
    return NextResponse.json({ message: 'Avaliação atualizada' });
}

export async function DELETE(request: Request) {
    const { id } = await request.json();
    let avaliacoes = lerAvaliacoes();
    avaliacoes = avaliacoes.filter((avaliacao) => avaliacao.id !== id);
    salvarAvaliacoes(avaliacoes);
    return NextResponse.json({ message: 'Avaliação removida' });
}
