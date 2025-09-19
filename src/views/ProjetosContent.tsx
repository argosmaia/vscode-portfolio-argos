import Button from "../components/atoms/Button";

export default function ProjetosContent() {
    return (
        <div className="p-6 text-gray-200">
          <h1 className="text-3xl font-bold mb-6 text-purple-400">📂 Projetos Destacados</h1>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                  <p className="text-gray-300">Plataforma completa de e-commerce com painel administrativo</p>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
                    Ver Demo
                  </Button>
                  <Button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">
                    GitHub
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-600 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-green-600 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-orange-600 text-xs px-2 py-1 rounded">MongoDB</span>
                <span className="bg-purple-600 text-xs px-2 py-1 rounded">Stripe</span>
              </div>
              <div className="bg-gray-900 rounded p-3">
                <code className="text-gray-300 text-sm">
                  // Funcionalidades principais<br/>
                  ✅ Carrinho de compras<br/>
                  ✅ Pagamentos integrados<br/>
                  ✅ Dashboard administrativo<br/>
                  ✅ Sistema de usuários
                </code>
              </div>
            </div>
          </div>
        </div>
    );
}
