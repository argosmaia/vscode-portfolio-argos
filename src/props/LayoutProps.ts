import type { ReactNode } from "react";
import type { FileNode } from "./FileNode";

export interface LayoutProps {
  arquivosAbertos: FileNode[];
  arquivoAtivo: string | null;
  arquivoSelecionado: (arquivo: FileNode | null) => void;
  arquivoFechar: (arquivo: FileNode) => FileNode | null;
  children?: ReactNode;
}
