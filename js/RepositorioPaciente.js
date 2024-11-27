// Importar la clase Persona correctamente
import { Persona } from './Persona.js';

export class Paciente extends Persona {
  static pacientes = []; // Array estático para almacenar todos los pacientes

  constructor(id, cuil, nombreCompleto, fechaNacimiento, email, telefono, nroAfiliado, dni) {
    super(id, cuil, nombreCompleto, fechaNacimiento, email, telefono, dni);
    this.nroAfiliado = nroAfiliado;

    // Agregar este paciente al array estático
    Paciente.pacientes.push(this);
  }

  //INSTANCIA: Método estático para inicializar pacientes predefinidos
  static inicializarPacientes() {
    new Paciente(1, '27358147562', 'Belen Gerez', '1990-05-12', 'belen.gerez@example.com', '123456789', 'A123', '43203765');
    new Paciente(2, '27328147563', 'Julieta Gerez', '1992-03-23', 'julieta.gerez@example.com', '987654321', 'B456', '43203674');
    new Paciente(3, '27348147564', 'Carlos Gomez', '1985-11-14', 'carlos.gomez@example.com', '456789123', 'C789', '43203766');
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
  static buscarPaciente(dni) {
    const paciente = Paciente.pacientes.find(paciente => paciente.dni === dni);
    
    // Asegúrate de que el div exista antes de continuar
    const divCardsFecha = document.getElementById('divCardEvoluciones');
    if (!divCardsFecha) return; 
    
    divCardsFecha.innerHTML = ''; // Limpiar contenido previo
  
    if (paciente) {
      const card = document.createElement('div');
      card.classList.add('card', 'm-3');
      card.style.width = '18rem';
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${paciente.nombreCompleto}</h5>
          <p class="card-text"><strong>DNI:</strong> ${paciente.dni}</p>
          <p class="card-text"><strong>Fecha de Nacimiento:</strong> ${paciente.fechaNacimiento}</p>
          <p class="card-text"><strong>Email:</strong> ${paciente.email}</p>
          <p class="card-text"><strong>Teléfono:</strong> ${paciente.telefono}</p>
          <p class="card-text"><strong>Número de Afiliado:</strong> ${paciente.nroAfiliado}</p>
        </div>
      `;
      divCardsFecha.appendChild(card);
    } else {
      divCardsFecha.innerHTML = '<p>No se encontró un paciente con ese DNI.</p>';
    }
  }
  
}

// Inicializar pacientes predefinidos al cargar la clase
Paciente.inicializarPacientes();

// Asegurarse de que el código JavaScript se ejecute después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  Paciente.inicializarPacientes();
  Paciente.renderizarPacientes('divCardsPacientesPrincipal');

  const buttonBuscarDNI = document.getElementById('buttonBuscarDNI');
  const inputBuscarDNI = document.getElementById('idInputBuscarDNI');
  
  if (buttonBuscarDNI && inputBuscarDNI) {
    buttonBuscarDNI.addEventListener('click', () => {
      const dni = inputBuscarDNI.value.trim();
      if (dni) {
        Paciente.buscarPaciente(dni);
      } else {
        alert('Por favor ingresa un DNI válido.');
      }
    });
  }
});

