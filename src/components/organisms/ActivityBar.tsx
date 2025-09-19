import Icon from "../atoms/Icon";
import { File, Search, GitBranch, Settings } from "lucide-react";

export default function ActivityBar() {
  
  const items = [
    { icon: File, label: "Explorer" },
    { icon: Search, label: "Search" },
    { icon: GitBranch, label: "Source Control" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="w-12 bg-gray-900 text-gray-400 flex flex-col items-center py-2 border-r border-gray-700">
      {items.map((item, i) => (
        <button
          key={i}
          className="p-2 hover:bg-gray-700 rounded-md transition-colors"
          title={item.label}
        >
          <Icon icon={item.icon} size={20} />
        </button>
      ))}
    </div>
  );
}
