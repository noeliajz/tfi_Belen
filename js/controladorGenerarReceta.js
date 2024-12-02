import { Medicamento } from '../js/Medicamento.js';
import { Medico } from '../js/Medico.js';
import {Evolucion} from '../js/evolucion.js'
import { Paciente } from './RepositorioPaciente.js';
export class RecetaDigital {
    constructor(fechaHora, dosis, estado, medicamento, medico, descripcion, evolucion, paciente) {
        this.fechaHora = fechaHora;
        this.dosis = dosis;
        this.estado = estado;
        this.medicamento = medicamento;
        this.medico = medico;
        this.descripcion = descripcion;
        this.evolucion = evolucion;
        this.paciente = paciente;
    }

    mostrarDetalles() {
        console.log(`Paciente: ${this.paciente.nombreCompleto} `);
        console.log(`Fecha y Hora: ${this.fechaHora}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Dosis: ${this.dosis}`);
        console.log(`Medicamento (Genérico): ${this.medicamento.nombreGenerico}`);
        console.log(`Medicamento (Comercial): ${this.medicamento.nombreComercial}`);
        console.log(`Médico: ${this.medico.nombreCompleto} (Matrícula: ${this.medico.matricula})`);

     }
}

const recetaDigital = [];
const medicamentos = [
    new Medicamento('Tylenol', 'Paracetamol'),
    new Medicamento('Advil', 'Ibuprofeno'),
    new Medicamento('Aspirina', 'Ácido acetilsalicílico'),
    new Medicamento('Zyrtec', 'Cetirizina'),
    new Medicamento('Nexium', 'Esomeprazol')
];

function buscarMedicamentoPorNombreGenerico(nombreGenerico) {
    return medicamentos.find(medicamento => 
        medicamento?.nombreGenerico?.toLowerCase() === nombreGenerico.toLowerCase()
    );
}

function buscarMedicamentoPorNombreComercial(nombreComercial) {
    return medicamentos.find(medicamento => 
        medicamento?.nombreComercial?.toLowerCase() === nombreComercial.toLowerCase()
    );
}

const medicos = [
    new Medico(1, '27358147562', 'Martina Gerez', '1990-05-12', 'martina.gerez@example.com', '123456712', '1234', 'Dermatología'),
    new Medico(2, '27328147563', 'Julio Gomez', '1992-03-23', 'julio.gomez@example.com', '987654311', '5678', 'Cardiología')
];

function buscarMedicoPorMatricula(matricula) {
    return medicos.find(medico => String(medico.matricula) === matricula);
}

const pacientes = [
    new Paciente(1, '27358147562', 'Belen Gerez', '1990-05-12', 'belen.gerez@example.com', '123456789', 'A123', '43203765'),
    new Paciente(2, '27328147563', 'Julieta Gerez', '1992-03-23', 'julieta.gerez@example.com', '987654321', 'B456', '43203674')
];
function renderizarRecetas() {
    const divCardRecetas = document.getElementById('divCardRecetas');
    divCardRecetas.innerHTML = '';

    if (recetaDigital.length === 0) {
        divCardRecetas.innerHTML = '<p>No hay recetas registradas.</p>';
    } else {
        recetaDigital.forEach((receta, index) => {
            const card = `
                <div class="card m-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Receta ${index + 1}</h5>
                        <p class="card-text"><strong>Paciente:</strong> ${receta.paciente.nombreCompleto} </p>
                        <p class="card-text"><strong>Fecha y Hora:</strong> ${receta.fechaHora}</p>
                        <p class="card-text"><strong>Descripción:</strong> ${receta.descripcion}</p>
                        <p class="card-text"><strong>Dosis:</strong> ${receta.dosis}</p>
                        <p class="card-text"><strong>Medicamento:</strong> ${receta.medicamento.nombreGenerico} (${receta.medicamento.nombreComercial})</p>
                        <p class="card-text"><strong>Médico:</strong> ${receta.medico.nombreCompleto} (Matrícula: ${receta.medico.matricula})</p>

               
                        </div>
                </div>`;
            divCardRecetas.innerHTML += card;
        });
    }
}

function mostrarMedicoEnCard(medico) {
    const divMedicos = document.getElementById('divMedicos');
    divMedicos.innerHTML = `
        <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Médico Encontrado</h5>
                <p class="card-text"><strong>Nombre:</strong> ${medico.nombreCompleto}</p>
                <p class="card-text"><strong>Matrícula:</strong> ${medico.matricula}</p>
                <p class="card-text"><strong>Especialidad:</strong> ${medico.especialidad}</p>
                <p class="card-text"><strong>Email:</strong> ${medico.email}</p>
                <p class="card-text"><strong>Teléfono:</strong> ${medico.telefono}</p>
            </div>
        </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
    const buttonNuevaReceta = document.getElementById('buttonNuevaReceta');
    const buttonBuscarMedico = document.getElementById('buttonBuscarMedico');
    const inputDescripcion = document.getElementById('idInputNuevoDescripcion');
    const inputDosis = document.getElementById('idInputNuevoDosis');
    const inputNombreGenerico = document.getElementById('idInputNombreGenerico');
    const inputNombreComercial = document.getElementById('idInputNombreComercial');
    const idInputBuscarMedico = document.getElementById('idInputBuscarMedico');

    buttonNuevaReceta.addEventListener('click', agregarReceta);
    buttonBuscarMedico.addEventListener('click', () => {
        const matricula = idInputBuscarMedico.value.trim();
        const medico = buscarMedicoPorMatricula(matricula);
        if (medico) {
            mostrarMedicoEnCard(medico);
        } else {
            document.getElementById('divMedicos').innerHTML = `<p>Médico no encontrado.</p>`;
        }
    });

    function agregarReceta() {
        const descripcion = inputDescripcion.value.trim();
        const dosis = inputDosis.value.trim();
        const nombreGenerico = inputNombreGenerico.value.trim();
        const nombreComercial = inputNombreComercial.value.trim();
        const matriculaMedico = idInputBuscarMedico.value.trim();
        const fechaHora = new Date().toLocaleString();
        
        // Simular selección de paciente por ID (puede cambiarse según la lógica del formulario)
        const pacienteId = 0;  // Puedes obtener esto del formulario o de otro input.
        const pacienteSeleccionado = pacientes[pacienteId];
    
        if (!descripcion || !dosis || !nombreGenerico || !nombreComercial || !matriculaMedico) {
            alert('Por favor, complete todos los campos.');
            return;
        }
    
        const medicamentoEncontrado = buscarMedicamentoPorNombreComercial(nombreComercial) || buscarMedicamentoPorNombreGenerico(nombreGenerico);
        if (!medicamentoEncontrado) {
            alert('Medicamento no encontrado en la base de datos.');
            return;
        }
    
        const medicoEncontrado = buscarMedicoPorMatricula(matriculaMedico);
        if (!medicoEncontrado) {
            alert('Médico no encontrado en la base de datos.');
            return;
        }
    
        if (!pacienteSeleccionado) {
            alert('Paciente no encontrado.');
            return;
        }
    
        const nuevaReceta = new RecetaDigital(fechaHora, dosis, 'pendiente', medicamentoEncontrado, medicoEncontrado, descripcion, null, pacienteSeleccionado);
        recetaDigital.push(nuevaReceta);
        renderizarRecetas();
        alert('Receta agregada exitosamente.');
    }
    
});

