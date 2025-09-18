import type { FileNode } from "./FileNode";

export interface TabBarProps {
    arquivosAbertos: FileNode[];
    arquivoAtivo: string | null;
    selecionado: (arquivo: FileNode) => void;
    onClose: (arquivo: FileNode) => void;    
}