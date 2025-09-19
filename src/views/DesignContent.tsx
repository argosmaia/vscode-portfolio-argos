
export default function DesignContent() {
    return(
        <div className="p-6 text-gray-200">
            <h1 className="text-3xl font-bold mb-6 text-blue-400">Portfolio de Design</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-xl font-semibold mb-3">UI/UX Projects</h3>
                    <p className="text-gray-300 mb-4">Interface designs e experiências do usuário</p>
                    <div className="bg-gray-900 rounded p-3">
                    <code className="text-green-400">
                        const design = &#123;<br/>
                        &nbsp;&nbsp;tools: ['Figma', 'Adobe XD', 'Sketch'],<br/>
                        &nbsp;&nbsp;focus: 'User Experience'<br/>
                        &#125;
                    </code>
                    </div>
                </div>
            
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-xl font-semibold mb-3">Brand Identity</h3>
                    <p className="text-gray-300 mb-4">Identidade visual e branding</p>
                    <div className="bg-gray-900 rounded p-3">
                    <code className="text-blue-400">
                        interface Brand &#123;<br/>
                        &nbsp;&nbsp;logo: string;<br/>
                        &nbsp;&nbsp;colors: string[];<br/>
                        &nbsp;&nbsp;typography: Font;<br/>
                        &#125;
                    </code>
                    </div>
                </div>
            </div>
        </div>
    );
}