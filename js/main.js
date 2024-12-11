
const fetch = require('node-fetch');
const app = express();

// Permitir solicitudes desde todos los orígenes
app.use(cors());

// O bien, permitir solo ciertos orígenes:
app.use(cors({
  origin: 'http://127.0.0.1:5501',  // Cambia a la URL de tu aplicación
}));

// Resto de la configuración de la API


async function obtenerMedicamentos() {
    try {
      const url = 'http://localhost:3000/api/servicio-salud/medicamentos/todos';
      
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`Error ${response.status}: ${response.statusText}`);
        return;
      }
      const medicamentos = await response.json();
      mostrarMedicamentos(medicamentos);
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  }
  
  function mostrarMedicamentos(medicamentos) {
    const listaMedicamentos = document.getElementById('medicamentos');
    listaMedicamentos.innerHTML = ''; 
    medicamentos.forEach(medicamento => {
        const listItem = document.createElement('li');
        listItem.textContent = medicamento.nombre || 'Nombre no disponible';
        listaMedicamentos.appendChild(listItem);
    });
  }
  
  obtenerMedicamentos();
  