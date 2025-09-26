import { Palette } from "lucide-react";
import Icon from "../atoms/Icon";
import ProjectCard from "../molecules/ProjectCard";

export default function DesignContent() {
  return (
    <div className="p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-blue-400"><Icon icon={Palette} tamanho={10} /> Design Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          titulo="UI/UX Projects"
          descricao="Interface designs e experiências do usuário"
          tecnologias={`const design = {
                                tools: ['Figma', 'Adobe XD', 'Sketch'],
                                focus: 'User Experience'
                        }`
                    }
        />
        
        <ProjectCard
          titulo="Brand Identity"
          descricao="Identidade visual e branding"
          tecnologias={`interface Brand {
                        logo: string;
                        colors: string[];
                        typography: Font;
                    }`}
        />
      </div>
    </div>
  );
}