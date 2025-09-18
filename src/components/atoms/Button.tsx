import type { ButtonProps } from "../../props/ButtonProps";

export default function Button({
    children,
    onClick,
    className='',
    variante='default'
}: ButtonProps) {
    const baseClasses = 'inline-flex items-center justify-center transition-colors';

    const variantes = {
        default: 'hover:bg-gray-700',
        ghost: 'hover:bg-gray-700/50',
        icon: 'w-8 h-8 hover:bg-gray-700/50'
    };

    return(
        <button
            className={`${baseClasses} ${variantes[variante]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}