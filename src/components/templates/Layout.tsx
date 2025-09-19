import ActivityBar from "../organisms/ActivityBar";
import TabBar from "../organisms/TabBar";
import StatusBar from "../atoms/StatusBar";
import { renderContent } from "../../renders/renderContent";
import type { LayoutProps } from "../../props/LayoutProps";

export default function Layout({
  arquivosAbertos,
  arquivoAtivo,
  estaSelecionado,
  estaFechado,
}: LayoutProps) {

  const ativo = arquivosAbertos.find((f) => f.nome === arquivoAtivo);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <ActivityBar />
        <div className="flex flex-col flex-1">
          <TabBar
            arquivosAbertos={arquivosAbertos}
            arquivoAtivo={arquivoAtivo}
            estaSelecionado={estaSelecionado}
            estaFechado={estaFechado}
          />
          <div className="flex-1 bg-gray-950 text-gray-100 p-4 overflow-auto">
            {ativo ? (
              renderContent(ativo.nome)
            ) : (
              <span className="text-gray-500">Nenhum arquivo aberto</span>
            )}
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
