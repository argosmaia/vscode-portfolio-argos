import { File, Folder, FolderOpen } from "lucide-react";
import type { FileItemProps } from "../../props/FileItemProps";
import Icon from "../atoms/Icon";

export function FileItem({ arquivo, nivel = 0, estaSelecionado, onClick, expandido, onToggle }: FileItemProps) {
  const paddingLeft = nivel * 12 + 8;

  if (arquivo.tipo === 'folder') {
    return (
      <div key={arquivo.nome}>
        <div
          className={`flex items-center py-1 px-2 hover:bg-gray-700/50 cursor-pointer select-none ${
            estaSelecionado ? 'bg-gray-600' : ''
          }`}
          style={{ paddingLeft: `${paddingLeft}px` }}
          onClick={onToggle}
        >
          {expandido ? <Icon icon={FolderOpen} tamanho={14} /> : <Icon icon={Folder} tamanho={14} />}
          <span className="ml-2 text-sm text-gray-200">{arquivo.nome}</span>
        </div>
          {expandido && arquivo.children?.map(child => (
            <FileItem
              key={child.nome}
              arquivo={child}
              nivel={nivel + 1}
              estaSelecionado={false}
              onClick={onClick}
            />
          ))}
      </div>
    );
  }

  return (
	<div
		key={arquivo.nome}
		className={`flex items-center py-1 px-2 hover:bg-gray-700/50 cursor-pointer select-none ${
		estaSelecionado ? 'bg-gray-600' : ''
		}`}
		style={{ paddingLeft: `${paddingLeft}px` }}
		onClick={() => onClick(arquivo.nome)}
	>
      <Icon icon={File} tamanho={14} />
      <span className="ml-2 text-sm text-gray-200">{arquivo.nome}</span>
      <span className="ml-1 text-xs">{arquivo.icon}</span>
    </div>
  );
}