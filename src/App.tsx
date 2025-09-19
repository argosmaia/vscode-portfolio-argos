import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/templates/Layout";
import type { FileNode } from "./props/FileNode";
import DesignContent from "./views/DesignContent";

// // páginas
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Settings from "./pages/Settings";

export default function App() {
  const [arquivosAbertos, setArquivosAbertos] = useState<FileNode[]>([]);
  const [arquivoAtivo, setArquivoAtivo] = useState<string | null>(null);

  const selecionaArquivo = (arquivo: FileNode | null) => {
    if (!arquivo) return;
    if (!arquivosAbertos.find((f) => f.nome === arquivo.nome)) {
      setArquivosAbertos([...arquivosAbertos, arquivo]);
    }
    setArquivoAtivo(arquivo.nome);
  };

  const fecharArquivo = (arquivo: FileNode) => {
    setArquivosAbertos(arquivosAbertos.filter((f) => f.nome !== arquivo?.nome));
    if (arquivoAtivo === arquivo?.nome) {
      setArquivoAtivo(arquivosAbertos.length > 1 ? arquivosAbertos[0].nome : null);
    }
  };

  return (
    <Layout
      arquivosAbertos={arquivosAbertos}
      arquivoAtivo={arquivoAtivo}
      estaSelecionado={selecionaArquivo}
      estaFechado={fecharArquivo}
    >
      <Routes>
        <Route path="/" element={<DesignContent />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </Layout>
  );
}
