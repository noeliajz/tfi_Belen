import { Paciente } from './Paciente.js'; // Importar la clase Paciente

class HistoriaClinica {
  static historiasClinicas = []; // Array estático para almacenar todas las historias clínicas

  constructor(nroHC, fechaCreacion, idEvolucion, idDiagnostico, idRecetaDigital, diagnostico, paciente) {
    // Composición: Paciente está contenido en HistoriaClinica
    this.paciente = paciente instanceof Paciente ? paciente : null;

    // Asegúrate de que se pase un paciente válido
    if (!this.paciente) {
      throw new Error("El paciente debe ser una instancia de la clase Paciente.");
    }

    // Crear la instancia de Diagnóstico
    this.diagnostico = diagnostico;

    // Inicializar la historia clínica
    this.nroHC = nroHC;
    this.fechaCreacion = fechaCreacion;
    this.idEvolucion = idEvolucion;
    this.idRecetaDigital = idRecetaDigital;

    // Agregar esta historia clínica al array estático
    HistoriaClinica.historiasClinicas.push(this);
  }

  // Método para mostrar detalles del diagnóstico
  obtenerDetallesDiagnostico() {
    return `ID Diagnóstico: ${this.diagnostico.idDiagnostico}, Descripción: ${this.diagnostico.descripcion}`;
  }

  // Método para obtener los detalles del paciente relacionado con la historia clínica
  obtenerDetallesPaciente() {
    return `Paciente: ${this.paciente.nombreCompleto}, CUIL: ${this.paciente.cuil}`;
  }
}

export { HistoriaClinica };
