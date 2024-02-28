// next.config.js



// Importação de variáveis de ambiente ou outra lógica de inicialização.
await import("./src/env.js");

/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  // Adicione outras configurações aqui conforme necessário
};

export default config;
