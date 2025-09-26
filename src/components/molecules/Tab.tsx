import Icon from "../atoms/Icon";
import Button from "../atoms/Button";
import { File, X } from "lucide-react";
import type { TabProps } from "../../props/TabProps";

export default function Tab({ arquivo, estaAtivo, estaSelecionado, estaFechado}: TabProps) {
  	return (
		<div
			className={`flex items-center px-3 py-2 border-r border-gray-700 cursor-pointer select-none ${
				estaAtivo 
				? 'bg-gray-800 border-t-2 border-t-blue-500' 
				: 'bg-gray-900 hover:bg-gray-800'
			}`}
			onClick={() => estaSelecionado(arquivo)}
		>
			<Icon icon={File} tamanho={14} className="mr-2" />
			
			<span className="text-sm text-gray-200 mr-2">{arquivo.nome}</span>
			<Button
			variante="icon"
			className="w-4 h-4 ml-auto hover:bg-gray-600 rounded"
			onClick={(e) => {
				e.stopPropagation();
				estaFechado(arquivo);
			}}
			>
			<Icon icon={X} tamanho={12} />
			</Button>
      </div>
    );
}
