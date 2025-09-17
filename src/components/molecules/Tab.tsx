import Icon from "../atoms/Icon";
import Button from "../atoms/Button";
import { File, X } from "lucide-react";
import type { TabProps } from "../../props/TabProps";

export default function Tab({ file, isActive, onSelect, onClose }: TabProps) {
  return (
    <div
      className={`flex items-center px-3 py-2 border-r border-gray-700 cursor-pointer select-none ${
        isActive
          ? "bg-gray-800 border-t-2 border-t-blue-500"
          : "bg-gray-900 hover:bg-gray-800"
      }`}
      onClick={() => onSelect(file)}
    >
      <Icon icon={File} size={14} className="mr-2" />
      <span className="text-sm text-gray-200 mr-2">{file}</span>
      <Button
        variante="icon"
        className="w-4 h-4 ml-auto hover:bg-gray-600 rounded"
        onClick={(e) => {
          e.stopPropagation();
          onClose(file);
        }}
      >
        <Icon icon={X} size={12} />
      </Button>
    </div>
  );
}
