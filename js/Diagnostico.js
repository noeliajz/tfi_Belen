export class Diagnostico {
  // Array estático para almacenar todos los diagnósticos
  static diagnosticos = [];

  constructor(idDiagnostico, codigoDescripcion, descripcion) {
    this.idDiagnostico = idDiagnostico;
    this.codigoDescripcion = codigoDescripcion;
    this.descripcion = descripcion;

    // Agregar este diagnóstico al array estático
    Diagnostico.diagnosticos.push(this);
  }

  // Método estático para obtener todos los diagnósticos
  static obtenerDiagnosticos() {
    return Diagnostico.diagnosticos;
  }

  // Método estático para buscar un diagnóstico por su id
  static buscarDiagnostico(idDiagnostico) {
    return Diagnostico.diagnosticos.find(diagnostico => diagnostico.idDiagnostico === idDiagnostico);
  }
}

// Crear algunos diagnósticos
new Diagnostico(1, 'D001', 'Diagnóstico de hipertensión');
new Diagnostico(2, 'D002', 'Diagnóstico de diabetes');

// Obtener todos los diagnósticos
console.log(Diagnostico.obtenerDiagnosticos());

// Buscar un diagnóstico por id
const diagnostico = Diagnostico.buscarDiagnostico(1);
console.log(diagnostico);
