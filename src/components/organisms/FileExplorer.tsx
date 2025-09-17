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
        name: 'src',
        type: 'folder',
        children: [
            {
            name: 'components',
            type: 'folder',
            children: [
                { name: 'Design.tsx', type: 'file', icon: '⚛️' },
                { name: 'Codigos.tsx', type: 'file', icon: '⚛️' },
                { name: 'Projetos.tsx', type: 'file', icon: '⚛️' },
                { name: 'Sobre.tsx', type: 'file', icon: '⚛️' },
                { name: 'Contato.tsx', type: 'file', icon: '⚛️' }
            ]
            },
            {
            name: 'assets',
            type: 'folder',
            children: [
                { name: 'images', type: 'folder', children: [] },
                { name: 'styles', type: 'folder', children: [] }
            ]
            },
            { name: 'App.tsx', type: 'file', icon: '⚛️' },
            { name: 'main.tsx', type: 'file', icon: '⚛️' }
        ]
        },
        { name: 'package.json', type: 'file', icon: '📦' },
        { name: 'tsconfig.json', type: 'file', icon: '🔧' },
        { name: 'tailwind.config.js', type: 'file', icon: '🎨' },
        { name: 'README.md', type: 'file', icon: '📝' }
    ];

    const mudarPasta = (nomePasta: string) => {
        setPastasExpandidas(pastaAnterior =>
            pastaAnterior.includes(nomePasta)
                ? pastaAnterior.filter(arquivo => arquivo !== nomePasta)
                : [...pastaAnterior, nomePasta]
        );
    };

    const renderizaArquivos = (arquivos: FileNode, level = 0) => {
        const expandido = pastasExpandidas.includes(arquivos.name);
        const selecionado = arquivoAtual === arquivos.name;
        
        if(arquivos.type == "folder") {
            return(
                <FolderItem
                    key={arquivos.name}
                    folder={arquivos}
                    level={level}
                    isExpanded={expandido}
                    isSelected={selecionado}
                    onToggle={mudarPasta}
                />
            );
        };

        return (
            <FileItem
                key={arquivos.name}
                file={arquivos}
                level={level}
                isSelected={selecionado}
                onSelect={arquivoSelecionado}
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