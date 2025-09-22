import { File } from "lucide-react";
import type { FileItemProps } from "../../props/FileItemProps";
import Icon from "../atoms/Icon";


export default function FileItem({ 
    arquivo, 
    nivel, 
    estaSelecionado, 
    selecionado 
}: FileItemProps) {
  return (
    <div
      className={`flex items-center py-1 px-2 hover:bg-gray-700/50 cursor-pointer select-none ${
        estaSelecionado ? "bg-gray-600" : ""
      }`}
      style={{ paddingLeft: `${nivel * 12 + 8}px` }}
      onClick={() => selecionado(arquivo.nome)}
    >
      <Icon icon={File} tamanho={14} />
      <span className="ml-2 text-sm text-gray-200">{arquivo.nome}</span>
      {arquivo.icon && <span className="ml-1 text-xs">{arquivo.icon}</span>}
    </div>
  );
}