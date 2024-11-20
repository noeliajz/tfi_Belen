
  

// Clase Paciente
class Paciente {
  static pacientes = []; // Array estático para almacenar todos los pacientes

  constructor(id, cuil, nombreCompleto, fechaNacimiento, email, telefono, historiaClinica = null) {
    this.id = id;
    this.cuil = cuil;
    this.nombreCompleto = nombreCompleto;
    this.fechaNacimiento = fechaNacimiento;
    this.email = email;
    this.telefono = telefono;
    this.historiaClinica = historiaClinica; // Relación 1 a 1 con HistoriaClinica

    // Agregar este paciente al array estático
    Paciente.pacientes.push(this);
  }

  // Método para asignar una historia clínica al paciente
  asignarHistoriaClinica(historiaClinica) {
    this.historiaClinica = historiaClinica;
    historiaClinica.asignarPaciente(this);
  }

  // Método para renderizar la tarjeta del paciente
  renderizarTarjeta() {
    return `
      <div class="card m-3 text-center col-12">
        <div class="card-body">
          <h5 class="card-title">${this.nombreCompleto}</h5>
          <p class="card-text">
            CUIL: ${this.cuil} <br>
            Fecha de Nacimiento: ${this.fechaNacimiento} <br>
            Email: ${this.email} <br>
            Teléfono: ${this.telefono}
          </p>
        </div>
      </div>
    `;
  }

  // Método estático para renderizar todas las tarjetas de pacientes
  static renderizarTodos() {
    const divCards = document.getElementById('divCards');
    divCards.innerHTML = ''; // Limpiar el contenido previo

    // Renderizar todas las tarjetas
    divCards.innerHTML = Paciente.pacientes.map(paciente => paciente.renderizarTarjeta()).join('');
  }
}

// Crear instancias de HistoriaClinica (clase supuesta, no incluida en este código)
class HistoriaClinica {
  constructor(nroHC, fechaCreacion, idEvolucion, idDiagnostico, idRecetaDigital, diagnostico, paciente = null) {
    this.nroHC = nroHC;
    this.fechaCreacion = fechaCreacion;
    this.idEvolucion = idEvolucion;
    this.idDiagnostico = idDiagnostico;
    this.idRecetaDigital = idRecetaDigital;
    this.diagnostico = diagnostico;
    this.paciente = paciente;
  }

  asignarPaciente(paciente) {
    this.paciente = paciente;
  }
}

// Crear instancias y relaciones
const historia1 = new HistoriaClinica(1, '1991/10/12', 1, 1, 1, 'Diagnóstico inicial 1');
const historia2 = new HistoriaClinica(2, '1992/09/23', 2, 2, 2, 'Diagnóstico inicial 2');

const paciente1 = new Paciente(1, '27358147562', 'Belen Gerez', '1991/10/12', 'belen@gmail.com', '154543345');
const paciente2 = new Paciente(2, '27328147563', 'Julieta Gerez', '1992/10/12', 'julieta@gmail.com', '1545433452');

// Asignar relaciones 1 a 1
paciente1.asignarHistoriaClinica(historia1);
paciente2.asignarHistoriaClinica(historia2);

// Renderizar al cargar
document.addEventListener('DOMContentLoaded', () => {
  // Renderizar las tarjetas de pacientes en el div con ID divCards
  Paciente.renderizarTodos();
});
