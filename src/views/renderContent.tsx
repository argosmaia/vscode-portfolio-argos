// import DesignContent from "./DesignContent";
// import CodigosContent from "./CodigosContent";
// import ProjetosContent from "./ProjetosContent";
// import SobreContent from "./SobreContent";
// import ContatoContent from "./ContatoContent";

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
