const axios = require('axios');

// URL base de la API
const baseURL = 'https://istp1service.azurewebsites.net/api/servicio-salud/medicamentos/todos';

// Función para obtener medicamentos
async function obtenerMedicamentos() {
  try {
    const response = await axios.get(baseURL);
    console.log(response.data); // Mostrar la respuesta de la API
  } catch (error) {
    console.error('Error al obtener los medicamentos:', error);
  }
}

async function obtenerMedicamentos() {
    const medicamentosDiv = document.getElementById('medicamentos');
    medicamentosDiv.innerHTML = '<p>Cargando...</p>';
  
    try {
      const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Añadir 'no-cors'
      });
  
      // No podrás acceder a los datos directamente en este modo.
      if (!response.ok) {
        throw new Error('Error al obtener los medicamentos');
      }
      medicamentosDiv.innerHTML = '<p>La solicitud fue realizada, pero no podemos acceder a los datos.</p>';
    } catch (error) {
      medicamentosDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
  }
  
// Llamar a la función para obtener medicamentos
obtenerMedicamentos();
