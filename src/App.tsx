import { useState } from "react";
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

  const handleSelectFile = (arquivo: FileNode) => {
    if (!arquivosAbertos.find((f) => f.name === arquivo.name)) {
      setArquivosAbertos([...arquivosAbertos, arquivo]);
    }
    setArquivoAtivo(arquivo.name);
  };

  const handleCloseFile = (arquivo: FileNode) => {
    setArquivosAbertos(arquivosAbertos.filter((f) => f.name !== arquivo.name));
    if (arquivoAtivo === arquivo.name) {
      setArquivoAtivo(arquivosAbertos.length > 1 ? arquivosAbertos[0].name : null);
    }
  };

  return (
    <Layout
      arquivosAbertos={arquivosAbertos}
      arquivoAtivo={arquivoAtivo}
      estaSelecionado={handleSelectFile}
      estaFechado={handleCloseFile}
    >
      <Routes>
        <Route path="/" element={<DesignContent />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </Layout>
  );
}
