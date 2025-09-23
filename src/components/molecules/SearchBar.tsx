import Input from "../atoms/Input";
// import Icon from "../atoms/Icon";
import { Search } from "lucide-react";
import type { SearchBarProps } from "../../props/SearchBarProps";


export default function SearchBar({ 
  value, 
  onChange 
}: SearchBarProps) {
	return (
		<div className="p-2 border-b border-gray-700">
			<Input
				placeholder="Buscar arquivos..."
				value={value}
				onChange={onChange}
				icon={Search}
			/>
    	</div>
  	);
}