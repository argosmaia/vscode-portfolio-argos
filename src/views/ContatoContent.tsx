export default function ContatoContent() {
    return(
        <div className="p-6 text-gray-200">
          <h1 className="text-3xl font-bold mb-6 text-cyan-400">📧 Contato</h1>
          <div className="max-w-2xl">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-6 text-lg">
                Vamos conversar sobre projetos e oportunidades!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">contato@meuportfolio.com</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-gray-400">linkedin.com/in/meuusuario</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🐱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-gray-400">github.com/meuusuario</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}