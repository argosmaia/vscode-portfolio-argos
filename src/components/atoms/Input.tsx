import { Parentheses } from "lucide-react";
import type { InputProps } from "../../props/InputProps";
import Icon from "./Icon";

export default function Input({
  value,
  onChange,
  placeholder = "",
  className = "",
  type = "text"
}: InputProps) {
  	return (
		  <div className="relative">
			{Parentheses && (
				<Parentheses size={14} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
			  )}
			<input
				type={type}
				value={value}
				placeholder={placeholder}
				className={`w-full bg-gray-800 border border-gray-600 rounded px-3 py-1 text-sm text-gray-200 focus:outline-none focus:border-blue-500 ${
					Icon !== undefined ? "pl-6" : ""
				} ${className}`}
				onChange={(e) => onChange(e.target.value)}
      		/>
		</div>
  	);
}
