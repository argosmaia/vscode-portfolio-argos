import { useState, type JSX } from "react";
import { TitleBar } from "../organisms/TitleBar";

import { ActivityBar } from "../organisms/ActivityBar";

import FileExplorer from "../organisms/FileExplorer";
import TabBar from "../organisms/TabBar";
import type { FileNode } from "../../props/FileNode";
import { StatusBar } from "../atoms/StatusBar";
import DesignContent from "./DesignContent";
import CodigosContent from "./CodigosContent";
import { ProjetosContent } from "./ProjetosContent";
import ContatoContent from "./ContatoContent";
import SobreContent from "./SobreContent";

export default function Layout() {

  const [openTabs, setOpenTabs] = useState<FileNode[]>([]);
  const [currentTab, setCurrentTab] = useState<FileNode | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const navigateTo = (arquivo: FileNode) => {
    if (!openTabs.find(tab => tab.nome === arquivo.nome)) {
      setOpenTabs([...openTabs, arquivo]);
    }
    setCurrentTab(arquivo);
  };

  const closeTab = (arquivo: FileNode) => {
    const newTabs = openTabs.filter(tab => tab.nome !== arquivo.nome);
    setOpenTabs(newTabs);

    if (currentTab?.nome === arquivo.nome && newTabs.length > 0) {
      setCurrentTab(newTabs[newTabs.length - 1]);
    } else if (newTabs.length === 0) {
      setCurrentTab(null);
    }
  };

  const renderContent = (): JSX.Element => {
    switch (currentTab?.nome) {
      case "Design.tsx":
        return <DesignContent />;
      case "Codigos.tsx":
        return <CodigosContent />;
      case "Projetos.tsx":
        return <ProjetosContent />;
      case "Sobre.tsx":
        return <SobreContent />;
      case "Contato.tsx":
        return <ContatoContent />;
      default:
        return <DesignContent />;
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white font-mono flex flex-col">
      <TitleBar />

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
            arquivosAbertos={openTabs}
            arquivoAtivo={currentTab?.nome ?? null}
            estaSelecionado={setCurrentTab}
            estaFechado={closeTab}
          />

          <div className="flex-1 overflow-y-auto bg-gray-900">
            {renderContent()}
          </div>
        </div>
      </div>

      <StatusBar />
    </div>
  );
}
