import { Paciente } from './Paciente.js';
import { Diagnostico } from './Diagnostico.js';

class HistoriaClinica {
  static historiasClinicas = []; // Array estático para almacenar todas las historias clínicas

  constructor(nroHC, fechaCreacion, idEvolucion, idDiagnostico, idRecetaDigital, diagnostico, paciente) {
    this.paciente = paciente instanceof Paciente ? paciente : null;
    if (!this.paciente) {
      throw new Error("El paciente debe ser una instancia de la clase Paciente.");
    }

    this.diagnostico = diagnostico;
    this.nroHC = nroHC;
    this.fechaCreacion = fechaCreacion;
    this.idEvolucion = idEvolucion;
    this.idRecetaDigital = idRecetaDigital;

    // Agregar esta historia clínica al array estático
    HistoriaClinica.historiasClinicas.push(this);
  }

  // Método estático para renderizar las historias clínicas en el div con id="divHistorias"
  static renderizarHistorias() {
    const divHistorias = document.getElementById('divHistorias');
    divHistorias.innerHTML = ''; // Limpiar contenido previo

    // Mostrar cada historia clínica en una tarjeta
    HistoriaClinica.historiasClinicas.forEach((historia) => {
      const card = document.createElement('div');
      card.classList.add('card', 'm-3');
      card.style.width = '18rem';
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">Historia Clínica: ${historia.nroHC}</h5>
          <p class="card-text"><strong>Paciente:</strong> ${historia.paciente.nombreCompleto}</p>
          <p class="card-text"><strong>Diagnóstico:</strong> ${historia.diagnostico.descripcion}</p>
          <p class="card-text"><strong>Fecha de Creación:</strong> ${historia.fechaCreacion}</p>
        </div>
      `;
      divHistorias.appendChild(card);
    });
  }

  // Método estático para agregar un nuevo diagnóstico a una nueva historia clínica
  static agregarNuevoDiagnostico(nroHC, fechaCreacion, descripcionDiagnostico, codigoDiagnostico, paciente) {
    // Crear un nuevo diagnóstico con los datos ingresados
    const nuevoDiagnostico = new Diagnostico(codigoDiagnostico, codigoDiagnostico, descripcionDiagnostico);
    
    // Crear una nueva historia clínica con el diagnóstico y el paciente
    new HistoriaClinica(nroHC, fechaCreacion, 'Evolución', nuevoDiagnostico.idDiagnostico, 'RecetaDigital', nuevoDiagnostico, paciente);

    // Renderizar las historias clínicas
    HistoriaClinica.renderizarHistorias();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Crear algunos pacientes
  const paciente1 = new Paciente(1, '27358147562', 'Belen Gerez', '1990-05-12', 'belen.gerez@example.com', '123456789', 'A123');
  const paciente2 = new Paciente(2, '27328147563', 'Julieta Gerez', '1992-03-23', 'julieta.gerez@example.com', '987654321', 'B456');

  // Crear algunas historias clínicas iniciales
  const diagnostico1 = new Diagnostico(1, 'D001', 'Diagnóstico de hipertensión');
  const diagnostico2 = new Diagnostico(2, 'D002', 'Diagnóstico de diabetes');
  
  new HistoriaClinica(1, '2024-11-20', 'Evolución1', diagnostico1.idDiagnostico, 'Receta1', diagnostico1, paciente1);
  new HistoriaClinica(2, '2024-11-21', 'Evolución2', diagnostico2.idDiagnostico, 'Receta2', diagnostico2, paciente2);

  // Renderizar las historias clínicas en el div
  HistoriaClinica.renderizarHistorias();

  // Agregar un diagnóstico nuevo desde el formulario
  const buttonAgregarDiagnostico = document.getElementById('buttonNuevoDiagnostico');
  buttonAgregarDiagnostico.addEventListener('click', () => {
    const descripcionDiagnostico = document.getElementById('idInputNuevoDiagnostico').value; // Valor del input
    const nroHC = 3; // Número de la nueva historia clínica
    const fechaCreacion = new Date().toLocaleDateString(); // Fecha actual
    const codigoDiagnostico = 'D003'; // Código del nuevo diagnóstico
    const paciente = paciente1; // Seleccionar el paciente al que se le agrega el diagnóstico

    // Llamar al método para agregar el nuevo diagnóstico a la historia clínica
    HistoriaClinica.agregarNuevoDiagnostico(nroHC, fechaCreacion, descripcionDiagnostico, codigoDiagnostico, paciente);
  });
});
