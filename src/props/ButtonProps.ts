export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variante?: "default" | "ghost" | "icon";
}