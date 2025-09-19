import type { FileNode } from "./FileNode";

export interface TabBarProps {
  arquivosAbertos: FileNode[];
  arquivoAtivo: string | null; // ✅ corrigido
  estaSelecionado: (arquivo: FileNode) => void;
  estaFechado: (arquivo: FileNode) => FileNode | null;
}
