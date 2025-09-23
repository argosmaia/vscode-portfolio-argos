import type { CodeBlockProps } from "../../props/CodeBlockProps";

export function CodeBlock({ children, className = '' }: CodeBlockProps) {
  return (
    <div className={`bg-gray-900 rounded p-3 overflow-x-auto ${className}`}>
      <code className="text-sm">
        {children}
      </code>
    </div>
  );
}