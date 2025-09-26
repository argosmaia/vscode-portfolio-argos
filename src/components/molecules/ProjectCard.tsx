import type { ProjectCardProps } from "../../props/ProjectCardProps";
import { CodeBlock } from "../atoms/CodeBlock";

export default function ProjectCard({titulo, descricao, tecnologias, acoes}: ProjectCardProps) {
    return(
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-xl font-semibold mb-3">{titulo}</h3>
            <p className="text-gray-300 mb-4">{descricao}</p>
            <CodeBlock>
                <span className="text-green-400">
                    {tecnologias}
                </span>
            </CodeBlock>
            {acoes && (
                <div className="mt-4 flex flex-wrap gap-2">
                {acoes}
                </div>
            )}
        </div>
    );
}