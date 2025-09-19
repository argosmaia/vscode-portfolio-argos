import type { FileNode } from "./FileNode";

export interface LayoutProps {
  arquivosAbertos: FileNode[];
  arquivoAtivo: string | null;
  arquivoSelecionado: (arquivo: FileNode) => void;
  arquivoFechar: (arquivo: FileNode) => FileNode | null;
}
