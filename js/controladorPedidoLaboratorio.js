import { Paciente } from "./RepositorioPaciente.js";
import { Medico } from "./Medico.js";

export class PedidoLaboratorio {
  constructor(fechaHora, tipoAnalisis, medico, paciente) {
    this.fechaHora = fechaHora;
    this.tipoAnalisis = tipoAnalisis;
    this.medico = medico;
    this.paciente = paciente;
  }

  obtenerDescripcion() {
    return `
      Fecha y Hora: ${this.fechaHora} <br>
      Paciente: ${this.paciente.nombreCompleto} <br>
      Número de afiliado: ${this.paciente.nroAfiliado} <br>
      Tipo de Análisis: ${this.tipoAnalisis} <br>
      Médico: ${this.medico.nombreCompleto}
    `;
  }
}

const pedidosLaboratorio = [];

const pacientes = [
  new Paciente(1, "27358147562", "Belen Gerez", "1990-05-12", "belen.gerez@example.com", "123456789", "A123", "43203765"),
  new Paciente(2, "27328147563", "Julieta Gerez", "1992-03-23", "julieta.gerez@example.com", "987654321", "B456", "43203674")
];

const medicos = [
  new Medico(1, "27358147562", "Martina Gerez", "1990-05-12", "martina.gerez@example.com", "123456712", "1234", "Dermatología"),
  new Medico(2, "27328147563", "Julio Gomez", "1992-03-23", "julio.gomez@example.com", "987654311", "5678", "Cardiología")
];

document.addEventListener("DOMContentLoaded", () => {
  const buttonNuevoPedidoMedico = document.getElementById("buttonNuevoPedidoMedico");
  const cardPedidoMedico = document.getElementById("cardPedidoMedico");
  const inputFechaHora = document.getElementById("idInputDate");
  const inputTipoAnalisis = document.getElementById("idInputTipoAnalisis");

  function agregarPedidoLaboratorio() {
    const fechaHora = inputFechaHora.value.trim();
    const tipoAnalisis = inputTipoAnalisis.value.trim();

    // Validar inputs
    if (!fechaHora || !tipoAnalisis) {
      alert("Por favor complete todos los campos antes de agregar un nuevo pedido.");
      return;
    }

    const pacienteSeleccionado = pacientes[Math.floor(Math.random() * pacientes.length)];
    const medicoSeleccionado = medicos[Math.floor(Math.random() * medicos.length)];

    const nuevoPedido = new PedidoLaboratorio(fechaHora, tipoAnalisis, medicoSeleccionado, pacienteSeleccionado);
    pedidosLaboratorio.push(nuevoPedido);
    renderizarRecetas();

    // Limpiar los campos
    inputFechaHora.value = "";
    inputTipoAnalisis.value = "";
  }

  function renderizarRecetas() {
    cardPedidoMedico.innerHTML = "";

    if (pedidosLaboratorio.length === 0) {
      cardPedidoMedico.innerHTML = '<p>No hay pedidos de laboratorio registrados.</p>';
    } else {
      pedidosLaboratorio.forEach((pedido, index) => {
        const card = `
          <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Pedido #${index + 1}</h5>
              <p class="card-text"><strong>Fecha y Hora:</strong> ${pedido.fechaHora}</p>
              <p class="card-text"><strong>Paciente:</strong> ${pedido.paciente.nombreCompleto}</p>
              <p class="card-text"><strong>Número de afiliado:</strong> ${pedido.paciente.nroAfiliado}</p>
              <p class="card-text"><strong>Tipo de análisis:</strong> ${pedido.tipoAnalisis}</p>
              <p class="card-text"><strong>Médico:</strong> ${pedido.medico.nombreCompleto}</p>
            </div>
          </div>`;
        cardPedidoMedico.innerHTML += card;
      });
    }
  }

  buttonNuevoPedidoMedico.addEventListener("click", agregarPedidoLaboratorio);
  renderizarRecetas();
});
