# React + TypeScript + Vite + TailwindCSS

This template provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement), TypeScript, and TailwindCSS. It also includes essential ESLint rules for better code quality.

## Tech Stack
- **Vite** - Fast build tool for modern web projects.
- **React** - JavaScript library for building user interfaces.
- **TypeScript** - Strongly typed JavaScript.
- **TailwindCSS** - Utility-first CSS framework for rapid UI development.


## Live Demo
Check out the live demo: [edgar-five.vercel.app](https://edgar-five.vercel.app/)

## Project Screenshot
![Project Screenshot](https://github.com/user-attachments/assets/cda9051e-65f5-4ec1-9572-ea5b8216887c)

---

## Expanding the ESLint Configuration
If you are developing a production application, we recommend updating the ESLint configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Replace ...tseslint.configs.recommended with more advanced configurations
    ...tseslint.configs.recommendedTypeChecked,
    // For stricter rules, use:
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add stylistic rules:
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // Other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

### Adding React-Specific Linting Rules
You can enhance your linting setup by installing the following plugins:

- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) - Provides recommended linting rules for React.
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) - Focuses on React DOM best practices.

#### Example Configuration:
```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // Enable recommended TypeScript rules for React
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs
