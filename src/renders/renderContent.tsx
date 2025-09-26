import CodigosContent from "../components/templates/CodigosContent";
import ContatoContent from "../components/templates/ContatoContent";
import DesignContent from "../components/templates/DesignContent";
import ProjetosContent from "../components/templates/ProjetosContent";
import SobreContent from "../components/templates/SobreContent";

export function renderContent(currentTab: string) {
  switch (currentTab) {
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
}
