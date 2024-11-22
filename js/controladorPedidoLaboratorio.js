// Clase PedidoLaboratorio
class PedidoLaboratorio {
  constructor(fechaHora, tipoAnalisis) {
    this.fechaHora = fechaHora;  // Fecha y hora del pedido
    this.tipoAnalisis = tipoAnalisis;  // Tipo de análisis solicitado
  }

  // Método para obtener la descripción del pedido de laboratorio
  obtenerDescripcion() {
    return `
      Fecha y Hora: ${this.fechaHora} <br>
      Tipo de Análisis: ${this.tipoAnalisis}
    `;
  }
}

// Array para almacenar los pedidos
const pedidosLaboratorio = [];

// Referencias a los elementos del DOM
const buttonNuevoPedidoMedico = document.getElementById('buttonNuevoPedidoMedico');
const inputFechaHora = document.getElementById('idInputDate');
const inputTipoAnalisis = document.getElementById('idInputTipoAnalisis');
const cardPedidoMedico = document.getElementById('cardPedidoMedico');

// Función para agregar un nuevo pedido de laboratorio
function agregarPedidoLaboratorio() {
  // Obtener los datos ingresados
  const fechaHora = inputFechaHora.value.trim();
  const tipoAnalisis = inputTipoAnalisis.value.trim();

  // Verificar que los campos no estén vacíos
  if (!fechaHora || !tipoAnalisis) {
    alert('Por favor, complete todos los campos antes de agregar el pedido.');
    return;
  }

  // Crear un nuevo pedido de laboratorio
  const nuevoPedido = new PedidoLaboratorio(fechaHora, tipoAnalisis);

  // Agregar el pedido al array
  pedidosLaboratorio.push(nuevoPedido);

  // Mostrar los pedidos en la interfaz
  mostrarPedidos();

  // Limpiar los campos del formulario
  inputFechaHora.value = '';
  inputTipoAnalisis.value = '';
}

// Función para mostrar los pedidos en la interfaz
function mostrarPedidos() {
  // Limpiar el contenido previo
  cardPedidoMedico.innerHTML = '';

  // Recorrer el array de pedidos y crear tarjetas para cada uno
  pedidosLaboratorio.forEach((pedido, index) => {
    const pedidoCard = document.createElement('div');
    pedidoCard.className = 'card mb-3';
    pedidoCard.style = 'max-width: 540px;';

    pedidoCard.innerHTML = `
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <h5 class="card-title">Pedido de Laboratorio #${index + 1}</h5>
            <p class="card-text"><strong>Fecha y Hora:</strong> ${pedido.fechaHora}</p>
            <p class="card-text"><strong>Tipo de Análisis:</strong> ${pedido.tipoAnalisis}</p>
          </div>
        </div>
      </div>
    `;

    // Añadir la tarjeta al contenedor
    cardPedidoMedico.appendChild(pedidoCard);
  });
}

// Asignar evento al botón para agregar un nuevo pedido
buttonNuevoPedidoMedico.addEventListener('click', agregarPedidoLaboratorio);
