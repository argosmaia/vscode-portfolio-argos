import CodigosContent from "../views/CodigosContent";
import ContatoContent from "../views/ContatoContent";
import DesignContent from "../views/DesignContent";
import ProjetosContent from "../views/ProjetosContent";
import SobreContent from "../views/SobreContent";

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
