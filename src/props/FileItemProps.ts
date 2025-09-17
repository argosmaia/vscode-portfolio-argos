export interface FileItemProps {
    file: {
        name: string;
        icon?: string;
    };
    level: number;
    isSelected: boolean;
    onSelect: (fileName: string) => void;
}