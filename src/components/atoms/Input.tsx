import type { InputProps } from "../../props/InputProps";

export default function Input({
  value,
  onChange,
  placeholder = "",
  className = "",
  type = "text"
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={`w-full bg-gray-800 border border-gray-600 rounded px-3 py-1 text-sm text-gray-200 focus:outline-none focus:border-blue-500 ${className}`}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
