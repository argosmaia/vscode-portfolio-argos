export function StatusBar() {
  return (
    <div className="bg-blue-600 px-4 py-1 text-sm flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <span>🌿 main</span>
        <span>⚠️ 0  ❌ 0</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>TypeScript React</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span>Ln 1, Col 1</span>
      </div>
    </div>
  );
}
