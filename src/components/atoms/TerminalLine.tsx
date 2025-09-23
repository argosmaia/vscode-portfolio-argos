// components/TerminalLine.tsx
import type { TerminalLineProps } from "../../props/TerminalLineProps";

export function TerminalLine({
  prompt = "$",
  command = "",
  output = "",
  isCommand = false,
}: TerminalLineProps) {
  return (
    <div className="font-mono text-sm">
      {isCommand ? (
        <div className="flex items-center">
          <span className="text-green-400">{prompt}</span>
          <span className="text-white ml-1">{command}</span>
        </div>
      ) : (
        <div className="text-gray-300 whitespace-pre-wrap">{output}</div>
      )}
    </div>
  );
}
