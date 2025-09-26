import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import { Search, GitBranch, Settings, Folder, Package } from "lucide-react";

export default function ActivityBar() {
  
  // const items = [
  //   { icon: File, label: "Explorer" },
  //   { icon: Search, label: "Search" },
  //   { icon: GitBranch, label: "Source Control" },
  //   { icon: Settings, label: "Settings" },
  // ];

  // return (
  //   <div className="w-12 bg-gray-900 text-gray-400 flex flex-col items-center py-2 border-r border-gray-700">
  //     {items.map((item, i) => (
  //       <button
  //         key={i}
  //         className="p-2 hover:bg-gray-700 rounded-md transition-colors"
  //         title={item.label}
  //       >
  //         <Icon icon={item.icon} size={20} />
  //       </button>
  //     ))}
  //   </div>
  // );

  return (
    <div className="w-12 bg-gray-900 border-r border-gray-700 flex flex-col items-center py-2 space-y-2">
      <Button variante="icon" className="text-blue-400 bg-gray-700">
        <Icon icon={Folder} tamanho={20} />
      </Button>

      <Button variante="icon">
        <Icon icon={Search} tamanho={20} />
      </Button>

      <Button variante="icon">
        <Icon icon={GitBranch} tamanho={20} />
      </Button>

      <Button variante="icon">
        <Icon icon={Package} tamanho={20} />
      </Button>

      <div className="flex-1"></div>
      <Button variante="icon">
        <Icon icon={Settings} tamanho={20} />
      </Button>

    </div>
  );
}
