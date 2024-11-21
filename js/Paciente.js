import { Persona } from './persona.js'; // Importar la clase Persona correctamente

class Paciente extends Persona {
  static pacientes = []; // Array estático para almacenar todos los pacientes

  constructor(id, cuil, nombreCompleto, fechaNacimiento, email, telefono, nroAfiliado) {
    // Llamar al constructor de la clase base (Persona)
    super(id, cuil, nombreCompleto, fechaNacimiento, email, telefono);
    this.nroAfiliado = nroAfiliado;

    // Agregar este paciente al array estático
    Paciente.pacientes.push(this);
  }

  // Método estático para inicializar pacientes predefinidos
  static inicializarPacientes() {
    new Paciente(1, '27358147562', 'Belen Gerez', '1990-05-12', 'belen.gerez@example.com', '123456789', 'A123');
    new Paciente(2, '27328147563', 'Julieta Gerez', '1992-03-23', 'julieta.gerez@example.com', '987654321', 'B456');
    new Paciente(3, '27348147564', 'Carlos Gomez', '1985-11-14', 'carlos.gomez@example.com', '456789123', 'C789');
  }

  // Método estático para renderizar los pacientes en el div con id="divCards"
  static renderizarPacientes() {
    const divCards = document.getElementById('divCards');
    divCards.innerHTML = ''; // Limpiar contenido previo

    Paciente.pacientes.forEach((paciente) => {
      const card = document.createElement('div');
      card.classList.add('card', 'm-3');
      card.style.width = '18rem';
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${paciente.nombreCompleto}</h5>
          <p class="card-text"><strong>CUIL:</strong> ${paciente.cuil}</p>
          <p class="card-text"><strong>Fecha de Nacimiento:</strong> ${paciente.fechaNacimiento}</p>
          <p class="card-text"><strong>Email:</strong> ${paciente.email}</p>
          <p class="card-text"><strong>Teléfono:</strong> ${paciente.telefono}</p>
          <p class="card-text"><strong>Número de Afiliado:</strong> ${paciente.nroAfiliado}</p>
        </div>
      `;
      divCards.appendChild(card);
    });
  }
}

// Inicializar pacientes predefinidos al cargar la clase
Paciente.inicializarPacientes();

// Renderizar pacientes en el div con id="divCards" cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
  Paciente.renderizarPacientes();
});
