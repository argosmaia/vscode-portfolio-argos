import type { ReactNode } from "react";
import type { FileNode } from "./FileNode";

export interface LayoutProps {
  arquivosAbertos: FileNode[];
  arquivoAtivo: string | null;
  estaSelecionado: (arquivo: FileNode) => void;
  estaFechado: (arquivo: FileNode) => void;
  children?: ReactNode;
}
