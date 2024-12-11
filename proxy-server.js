const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configurar el proxy
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://istp1service.azurewebsites.net', // URL base de la API
    changeOrigin: true, // Cambia el origen de la solicitud
    pathRewrite: {
      '^/api': '', // Quita '/api' del camino de la URL
    },
  })
);

// Iniciar el servidor
const PORT = 3000; // Puerto donde se ejecutará el proxy
app.listen(PORT, () => {
  console.log(`Proxy corriendo en http://localhost:${PORT}`);
});
