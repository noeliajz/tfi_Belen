const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Proxy para redirigir solicitudes de la API
app.get('/medicamentos', async (req, res) => {
  try {
    const response = await axios.get('https://istp1service.azurewebsites.net/api/servicio-salud/medicamentos/todos');
    res.json(response.data); // Devuelve los datos al cliente
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los medicamentos' });
  }
});

app.listen(port, () => {
  console.log(Servidor proxy en http://localhost:${port});
});

const axios = require('axios');

axios.get('https://istp1service.azurewebsites.net/api/servicio-salud/medicamentos/todos', {
  params: {
    pagina: 1,
    limite: 15
  },
  headers: {
    'accept': '*/*'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error:', error);
});