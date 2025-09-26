import { AtSign, Github, Linkedin, Mail } from "lucide-react";
import Icon from "../atoms/Icon";
import { ContactCard } from "../molecules/ContactCard";

export default function ContatoContent() {
  return (
    <div className="p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400"><Icon icon={AtSign} /> Contato</h1>
      <div className="max-w-2xl">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <p className="text-gray-300 mb-6 text-lg">
            Vamos conversar sobre projetos e oportunidades!
          </p>
          
          <div className="space-y-4">
            <ContactCard
              icon={<Icon icon={Mail} tamanho={20} />}
              titulo="Email"
              descricao="contato@meuportfolio.com"
              onClick={() => {}}
            />
            
            <ContactCard
              icon={<Icon icon={Linkedin} tamanho={20} />}
              titulo="LinkedIn"
              descricao="linkedin.com/in/argos-maia"
              onClick={() => {}}
            />
            
            <ContactCard
              icon={<Icon icon={Github} tamanho={20} />}
              titulo="GitHub"
              descricao="github.com/argosmaia"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}