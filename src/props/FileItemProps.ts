import type { FileNode } from "./FileNode";

export interface FileItemProps {
  arquivo: FileNode;
  nivel?: number;
  estaSelecionado: boolean;
  onClick: (arquivoNome: string) => void;
  expandido?: boolean;
  onToggle?: () => void;
}
