export default function CodigosContent() {
    return(
        <div className="p-6 text-gray-200">
            <h1 className="text-3xl font-bold mb-6 text-green-400">Projetos de Código</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="mr-2">⚛️</span> React Projects
                    </h3>
                    <p className="text-gray-300 mb-4">Aplicações desenvolvidas com React</p>
                    <div className="bg-gray-900 rounded p-3 overflow-x-auto">
                    <code className="text-green-400 text-sm">
                        npm create react-app portfolio<br/>
                        cd portfolio && npm install<br/>
                        npm run dev
                    </code>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-blue-600 text-xs px-2 py-1 rounded">TypeScript</span>
                    <span className="bg-cyan-600 text-xs px-2 py-1 rounded">Tailwind</span>
                    <span className="bg-purple-600 text-xs px-2 py-1 rounded">Vite</span>
                    </div>
                </div>
            
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="mr-2">🚀</span> Full Stack
                    </h3>
                    <p className="text-gray-300 mb-4">Aplicações completas</p>
                    <div className="bg-gray-900 rounded p-3 overflow-x-auto">
                        <code className="text-yellow-400 text-sm">
                            const stack = &#123;<br/>
                            &nbsp;&nbsp;frontend: 'React + TS',<br/>
                            &nbsp;&nbsp;backend: 'Node.js',<br/>
                            &nbsp;&nbsp;database: 'PostgreSQL'<br/>
                            &#125;
                        </code>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-green-600 text-xs px-2 py-1 rounded">Node.js</span>
                        <span className="bg-blue-800 text-xs px-2 py-1 rounded">PostgreSQL</span>
                        <span className="bg-red-600 text-xs px-2 py-1 rounded">Redis</span>
                    </div>
                </div>
            </div>
        </div>
    );
}