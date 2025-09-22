import { useState } from "react";
import type { FileExplorerProps } from "../../props/FileExporerProps";
import type { FileNode } from "../../props/FileNode";
import FolderItem from "../molecules/FolderItem";
import FileItem from "../molecules/FileItem";
import SearchBar from "../molecules/SearchBar";

export default function FileExplorer({
    arquivoAtual,
    arquivoSelecionado,
    procurar,
    procurandoTermo
}: FileExplorerProps) {
    const [pastasExpandidas, setPastasExpandidas] = useState<string[]>(["src", "components"]);

    const estrutura: FileNode[] = [{
        nome: 'src',
        tipo: 'folder',
        children: [
            {
            nome: 'components',
            tipo: 'folder',
            children: [
                { nome: 'Design.tsx', tipo: 'file', icon: '⚛️' },
                { nome: 'Codigos.tsx', tipo: 'file', icon: '⚛️' },
                { nome: 'Projetos.tsx', tipo: 'file', icon: '⚛️' },
                { nome: 'Sobre.tsx', tipo: 'file', icon: '⚛️' },
                { nome: 'Contato.tsx', tipo: 'file', icon: '⚛️' }
            ]
            },
            {
            nome: 'assets',
            tipo: 'folder',
            children: [
                { nome: 'images', tipo: 'folder', children: [] },
                { nome: 'styles', tipo: 'folder', children: [] }
            ]
            },
            { nome: 'App.tsx', tipo: 'file', icon: '⚛️' },
            { nome: 'main.tsx', tipo: 'file', icon: '⚛️' }
        ]
        },
        { nome: 'package.json', tipo: 'file', icon: '📦' },
        { nome: 'tsconfig.json', tipo: 'file', icon: '🔧' },
        { nome: 'tailwind.config.js', tipo: 'file', icon: '🎨' },
        { nome: 'README.md', tipo: 'file', icon: '📝' }
    ];

    const mudarPasta = (nomePasta: string) => {
        setPastasExpandidas(pastaAnterior =>
            pastaAnterior.includes(nomePasta)
                ? pastaAnterior.filter(arquivo => arquivo !== nomePasta)
                : [...pastaAnterior, nomePasta]
        );
    };

    const renderizaArquivos = (arquivos: FileNode, nivel = 0) => {
        const expandido = pastasExpandidas.includes(arquivos.nome);
        const selecionado = arquivoAtual === arquivos.nome;
        
        if(arquivos.tipo == "folder") {
            return(
                <FolderItem
                    key={arquivos.nome}
                    pasta={arquivos}
                    nivel={nivel}
                    estaExpandido={expandido}
                    selecionado={selecionado}
                    onToggle={mudarPasta}
                />
            );
        };

        return (
            <FileItem
                key={arquivos.nome}
                arquivo={arquivos}
                nivel={nivel}
                estaSelecionado={selecionado}
                selecionado={arquivoSelecionado}
            />
        );
    }

    return (
        <div className="flex flex-col h-full">
            <div className="p-2 border-b border-gray-700">
                <SearchBar value={procurandoTermo} onChange={procurar} />
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="py-2">
                <div className="px-2 py-1 text-xs text-gray-400 uppercase tracking-wide">
                    EXPLORADOR
                </div>
                    {estrutura.map(arquivo => renderizaArquivos(arquivo))}
                </div>
            </div>
        </div>
    );
}