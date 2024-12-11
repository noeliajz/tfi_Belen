const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors()); // Permitir todas las solicitudes

const PORT = 3000; // Puerto del servidor proxy

// Ruta para obtener los medicamentos desde la API
app.get('/api/medicamentos', async (req, res) => {
  try {
    const response = await fetch('https://istp1service.azurewebsites.net/api/servicio-salud/medicamentos');
    if (!response.ok) {
      throw new Error('Error al obtener los datos de la API remota.');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los medicamentos.' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
