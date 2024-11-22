// Importar la clase Persona correctamente
import { Persona } from './Persona.js';

export class Paciente extends Persona {
  static pacientes = []; // Array estático para almacenar todos los pacientes

  constructor(id, cuil, nombreCompleto, fechaNacimiento, email, telefono, nroAfiliado) {
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

  // Método estático para renderizar los pacientes en el div con id="divCardsPacientesPrincipal"
  static renderizarPacientes(divId) {
    const divCards = document.getElementById(divId);
    if (!divCards) return; // Asegúrate de que el div exista antes de continuar
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

  // Método estático para buscar un paciente por su CUIL
  static buscarPaciente(cuil) {
    // Filtra pacientes por CUIL
    const paciente = Paciente.pacientes.find(paciente => paciente.cuil === cuil);

    // Limpiar el div antes de mostrar resultados
    const divCardsFecha = document.getElementById('divCardsFecha');
    if (!divCardsFecha) return; // Asegúrate de que el div exista antes de continuar
    divCardsFecha.innerHTML = ''; // Limpiar contenido previo

    if (paciente) {
      // Crear una tarjeta con el paciente encontrado
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
      divCardsFecha.appendChild(card);
    } else {
      // Mostrar mensaje si no se encuentra el paciente
      divCardsFecha.innerHTML = '<p>No se encontró un paciente con ese CUIL.</p>';
    }
  }
}

// Inicializar pacientes predefinidos al cargar la clase
Paciente.inicializarPacientes();

// Asegurarse de que el código JavaScript se ejecute después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Renderizar pacientes en el div correcto
  Paciente.renderizarPacientes('divCardsPacientesPrincipal');

  // Evento para el botón de búsqueda
  const buttonBuscarCuil = document.getElementById('buttonBuscarCuil');
  if (buttonBuscarCuil) {
    buttonBuscarCuil.addEventListener('click', () => {
      const cuil = document.getElementById('idInputBuscarCuil').value.trim(); // Asegúrate de quitar espacios innecesarios
      if (cuil) {
        Paciente.buscarPaciente(cuil);
      } else {
        alert('Por favor ingresa un CUIL válido.');
      }
    });
  }
});
