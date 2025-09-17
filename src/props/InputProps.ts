export interface InputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: "text" | "email" | "password" | string;
    className: string;
}