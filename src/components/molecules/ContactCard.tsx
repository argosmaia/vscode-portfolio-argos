import { Contact } from "lucide-react";
import Icon from "../atoms/Icon";
import type { ContactProps } from "../../props/ContactProps";

export function ContactCard({titulo, descricao, onClick }: ContactProps) {
  return (
    <div 
      className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
        <span className="text-xl"><Icon icon={Contact} tamanho={12}/></span>
      </div>
      <div>
        <h3 className="font-semibold">{titulo}</h3>
        <p className="text-gray-400">{descricao}</p>
      </div>
    </div>
  );
}