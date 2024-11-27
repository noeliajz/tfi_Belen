// Importación de las clases existentes
import { Diagnostico } from './Diagnostico.js'; // Ajusta la ruta según tu estructura
import { Evolucion } from 'Evolucion.js'; // Ajusta la ruta según tu estructura
import { PedidoLaboratorio } from './PedidoLaboratorio.js'; // Ajusta la ruta según tu estructura
import { RecetaDigital } from './RecetaDigital.js'; // Ajusta la ruta según tu estructura
// Clase HistoriaClinica
export class HistoriaClinica {
  constructor(nroHC, diagnostico, evolucion, pedidoLaboratorio, recetaDigital) {
    this.nroHC = nroHC; // Número de historia clínica
    this.diagnostico = diagnostico; // Relación 1 a 1 con Diagnóstico
    this.evolucion = evolucion; // Relación 1 a 1 con Evolución
    this.pedidoLaboratorio = pedidoLaboratorio; // Relación 1 a 1 con PedidoLaboratorio
    this.recetaDigital = recetaDigital; // Relación 1 a 1 con RecetaDigital
  }

  // Método para mostrar detalles de la historia clínica
  mostrarDetalles() {
    console.log(`Historia Clínica N°: ${this.nroHC}`);
    console.log(`Diagnóstico: ${this.diagnostico.descripcion}`);
    console.log(`Evolución: ${this.evolucion.textoLibre}`);
    console.log(`Pedido de Laboratorio: ${this.pedidoLaboratorio.prueba}`);
    console.log(`Receta Digital: ${this.recetaDigital.medicamentos}`);
  }
  
  // Métodos adicionales pueden incluir la actualización de atributos o relaciones
  actualizarDiagnostico(diagnostico) {
    this.diagnostico = diagnostico;
    console.log('Diagnóstico actualizado.');
  }

  actualizarEvolucion(evolucion) {
    this.evolucion = evolucion;
    console.log('Evolución actualizada.');
  }

  actualizarPedidoLaboratorio(pedidoLaboratorio) {
    this.pedidoLaboratorio = pedidoLaboratorio;
    console.log('Pedido de laboratorio actualizado.');
  }

  actualizarRecetaDigital(recetaDigital) {
    this.recetaDigital = recetaDigital;
    console.log('Receta digital actualizada.');
  }
}
// Importar las clases necesarias


// Crear instancias de las clases relacionadas
const diagnostico = new Diagnostico(101, 'D001', 'Hipertensión');
const evolucion = new Evolucion('2024-11-26 10:00', 'Paciente con mejoría', 'Plantilla 1', 'Dr. Pérez', diagnostico);
const pedidoLaboratorio = new PedidoLaboratorio('2024-11-26', 'Análisis de sangre');
const recetaDigital = new RecetaDigital('Paracetamol 500mg', '3 veces al día por 5 días');

// Crear una nueva historia clínica
const historiaClinica = new HistoriaClinica('HC123456', diagnostico, evolucion, pedidoLaboratorio, recetaDigital);

// Mostrar los detalles de la historia clínica
historiaClinica.mostrarDetalles();
