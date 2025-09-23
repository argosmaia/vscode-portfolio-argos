import { useEffect, useRef } from "react";
import type { TerminalInputProps } from "../../props/TerminalInputProps";

export function TerminalInput({
  value,
  onChange,
  onKeyDown,
  prompt = "$",
}: TerminalInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex items-center font-mono text-sm">
      <span className="text-green-400">{prompt}</span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="bg-transparent text-white outline-none flex-1 ml-1"
        autoFocus
      />
    </div>
  );
}