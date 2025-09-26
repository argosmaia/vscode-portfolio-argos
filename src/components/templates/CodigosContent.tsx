import { Atom, Rocket, Zap } from "lucide-react";
import Icon from "../atoms/Icon";
import ProjectCard from "../molecules/ProjectCard";
import { Badge } from "../atoms/Badge";

// templates/CodigosPage.tsx
export default function CodigosContent() {
  return (
    <div className="p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-green-400"><Icon icon={Zap} /> Projetos de Código</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectCard
          titulo={
            <span className="flex items-center">
              <span className="mr-2"><Icon icon={Atom} tamanho={10} /></span> React Projects
            </span>
          }
          descricao="Aplicações desenvolvidas com React"
          tecnologias={`npm create react-app portfolio
cd portfolio && npm install
npm run dev`}
          acoes={[
            <Badge key="ts" cor="blue">TypeScript</Badge>,
            <Badge key="tw" cor="cyan">Tailwind</Badge>,
            <Badge key="vite" cor="purple">Vite</Badge>
          ]}
        />
        
        <ProjectCard
          titulo={
            <span className="flex items-center">
              <span className="mr-2"><Icon icon={Rocket} tamanho={10} /></span> Full Stack
            </span>
          }
          descricao="Aplicações completas"
          tecnologias={`const stack = {
                frontend: 'React + TS',
                backend: 'Node.js',
                database: 'PostgreSQL'
            }`}
          acoes={[
            <Badge key="node" cor="green">Node.js</Badge>,
            <Badge key="pg" cor="blue">PostgreSQL</Badge>,
            <Badge key="redis" cor="red">Redis</Badge>
          ]}
        />
      </div>
    </div>
  );
}