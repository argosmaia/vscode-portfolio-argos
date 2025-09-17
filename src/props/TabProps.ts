export interface TabProps {
    file: string;
    isActive: boolean;
    onSelect: (file: string) => void;
    onClose: (file: string) => void;
}