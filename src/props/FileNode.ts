export interface FileNode {
  name: string;
  type: "file" | "folder";
  icon?: string;
  children?: FileNode[];
}