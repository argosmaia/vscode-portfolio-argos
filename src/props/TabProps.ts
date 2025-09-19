import type { FileNode } from "./FileNode";

export interface TabProps {
  arquivo: FileNode;
  estaAtivo: boolean;
  estaSelecionado: (arquivo: FileNode) => void;
  estaFechado: (arquivo: FileNode) => FileNode | null;
}
