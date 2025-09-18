import React from "react";
import ActivityBar from "../organisms/ActivityBar";
import TabBar from "../organisms/TabBar";
import StatusBar from "../atoms/StatusBar";
import { renderContent } from "../../content/renderContent";
import type { FileNode } from "../../props/FileNode";

interface LayoutProps {
  openFiles: FileNode[];
  activeFile: string | null;
  onSelectFile: (file: FileNode) => void;
  onCloseFile: (file: FileNode) => void;
}

export default function Layout({ openFiles, activeFile, onSelectFile, onCloseFile }: LayoutProps) {
  const active = openFiles.find((f) => f.name === activeFile);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <ActivityBar />
        <div className="flex flex-col flex-1">
          <TabBar
            openFiles={openFiles}
            activeFile={activeFile}
            onSelect={onSelectFile}
            onClose={onCloseFile}
          />
          <div className="flex-1 bg-gray-950 text-gray-100 p-4 overflow-auto">
            {active ? renderContent(active) : <span className="text-gray-500">Nenhum arquivo aberto</span>}
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
