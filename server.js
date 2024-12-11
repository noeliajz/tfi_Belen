const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;
app.get('/api/medicamentos', (req, res) => {
  res.json([{ nombre: 'Medicamento 1' }, { nombre: 'Medicamento 2' }]);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
// Permitir solicitudes desde todos los orígenes
app.use(cors());

// O bien, permitir solo ciertos orígenes:
app.use(cors({
  origin: 'http://127.0.0.1:5501',  // Cambia a la URL de tu aplicación
}));

// Resto de la configuración de la API
app.get('/api/servicio-salud/medicamentos/todos', (req, res) => {
  // Simulamos una respuesta con algunos medicamentos
  res.json([
    { nombre: 'Paracetamol' },
    { nombre: 'Ibuprofeno' },
    { nombre: 'Aspirina' }
  ]);
});

// Iniciar servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
