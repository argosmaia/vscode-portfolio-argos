export default function SobreContent() {
    return(
        <div className="p-6 text-gray-200">
          <h1 className="text-3xl font-bold mb-6 text-yellow-400">👨‍💻 Sobre Mim</h1>
          <div className="max-w-4xl">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Desenvolvedor Full Stack</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Apaixonado por tecnologia e desenvolvimento de software. Especializado em criar experiências 
                digitais modernas e funcionais, sempre buscando as melhores práticas e tecnologias mais recentes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">🛠️ Tecnologias</h3>
                  <div className="bg-gray-900 rounded p-4">
                    <code className="text-green-400 text-sm">
                      const skills = &#123;<br/>
                      &nbsp;&nbsp;frontend: ['React', 'TypeScript', 'Tailwind'],<br/>
                      &nbsp;&nbsp;backend: ['Node.js', 'Python', 'PostgreSQL'],<br/>
                      &nbsp;&nbsp;tools: ['Git', 'Docker', 'VS Code']<br/>
                      &#125;
                    </code>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">🎯 Foco</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Clean Code & Best Practices</li>
                    <li>• User Experience (UX)</li>
                    <li>• Performance Optimization</li>
                    <li>• Responsive Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}