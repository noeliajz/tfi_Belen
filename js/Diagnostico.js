// Archivo: Diagnostico.js

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

  // Método estático para mostrar un diagnóstico específico en una tarjeta
  static mostrarDiagnosticoEnCard(idDiagnostico, divId) {
    const diagnostico = Diagnostico.buscarDiagnostico(parseInt(idDiagnostico));
    const divContainer = document.getElementById(divId);
    if (!divContainer) return;

    // Limpiar contenido previo
    divContainer.innerHTML = '';

    if (diagnostico) {
      // Crear una tarjeta para el diagnóstico encontrado
      const card = document.createElement('div');
      card.classList.add('card', 'm-3');
      card.style.width = '18rem';
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">Diagnóstico #${diagnostico.idDiagnostico}</h5>
          <p class="card-text"><strong>Código:</strong> ${diagnostico.codigoDescripcion}</p>
          <p class="card-text"><strong>Descripción:</strong> ${diagnostico.descripcion}</p>
        </div>
      `;
      divContainer.appendChild(card);
    } else {
      // Mostrar un mensaje si no se encuentra el diagnóstico
      divContainer.innerHTML = '<p>No se encontró un diagnóstico con ese ID.</p>';
    }
  }
}

// Crear algunos diagnósticos
//INSTANCIA DE DIAGNOSTICO:
new Diagnostico(1, 'D001', 'Diagnóstico de hipertensión');
new Diagnostico(2, 'D002', 'Diagnóstico de diabetes');

// Asegurarse de que el código JavaScript se ejecute después de que el DOM esté completamente cargado
// Asegurarse de que el código JavaScript se ejecute después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Evento para el botón de búsqueda
  const buttonBuscarDiagnostico = document.getElementById('buttonBuscarDiagnostico');
  if (buttonBuscarDiagnostico) {
    buttonBuscarDiagnostico.addEventListener('click', () => {
      // Cambiar el ID al correcto
      const idDiagnostico = document.getElementById('idInputIdDiagnostico').value.trim();
      if (idDiagnostico) {
        Diagnostico.mostrarDiagnosticoEnCard(idDiagnostico, 'divCardDiagnostico');
      } else {
        alert('Por favor ingresa un ID de Diagnóstico válido.');
      }
    });
  }
});

