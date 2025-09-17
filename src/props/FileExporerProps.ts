export interface FileExplorerProps {
    arquivoAtual: string;
    arquivoSelecionado: (arquivo: string) => void;
    procurar: (termo: string) => void;
    procurandoTermo: string;
}