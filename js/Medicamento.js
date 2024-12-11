// Archivo: Medicamento.js

class Medicamento {
  constructor(nombreComercial, nombreGenerico) {
    this.nombreComercial = nombreComercial;
    this.nombreGenerico = nombreGenerico;

    if (!this.nombreComercial || !this.nombreGenerico) {
      throw new Error("El nombre comercial y el nombre genérico son obligatorios.");
    }
  }

  // Método para obtener la descripción del medicamento
  obtenerDescripcion() {
    return `Medicamento: ${this.nombreComercial} (Genérico: ${this.nombreGenerico})`;
  }

  // Método estático para buscar un medicamento por nombre comercial o genérico
  static buscarMedicamento(nombreComercial, nombreGenerico) {
    const nombreComercialBuscado = nombreComercial.toLowerCase();
    const nombreGenericoBuscado = nombreGenerico.toLowerCase();

    return medicamentos.filter((medicamento) => {
      const coincideComercial = medicamento.nombreComercial.toLowerCase().includes(nombreComercialBuscado);
      const coincideGenerico = medicamento.nombreGenerico.toLowerCase().includes(nombreGenericoBuscado);

      // Retorna verdadero si uno o ambos criterios coinciden
      return (
        (nombreComercial && coincideComercial) ||
        (nombreGenerico && coincideGenerico)
      );
    });
  }
}

// Array de medicamentos predefinidos
const medicamentos = [
  new Medicamento('Tylenol', 'Paracetamol'),
  new Medicamento('Advil', 'Ibuprofeno'),
  new Medicamento('Aspirina', 'Ácido acetilsalicílico'),
  new Medicamento('Zyrtec', 'Cetirizina'),
  new Medicamento('Nexium', 'Esomeprazol')
];

export { Medicamento, medicamentos };


document.addEventListener('DOMContentLoaded', () => {
  const buttonBuscarNombres = document.getElementById('buttonBuscarNombres');
  const inputNombreGenerico = document.getElementById('idInputNombreGenerico');
  const inputNombreComercial = document.getElementById('idInputNombreComercial');
  const divMedicamentos = document.getElementById('divMedicamentos');

  // Evento para buscar medicamentos por nombre comercial o genérico
  buttonBuscarNombres.addEventListener('click', () => {
    const nombreGenerico = inputNombreGenerico.value.trim();
    const nombreComercial = inputNombreComercial.value.trim();
    
    if (nombreGenerico || nombreComercial) {
      // Buscar por nombre comercial o nombre genérico
      const resultados = Medicamento.buscarMedicamento(nombreComercial, nombreGenerico);
      
      // Limpiar el contenido anterior
      divMedicamentos.innerHTML = '';

      if (resultados.length > 0) {
        // Mostrar cada medicamento encontrado
        resultados.forEach((medicamento) => {
          const card = document.createElement('div');
          card.classList.add('card', 'm-3');
          card.style.width = '18rem';
          card.innerHTML = `
            <div class="card-body">
              <h5 class="card-title"><strong>Nombre generico:</strong>${medicamento.nombreComercial}</h5>
              <p class="card-text"><strong>Nombre comercial:</strong> ${medicamento.nombreGenerico}</p>
            </div>
          `;
          divMedicamentos.appendChild(card);
        });
      } else {
        // Mostrar mensaje si no se encuentran medicamentos
        divMedicamentos.innerHTML = '<p>No se encontraron medicamentos con ese nombre.</p>';
      }
    } else {
      alert('Por favor, ingrese un nombre comercial o genérico.');
    }
  });
});