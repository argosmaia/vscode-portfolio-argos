import { Minus, Square, X } from "lucide-react";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

export function TitleBar() {
  return (
    <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="text-sm text-gray-300">Portfolio - Visual Studio Code</div>
      <div className="flex items-center space-x-1">
        <Button variante="icon"><Icon icon={Minus} tamanho={14} /></Button>
        <Button variante="icon"><Icon icon={Square} tamanho={12} /></Button>
        <Button variante="icon"><Icon icon={X} tamanho={14} /></Button>
      </div>
    </div>
  );
}