import type { FileNode } from "./FileNode";

export interface FileExplorerProps {
    arquivoAtual: FileNode | null;
    arquivoSelecionado: (arquivo: FileNode) => void;
    procurar: (termo: string) => void;
    procurandoTermo: string;
}