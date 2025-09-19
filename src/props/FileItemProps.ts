export interface FileItemProps {
    arquivo: {
        nome: string;
        icon?: string;
    };
    nivel: number;
    estaSelecionado: boolean;
    selecionado: (arquivoNome: string) => void;
}