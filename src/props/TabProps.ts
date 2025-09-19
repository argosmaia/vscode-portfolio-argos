export interface TabProps {
    arquivo: string;
    estaAtivo: boolean;
    estaSelecionado: (arquivo: string) => void;
    estaFechado: (arquivo: string) => string | null;
}