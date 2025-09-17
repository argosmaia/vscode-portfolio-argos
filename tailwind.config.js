/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Para suporte a tema escuro :cite[1]
  theme: {
    extend: {
      colors: {
        'vscode-dark': '#1e1e1e',
        'vscode-sidebar': '#252526',
        'vscode-tab': '#2d2d30',
        'vscode-active': '#37373d',
      },
    },
  },
  plugins: [],
}