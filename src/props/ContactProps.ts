export interface ContactProps {
    icon?: React.ReactNode;
    titulo: string;
    descricao: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}