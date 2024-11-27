import { Medico } from './Medico.js'; // Ajusta la ruta según tu estructura
import { Diagnostico } from './Diagnostico.js'; // Ajusta la ruta según tu estructura

// Clase Evolucion
export class Evolucion {
  constructor(fechaHora, textoLibre, plantilla, medico, diagnostico, informe) {
    this.fechaHora = fechaHora;
    this.textoLibre = textoLibre;
    this.plantilla = plantilla;
    this.medico = medico;
    this.diagnostico = diagnostico;
    this.informe = informe;
  }

  mostrarDetalles() {
    console.log(`Fecha y Hora: ${this.fechaHora}`);
    console.log(`Texto Libre: ${this.textoLibre}`);
    console.log(`Plantilla: ${this.plantilla}`);
    console.log(`Id de Médico: ${this.medico.id })`);
    console.log(`Diagnóstico: ${this.diagnostico.codigoDescripcion} - ${this.diagnostico.descripcion}`);
    console.log(`Informe: ${this.informe}`);
  }
}

// Array para guardar las evoluciones
let evoluciones = [];

const medicos = [
  new Medico(1,  'Cardiología','Dr. Juan Pérez'),
  new Medico(2,  'Neurología', 'Dra. Ana Gómez'),
];

const diagnosticos = [
  new Diagnostico(1, 'D001', 'Hipertensión esencial'),
  new Diagnostico(2, 'D002', 'Cefalea tensional'),
];

// Buscar médico por ID (revisar atributo correcto)
function buscarMedicoPorId(id) {
  return medicos.find((medico) => medico.id === parseInt(id));
}

// Buscar diagnóstico por ID
function buscarDiagnosticoPorId(idDiagnostico) {
  return diagnosticos.find((diagnostico) => diagnostico.idDiagnostico === parseInt(idDiagnostico));
}
//muestra las evoluciones en una card
function renderizarEvoluciones() {
  const divCardEvoluciones = document.getElementById('divCardEvoluciones');
  divCardEvoluciones.innerHTML = ''; // Limpiar contenido anterior

  if (evoluciones.length === 0) {
      divCardEvoluciones.innerHTML = '<p>No hay evoluciones registradas.</p>';
  } else {
      evoluciones.forEach((evolucion, index) => {
          const card = `
              <div class="card m-3" style="width: 18rem;">
                  <div class="card-body">
                      <h5 class="card-title">Evolución ${index + 1}</h5>
                      <p class="card-text"><strong>Fecha y Hora:</strong> ${evolucion.fechaHora}</p>
                      <p class="card-text"><strong>Informe:</strong> ${evolucion.informe}</p>
                      <p class="card-text"><strong>Id de Médico:</strong> ${evolucion.medico.id} - ${evolucion.medico.nombreCompleto}</p>
                      <p class="card-text"><strong>Diagnóstico:</strong> ${evolucion.diagnostico.codigoDescripcion} - ${evolucion.diagnostico.descripcion}</p>
                  </div>
              </div>`;
          divCardEvoluciones.innerHTML += card;
      });
  }
}

// Agregar una nueva evolución al array
export function agregarEvolucion(dniPaciente, idDiagnostico, id, informe) {
  const medico = buscarMedicoPorId(id);
  const diagnostico = buscarDiagnosticoPorId(idDiagnostico);

  if (!medico) {
      alert('No se encontró el médico con el ID ingresado.');
      return;
  }

  if (!diagnostico) {
      alert('No se encontró el diagnóstico con el ID ingresado.');
      return;
  }

  const fechaHora = new Date().toISOString();
  const textoLibre = `Evolución del paciente con DNI ${dniPaciente}.`;
  const plantilla = 'Plantilla General';

  const nuevaEvolucion = new Evolucion(fechaHora, textoLibre, plantilla, medico, diagnostico, informe);
  evoluciones.push(nuevaEvolucion);
  
  alert('Evolución creada exitosamente.');
  
  // Renderizar las evoluciones
  renderizarEvoluciones();
}


document.addEventListener('DOMContentLoaded', () => {
  const buttonAgregarEvolucion = document.getElementById('buttonAgregarEvolucion');
  if (buttonAgregarEvolucion) {
    console.log('Botón encontrado');
    buttonAgregarEvolucion.addEventListener('click', () => {
      console.log('Botón presionado');
      const dniPaciente = document.getElementById('idInputBuscarDNI').value.trim();
      const idDiagnostico = document.getElementById('idInputIdDiagnostico').value.trim();
      const id = document.getElementById('idInputIdDoctor').value.trim();
      const informe = document.getElementById('idInputInforme').value.trim();

      if (dniPaciente && idDiagnostico && id && informe) {
        agregarEvolucion(dniPaciente, idDiagnostico, id, informe);
      } else {
        alert('Por favor, completa todos los campos antes de continuar.');
      }
    });
  } else {
    console.log('Botón no encontrado');
  }
});
