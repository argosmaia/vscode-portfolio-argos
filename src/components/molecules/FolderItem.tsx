import { Folder, FolderOpen } from "lucide-react";
import type { FolderItemProps } from "../../props/FolderItemProps";
import Icon from "../atoms/Icon";
import FileItem from "./FileItem";

export default function FolderItem({
  pasta,
  nivel,
  estaExpandido,
  selecionado,
  onToggle
}: FolderItemProps) {
  return (
    <div>
      {/* Linha da pasta */}
      <div
        className={`flex items-center py-1 px-2 hover:bg-gray-700/50 cursor-pointer select-none ${
          selecionado ? "bg-gray-600" : ""
        }`}
        style={{ paddingLeft: `${nivel * 12 + 8}px` }}
        onClick={() => onToggle(pasta.nome)}
      >
        <Icon icon={estaExpandido ? FolderOpen : Folder} tamanho={14} />
        <span className="ml-2 text-sm text-gray-200">{pasta.nome}</span>
      </div>

      {/* Renderiza filhos se expandido */}
      {estaExpandido &&
        pasta.children?.map((child) =>
          child.tipo === "folder" ? (
            <FolderItem
              key={child.nome}
              pasta={child}
              nivel={nivel + 1}
              estaExpandido={false}   // ⚠️ Aqui você precisa passar o estado real (ex: pastasExpandidas.includes(child.nome))
              selecionado={selecionado}
              onToggle={onToggle}
            />
          ) : (
            <FileItem
              key={child.nome}
              arquivo={child}
              nivel={nivel + 1}
              estaSelecionado={selecionado}
              selecionado={() => onToggle(child.nome)} // ⚠️ Nome do prop era "onSelect", não "selecionado"
            />
          )
        )}
    </div>
  );
}
