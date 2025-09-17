import { Folder, FolderOpen } from "lucide-react";
import type { FolderItemProps } from "../../props/FolderItemProps";
import Icon from "../atoms/Icon";
import FileItem from "./FileItem";

export default function FolderItem({
    folder,
    level,
    isExpanded,
    isSelected,
    onToggle
}: FolderItemProps ) {
    return(
        <div>
            <div
                className={`flex items-center py-1 px-2 hover:bg-gray-700/50 cursor-pointer select-none ${
                isSelected ? "bg-gray-600" : ""
                }`}
                style={{ paddingLeft: `${level * 12 + 8}px` }}
                onClick={() => onToggle(folder.name)}
            >
                <Icon icon={isExpanded ? FolderOpen : Folder} size={14} />
                <span className="ml-2 text-sm text-gray-200">{folder.name}</span>
            </div>

            {isExpanded &&
                folder.children?.map((child) =>
                child.type === "folder" ? (
                    <FolderItem
                        key={child.name}
                        folder={child}
                        level={level + 1}
                        isExpanded={false}
                        isSelected={isSelected}
                        onToggle={onToggle}
                    />
                ) : (
                    <FileItem
                        key={child.name}
                        file={child}
                        level={level + 1}
                        isSelected={isSelected}
                        onSelect={() => onToggle(child.name)}
                    />
                )
                )}
        </div>
    );
}