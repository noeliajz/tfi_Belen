import { Medico } from './Medico.js'; // Ajusta la ruta según tu estructura
import { Diagnostico } from './Diagnostico.js'; // Ajusta la ruta según tu estructura
import {Paciente} from './RepositorioPaciente.js'
// Clase Evolucion
export class Evolucion {
  constructor(fechaHora, textoLibre, plantilla, medico, diagnostico, informe, paciente) {
    this.fechaHora = fechaHora;
    this.textoLibre = textoLibre;
    this.plantilla = plantilla;
    this.medico = medico;
    this.diagnostico = diagnostico;
    this.informe = informe;
    this.paciente = paciente
  }

  mostrarDetalles() {
    console.log(`Fecha y Hora: ${this.fechaHora}`);
    console.log(`Nombre completo: ${this.paciente.nombreCompleto}`);
    console.log(`Texto Libre: ${this.textoLibre}`);
    console.log(`Plantilla: ${this.plantilla}`);
    console.log(`Id de Médico: ${this.medico.id }`);
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
                      <p class="card-text"><strong>Nombre Completo:</strong> ${evolucion.paciente ? evolucion.paciente.nombreCompleto : 'Desconocido'} </p>
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

  // Buscar el paciente por DNI
  const paciente = Paciente.pacientes.find(p => p.dni === dniPaciente);

  if (!paciente) {
      alert('No se encontró el paciente con el DNI ingresado.');
      return;
  }

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

  // Crear la evolución con el paciente correcto
  const nuevaEvolucion = new Evolucion(fechaHora, textoLibre, plantilla, medico, diagnostico, informe, paciente);
  evoluciones.push(nuevaEvolucion);

  alert('Evolución creada exitosamente.');

  // Renderizar las evoluciones
  renderizarEvoluciones();
}


document.addEventListener('DOMContentLoaded', () => {
  const buttonAgregarEvolucion = document.getElementById('buttonAgregarEvolucion');
  const dniPaciente = document.getElementById('idInputBuscarDNI');
  const idDiagnostico = document.getElementById('idInputIdDiagnostico');
  const id = document.getElementById('idInputIdDoctor');
  const informe = document.getElementById('idInputInforme');

  if (buttonAgregarEvolucion && dniPaciente && idDiagnostico && id && informe) {
    console.log('Botón y campos encontrados');
    buttonAgregarEvolucion.addEventListener('click', () => {
      console.log('Botón presionado');
      
      // Obtener los valores de los campos
      const dniPacienteValue = dniPaciente.value.trim();
      const idDiagnosticoValue = idDiagnostico.value.trim();
      const idValue = id.value.trim();
      const informeValue = informe.value.trim();

      // Verificar si todos los campos tienen valores
      if (dniPacienteValue && idDiagnosticoValue && idValue && informeValue) {
        agregarEvolucion(dniPacienteValue, idDiagnosticoValue, idValue, informeValue);
      } else {
        alert('Por favor, completa todos los campos antes de continuar.');
      }
    });
  } else {
    console.log('Uno o más elementos no fueron encontrados');
  }
});


