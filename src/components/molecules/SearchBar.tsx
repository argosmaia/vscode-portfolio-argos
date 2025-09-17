import React from "react";
import Input from "../atoms/Input";
import Icon from "../atoms/Icon";
import { Search } from "lucide-react";
import type { SearchBarProps } from "../../props/SearchBarProps";


export default function SearchBar({ 
  value, 
  onChange 
}: SearchBarProps) {
  return (
    <div className="relative">
      <Icon
        icon={Search}
        size={14}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
      <Input
        value={value}
        onChange={onChange}
        placeholder="Buscar arquivos..."
        className="pl-7" // padding extra pra não sobrepor o ícone
      />
    </div>
  );
}