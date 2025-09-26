import type React from "react";

export interface ProjectCardProps {
    titulo: React.ReactNode;
    descricao: string;
    tecnologias: string | React.ReactNode;
    acoes?: React.ReactNode;
}