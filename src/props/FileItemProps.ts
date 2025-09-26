import type { FileNode } from "./FileNode";

export interface FileItemProps {
  arquivo: FileNode;
  nivel?: number;
  estaSelecionado: boolean;
  onClick: (arquivo: FileNode) => void;
  expandido?: boolean;
  onToggle?: () => void;
}