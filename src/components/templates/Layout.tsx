import React, { useState } from "react";
import FileExplorer from "../organisms/FileExplorer";
import ActivityBar from "../organisms/ActivityBar";
import TabBar from "../organisms/TabBar";
import StatusBar from "../organisms/StatusBar";
import { renderContent } from "../../content/renderContent";
import Button from "../atoms/Button";
import { Minus, Square, X } from "lucide-react";

export default function VSCodeLayout() {
  const [openTabs, setOpenTabs] = useState<string[]>(["Design.tsx"]);
  const [currentTab, setCurrentTab] = useState("Design.tsx");
  const [searchTerm, setSearchTerm] = useState("");

  const navigateTo = (fileName: string) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    setCurrentTab(fileName);
  };

  const closeTab = (fileName: string) => {
    const newTabs = openTabs.filter(tab => tab !== fileName);
    setOpenTabs(newTabs);

    if (currentTab === fileName && newTabs.length > 0) {
      setCurrentTab(newTabs[newTabs.length - 1]);
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white font-mono flex flex-col">
      {/* Title Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm text-gray-300">Portfolio - Visual Studio Code</div>
        <div className="flex items-center space-x-1">
          <Button variante="icon"><Minus size={14} /></Button>
          <Button variante="icon"><Square size={12} /></Button>
          <Button variante="icon"><X size={14} /></Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <ActivityBar />
        
        <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
          <FileExplorer
            arquivoAtual={currentTab}
            arquivoSelecionado={navigateTo}
            procurar={setSearchTerm}
            procurandoTermo={searchTerm}
          />
        </div>

        <div className="flex-1 flex flex-col">
          <TabBar
            tabs={openTabs}
            currentTab={currentTab}
            onSelectTab={setCurrentTab}
            onCloseTab={closeTab}
          />
          <div className="flex-1 overflow-y-auto bg-gray-900">
            {renderContent(currentTab)}
          </div>
        </div>
      </div>

      <StatusBar />
    </div>
  );
}
