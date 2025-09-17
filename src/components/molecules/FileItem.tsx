import { File } from "lucide-react";
import type { FileItemProps } from "../../props/FileItemProps";
import Icon from "../atoms/Icon";


export default function FileItem({ 
    file, 
    level, 
    isSelected, 
    onSelect 
}: FileItemProps) {
  return (
    <div
      className={`flex items-center py-1 px-2 hover:bg-gray-700/50 cursor-pointer select-none ${
        isSelected ? "bg-gray-600" : ""
      }`}
      style={{ paddingLeft: `${level * 12 + 8}px` }}
      onClick={() => onSelect(file.name)}
    >
      <Icon icon={File} size={14} />
      <span className="ml-2 text-sm text-gray-200">{file.name}</span>
      {file.icon && <span className="ml-1 text-xs">{file.icon}</span>}
    </div>
  );
}