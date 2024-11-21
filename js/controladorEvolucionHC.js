import { Paciente } from "./Paciente.js";
import { Diagnostico } from "./Diagnostico.js";

class HistoriaClinica extends Paciente {
  static historiasClinicas = []; // Array estático para almacenar todas las historias clínicas
  
  constructor(nroHC, fechaCreacion, idEvolucion, idDiagnostico, idRecetaDigital, diagnostico, paciente) {
    // Llamar al constructor de la clase base (Paciente) con los datos necesarios
    // Aquí asumo que Paciente tiene propiedades como 'nombreCompleto' o 'cuil'
    super(paciente.nombreCompleto, paciente.cuil); // Esto depende del constructor de Paciente

    // Crear una instancia de Diagnostico usando los parámetros proporcionados
    this.diagnostico = new Diagnostico(idDiagnostico, diagnostico.codigoDescripcion, diagnostico.descripcion);
    
    // Inicialización de las propiedades específicas de HistoriaClinica
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
}
