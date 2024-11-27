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
  new Medico(1, 'Dr. Juan Pérez', 'Cardiología'),
  new Medico(2, 'Dra. Ana Gómez', 'Neurología'),
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

// Agregar una nueva evolución al array
export function agregarEvolucion(dniPaciente, idDiagnostico, id, informe) {
  const medico = buscarMedicoPorId(id);
  const diagnostico = buscarDiagnosticoPorId(idDiagnostico);

  if (!medico) {
    alert('No se encontró el médico con el ID ingresado.');
    console.error('Médico no encontrado:', id);
    return;
  }

  if (!diagnostico) {
    alert('No se encontró el diagnóstico con el ID ingresado.');
    console.error('Diagnóstico no encontrado:', idDiagnostico);
    return;
  }

  const fechaHora = new Date().toISOString();
  const textoLibre = `Evolución del paciente con DNI ${dniPaciente}.`;
  const plantilla = 'Plantilla General';

  const nuevaEvolucion = new Evolucion(fechaHora, textoLibre, plantilla, medico, diagnostico, informe);
  evoluciones.push(nuevaEvolucion);
  nuevaEvolucion.mostrarDetalles();
  alert('Evolución creada exitosamente.');
}

document.addEventListener('DOMContentLoaded', () => {
  const buttonAgregarEvolucion = document.getElementById('buttonAgregarEvolucion');
  if (buttonAgregarEvolucion) {
    console.log('Botón encontrado');
    buttonAgregarEvolucion.addEventListener('click', () => {
      console.log('Botón presionado');
      const dniPaciente = document.getElementById('idInputBuscarCuil').value.trim();
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
