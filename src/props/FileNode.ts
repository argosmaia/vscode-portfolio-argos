export interface FileNode {
  nome: string;
  tipo: "file" | "folder";
  icon?: string;
  children?: FileNode[];
}