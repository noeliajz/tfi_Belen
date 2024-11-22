// Importar la clase Persona correctamente
import { Persona } from './Persona.js';

export class Medico extends Persona {
  static medicos = []; // Array estático para almacenar todos los médicos
  
  constructor(id, cuil, nombreCompleto, fechaNacimiento, email, telefono, matricula, especialidad) {
    super(id, cuil, nombreCompleto, fechaNacimiento, email, telefono);
    this.matricula = matricula;
    this.especialidad = especialidad;
    
    // Agregar este médico al array estático
    Medico.medicos.push(this);
  }

  // Método estático para inicializar médicos predefinidos
  static inicializarMedicos() {
    new Medico(1, '27358147562', 'Martina Gerez', '1990-05-12', 'martina.gerez@example.com', '123456712', '1234', 'Dermatología');
    new Medico(2, '27328147563', 'Juliio Gomez', '1992-03-23', 'julio.gerez@example.com', '987654311', '5678', 'Cardiología');
    new Medico(3, '27348147564', 'Cesar Gomez', '1985-11-14', 'cesar.gomez@example.com', '456789144', '91011', 'Neurología');
  }

  // Método estático para buscar un médico por matrícula
  static buscarMedico(matricula) {
    // Filtra médicos por matrícula
    const medico = Medico.medicos.find(medico => medico.matricula === matricula);
    
    // Limpiar el div antes de mostrar resultados
    const divMedicos = document.getElementById('divMedicos');
    if (!divMedicos) return; // Asegúrate de que el div exista antes de continuar
    divMedicos.innerHTML = ''; // Limpiar contenido previo
    
    if (medico) {
      // Crear una tarjeta con el médico encontrado
      const card = document.createElement('div');
      card.classList.add('card', 'm-3');
      card.style.width = '18rem';
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${medico.nombreCompleto}</h5>
          <p class="card-text"><strong>Matrícula:</strong> ${medico.matricula}</p>
          <p class="card-text"><strong>Especialidad:</strong> ${medico.especialidad}</p>
          <p class="card-text"><strong>Correo:</strong> ${medico.email}</p>
        </div>
      `;
      divMedicos.appendChild(card);
    } else {
      // Mostrar mensaje si no se encuentra el médico
      divMedicos.innerHTML = '<p>No se encontró un médico con esa matrícula.</p>';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Capturar el botón de búsqueda y el campo de entrada
  const buttonBuscarMedico = document.getElementById('buttonBuscarMedico');
  const idInputBuscarMedico = document.getElementById('idInputBuscarMedico');
  
  // Evento para buscar médico al hacer clic en el botón
  buttonBuscarMedico.addEventListener('click', () => {
    const matricula = idInputBuscarMedico.value.trim();
    if (matricula) {
      Medico.buscarMedico(matricula);
    } else {
      alert('Por favor, ingrese una matrícula.');
    }
  });
});

// Inicializar médicos predefinidos al cargar la clase
Medico.inicializarMedicos();
