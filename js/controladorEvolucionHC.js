class HistoriaClinica {
  static historiasClinicas = []; // Array estático para almacenar todas las historias clínicas

  constructor(nroHC, fechaCreacion, idEvolucion, idDiagnostico, idRecetaDigital, diagnostico, paciente = null) {
    this.nroHC = nroHC;
    this.fechaCreacion = fechaCreacion;
    this.idEvolucion = idEvolucion;
    this.idDiagnostico = idDiagnostico;
    this.idRecetaDigital = idRecetaDigital;
    this.diagnostico = diagnostico;
    this.paciente = paciente; // Relación 1 a 1 con Paciente

    // Agregar esta historia clínica al array estático
    HistoriaClinica.historiasClinicas.push(this);
  }

  // Método para asignar un paciente
  asignarPaciente(paciente) {
    this.paciente = paciente;
  }

  // Método para renderizar detalles de la historia clínica
  renderizarDetalles() {
    const pacienteInfo = this.paciente
      ? `<h5>Paciente: ${this.paciente.nombreCompleto}</h5><p>CUIL: ${this.paciente.cuil}</p>`
      : '<p>Paciente no asignado</p>';

    return `
      <div class="card m-3 col-8 p-3">
        ${pacienteInfo}
        <h5>Fecha: ${this.fechaCreacion}</h5>
        <p>Diagnóstico: ${this.diagnostico}</p>
        <p><strong>ID Evolución:</strong> ${this.idEvolucion}</p>
        <p><strong>ID Diagnóstico:</strong> ${this.idDiagnostico}</p>
        <p><strong>ID Receta Digital:</strong> ${this.idRecetaDigital}</p>
      </div>
    `;
  }

  // Método estático para renderizar todas las historias clínicas
  static renderizarTodas() {
    const divCardsFecha = document.getElementById('divCardsFecha');
    divCardsFecha.innerHTML = ''; // Limpiar el contenido previo

    // Renderizar todas las historias clínicas
    divCardsFecha.innerHTML = HistoriaClinica.historiasClinicas
      .map(historia => historia.renderizarDetalles())
      .join('');
  }

  // Método estático para buscar historias clínicas por el CUIL
  static buscarPorCuil(cuil) {
    const resultados = HistoriaClinica.historiasClinicas.filter(historia => 
      historia.paciente && historia.paciente.cuil === cuil
    );

    return resultados;
  }
}

// Ejemplo de uso:
// Crear instancias de Pacientes y Historias Clínicas
const paciente1 = { cuil: '27358147562', nombreCompleto: 'Belen Gerez' };
const paciente2 = { cuil: '27328147563', nombreCompleto: 'Julieta Gerez' };

const historia1 = new HistoriaClinica(1, '1991/10/12', 1, 1, 1, 'Diagnóstico inicial 1', paciente1);
const historia2 = new HistoriaClinica(2, '1992/09/23', 2, 2, 2, 'Diagnóstico inicial 2', paciente2);

// Renderizar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  HistoriaClinica.renderizarTodas();

  // Event listener para el botón de búsqueda por CUIL
  const buttonBuscarCuil = document.getElementById('buttonBuscarCuil');
  buttonBuscarCuil.addEventListener('click', () => {
    const cuil = document.getElementById('idInputBuscarCuil').value.trim();

    if (cuil === '') {
      alert('Por favor ingresa un CUIL para buscar.');
      return;
    }

    const historiasEncontradas = HistoriaClinica.buscarPorCuil(cuil);

    const divResultadoBusqueda = document.getElementById('resultadoBusqueda');
    divResultadoBusqueda.innerHTML = ''; // Limpiar resultados previos

    if (historiasEncontradas.length > 0) {
      // Mostrar las historias encontradas
      divResultadoBusqueda.innerHTML = historiasEncontradas
        .map(historia => historia.renderizarDetalles())
        .join('');
    } else {
      divResultadoBusqueda.innerHTML = '<p>No se encontraron historias clínicas para este CUIL.</p>';
    }
  });
});
