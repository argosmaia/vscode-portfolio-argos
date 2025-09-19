export interface TabBarProps {
    
    arquivosAbertos: string[];
    arquivoAtivo: string | null;
    estaSelecionado: (arquivo: string) => void;
    estaFechado: (arquivo: string) => string | null;
}