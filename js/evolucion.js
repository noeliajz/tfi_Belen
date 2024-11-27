/* import { Medico } from './Medico.js'; // Ajusta la ruta según tu estructura
import { Diagnostico } from './Diagnostico.js'; // Ajusta la ruta según tu estructura

// Clase Evolucion
export class Evolucion {
  constructor(fechaHora, textoLibre, plantilla, medico, diagnostico) {
    this.fechaHora = fechaHora; // Fecha y hora de la evolución
    this.textoLibre = textoLibre; // Texto libre de la evolución
    this.plantilla = plantilla; // Plantilla utilizada
    this.medico = medico; // Relación 1 a 1 con un objeto de la clase Medico
    this.diagnostico = diagnostico; // Relación 1 a 1 con un objeto de la clase Diagnostico
  }

  // Método para mostrar detalles de la evolución
  mostrarDetalles() {
    console.log(`Fecha y Hora: ${this.fechaHora}`);
    console.log(`Texto Libre: ${this.textoLibre}`);
    console.log(`Plantilla: ${this.plantilla}`);
    console.log(`Médico: ${this.medico.nombre} (${this.medico.especialidad})`);
    console.log(
      `Diagnóstico: ${this.diagnostico.codigoDescripcion} - ${this.diagnostico.descripcion}`
    );
  }
}

// Array para guardar las evoluciones
let evoluciones = [];

// Datos simulados de médicos y diagnósticos (puedes remplazarlo por datos reales o de un repositorio)
const medicos = [
  new Medico(1, 'Dr. Juan Pérez', 'Cardiología'),
  new Medico(2, 'Dra. Ana Gómez', 'Neurología'),
];

const diagnosticos = [
  new Diagnostico(101, 'D001', 'Hipertensión esencial'),
  new Diagnostico(202, 'D002', 'Cefalea tensional'),
];

// Función para buscar un médico por su ID
function buscarMedicoPorId(idMedico) {
  return medicos.find((medico) => medico.idMedico === parseInt(idMedico));
}

// Función para buscar un diagnóstico por su ID
function buscarDiagnosticoPorId(idDiagnostico) {
  return diagnosticos.find((diagnostico) => diagnostico.idDiagnostico === parseInt(idDiagnostico));
}

// Función para agregar una nueva evolución al array
export function agregarEvolucion(dniPaciente, idDiagnostico, id) {
  const medico = buscarMedicoPorId(id);
  const diagnostico = buscarDiagnosticoPorId(idDiagnostico);

  if (!medico || !diagnostico) {
    alert('No se encontró el médico o el diagnóstico con los datos ingresados.');
    return;
  }

  // Recoger los valores de los campos
  const fechaHora = new Date().toISOString();
  const textoLibre = `Evolución del paciente con DNI ${dniPaciente}.`;
  const plantilla = 'Plantilla General'; // Puedes personalizarlo según sea necesario

  // Crear una nueva evolución
  const nuevaEvolucion = new Evolucion(fechaHora, textoLibre, plantilla, medico, diagnostico);

  // Agregar la evolución al array
  evoluciones.push(nuevaEvolucion);

  // Mostrar detalles de la evolución en consola
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
 
        if (dniPaciente && idDiagnostico && id) {
          agregarEvolucion(dniPaciente, idDiagnostico, id);
        } else {
          alert('Por favor, completa todos los campos antes de continuar.');
        }
      });
    } else {
      console.log('Botón no encontrado');
    }
 });
 
 */

 import { Medico } from './Medico.js'; // Ajusta la ruta según tu estructura
import { Diagnostico } from './Diagnostico.js'; // Ajusta la ruta según tu estructura

// Clase Evolucion
export class Evolucion {
  constructor(fechaHora, textoLibre, plantilla, medico, diagnostico) {
    this.fechaHora = fechaHora; // Fecha y hora de la evolución
    this.textoLibre = textoLibre; // Texto libre de la evolución
    this.plantilla = plantilla; // Plantilla utilizada
    this.medico = medico; // Relación 1 a 1 con un objeto de la clase Medico
    this.diagnostico = diagnostico; // Relación 1 a 1 con un objeto de la clase Diagnostico
  }

  // Método para mostrar detalles de la evolución
  mostrarDetalles() {
    console.log(`Fecha y Hora: ${this.fechaHora}`);
    console.log(`Texto Libre: ${this.textoLibre}`);
    console.log(`Plantilla: ${this.plantilla}`);
    console.log(`Médico: ${this.medico.nombre} (${this.medico.especialidad})`);
    console.log(
      `Diagnóstico: ${this.diagnostico.codigoDescripcion} - ${this.diagnostico.descripcion}`
    );
  }
}

// Array para guardar las evoluciones
let evoluciones = [];

// Datos simulados de médicos y diagnósticos
const medicos = [
  new Medico(1, 'Dr. Juan Pérez', 'Cardiología'),
  new Medico(2, 'Dra. Ana Gómez', 'Neurología'),
];

const diagnosticos = [
  new Diagnostico(101, 'D001', 'Hipertensión esencial'),
  new Diagnostico(202, 'D002', 'Cefalea tensional'),
];

// Función para buscar un médico por su ID
function buscarMedicoPorId(id) {
  return medicos.find((medico) => medico.id === parseInt(id));
}

// Función para buscar un diagnóstico por su ID
function buscarDiagnosticoPorId(idDiagnostico) {
  return diagnosticos.find((diagnostico) => diagnostico.idDiagnostico === parseInt(idDiagnostico));
}

// Función para agregar una nueva evolución al array
export function agregarEvolucion(dniPaciente, idDiagnostico, idMedico) {
  const medico = buscarMedicoPorId(idMedico);
  const diagnostico = buscarDiagnosticoPorId(idDiagnostico);

  if (!medico || !diagnostico) {
    alert('No se encontró el médico o el diagnóstico con los datos ingresados.');
    return;
  }

  // Recoger los valores de los campos (si es necesario puedes obtenerlos de los formularios)
  const fechaHora = new Date().toISOString();
  const textoLibre = `Evolución del paciente con DNI ${dniPaciente}.`;
  const plantilla = 'Plantilla General'; // Puedes personalizarlo según sea necesario

  // Crear una nueva evolución
  const nuevaEvolucion = new Evolucion(fechaHora, textoLibre, plantilla, medico, diagnostico);

  // Agregar la evolución al array
  evoluciones.push(nuevaEvolucion);

  // Mostrar detalles de la evolución en consola
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
      const idMedico = document.getElementById('idInputIdDoctor').value.trim();

      if (dniPaciente && idDiagnostico && idMedico) {
        agregarEvolucion(dniPaciente, idDiagnostico, idMedico);
      } else {
        alert('Por favor, completa todos los campos antes de continuar.');
      }
    });
  } else {
    console.log('Botón no encontrado');
  }
});
