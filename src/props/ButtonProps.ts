import type React from "react";

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    variante?: "default" | "ghost" | "icon";
}