import type { TabBarProps } from "../../props/TabBarProps";
import Tab from "../molecules/Tab";

export default function TabBar({ arquivosAbertos, arquivoAtivo, estaSelecionado, estaFechado }: TabBarProps) {
  return (
    <div className="flex bg-gray-800 border-b border-gray-700 overflow-x-auto">
      {arquivosAbertos.map((arquivo) => (
        <Tab
          key={arquivo.nome}
          arquivo={arquivo} 
          estaAtivo={arquivoAtivo === arquivo.nome}
          estaSelecionado={estaSelecionado}
          estaFechado={estaFechado}
        />
      ))}
    </div>
  );
}
