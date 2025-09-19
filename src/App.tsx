import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/templates/Layout";
import { FileNode } from "./props/FileNode";
import Layout from "./components/templates/Layout";

// // páginas
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Settings from "./pages/Settings";

export default function App() {
  const [openFiles, setOpenFiles] = useState<FileNode[]>([]);
  const [activeFile, setActiveFile] = useState<string | null>(null);

  const handleSelectFile = (file: FileNode) => {
    if (!openFiles.find((f) => f.name === file.name)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFile(file.name);
  };

  const handleCloseFile = (file: FileNode) => {
    setOpenFiles(openFiles.filter((f) => f.name !== file.name));
    if (activeFile === file.name) {
      setActiveFile(openFiles.length > 1 ? openFiles[0].name : null);
    }
  };

  return (
    <Layout
      openFiles={openFiles}
      activeFile={activeFile}
      onSelectFile={handleSelectFile}
      onCloseFile={handleCloseFile}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}
