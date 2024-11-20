/* // Array de historia clínica
const arrayHistoriaClinica = [
  { 
      nroHC: 1,
      fechaCreacion: '1991/10/12',
      idEvolucion: 1,
      idDiagnostico: 1,
      idRecetaDigital: 1,
      diagnostico: "Diagnóstico inicial 1"
  },
  { 
      nroHC: 2,
      fechaCreacion: '1992/09/23',
      idEvolucion: 2,
      idDiagnostico: 2,
      idRecetaDigital: 2,
      diagnostico: "Diagnóstico inicial 2"
  }
];

// Selecciona el contenedor donde se mostrarán las tarjetas
const divCardsFecha = document.getElementById('divCardsFecha');

// Añade clases para que las cards se apilen verticalmente
divCardsFecha.classList.add('d-flex', 'flex-column', 'align-items-start');

// Función para renderizar las tarjetas en el contenedor usando el arrayHistoriaClinica
const renderCards = () => {
  divCardsFecha.innerHTML = arrayHistoriaClinica
      .map(
          (hc) => `
              <div class="card m-3 col-8 p-3">
                  <h5>Fecha: ${hc.fechaCreacion}</h5>
                  <p>Diagnóstico: ${hc.diagnostico}</p>
              </div>
          `
      )
      .join('');
};

// Renderiza las tarjetas iniciales
renderCards();

// Función para agregar un nuevo diagnóstico
const realizarEvolucion = () => {
  // Obtener el valor del input
  const diagnostico = document.getElementById('idInputSearch').value.trim();

  if (diagnostico === '') {
      alert('Por favor ingresa un diagnóstico.');
      return;
  }

  // Crear un nuevo objeto de historia clínica
  const nuevaHistoria = {
      nroHC: arrayHistoriaClinica.length + 1,  // Incrementa el número de historia clínica
      fechaCreacion: new Date().toLocaleDateString(),  // Fecha actual
      idEvolucion: null,
      idDiagnostico: null,
      idRecetaDigital: null,
      diagnostico: diagnostico // Diagnóstico ingresado
  };

  // Agregar el nuevo diagnóstico al array
  arrayHistoriaClinica.push(nuevaHistoria);

  // Limpiar el campo de búsqued/*  */a
  /* document.getElementById('idInputSearch').value = ''; */

  // Renderizar nuevamente las tarjetas
 /*  renderCards();
}; */

// Asignar el evento al botón
/* const buttonRegistrar = document.getElementById('buttonNuevoDiagnostico');
buttonRegistrar.addEventListener('click', realizarEvolucion);
 */ 