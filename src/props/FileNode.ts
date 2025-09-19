export type FileNode = {
  nome: string;
  tipo: "file" | "folder";
  icon?: string;
  children?: FileNode[];
}