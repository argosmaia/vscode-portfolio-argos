import type { FileNode } from "./FileNode";

export interface FolderItemProps {
  folder: FileNode;
  level: number; // index-árvore para decidir onde você tá no arquivo
  isExpanded: boolean;
  isSelected: boolean;
  onToggle: (folderName: string) => void;
}