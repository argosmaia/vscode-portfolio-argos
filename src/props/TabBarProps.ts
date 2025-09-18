export interface TabBarProps {
    arquivosAbertos: string[];
    arquivoAtivo: string | null;
    selecionado: (file: string) => void;
    onClose: (file: string) => void;    
}