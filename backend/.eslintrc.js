// Configuration ESLint basique pour Node.js
module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "off",     // Autorisé car utilisé pour les logs serveur
    "no-unused-vars": "warn", // Avertissement si variable déclarée mais non utilisée
    "semi": ["error", "always"], // Point-virgule obligatoire
  },
};
