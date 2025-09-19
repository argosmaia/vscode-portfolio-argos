import DesignContent from "./DesignContent";

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
      return <CodigosContent />;
  }
}
