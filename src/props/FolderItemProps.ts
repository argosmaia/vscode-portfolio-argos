import type { FileNode } from "./FileNode";

export interface FolderItemProps {
	pasta: FileNode;
	nivel: number; // index-árvore para decidir onde você tá no arquivo
	estaExpandido: boolean;
	selecionado: boolean;
	onToggle: (folderName: string) => void;
	className?: string;
}