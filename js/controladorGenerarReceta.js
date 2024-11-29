import { Medicamento } from '../js/Medicamento.js'; // Corrección del nombre de la clase
import {Medico} from '../js/Medico.js'
export class RecetaDigital {
    constructor(fechaHora, dosis, estado, medicamento, medico, descripcion) {
        this.fechaHora = fechaHora;
        this.dosis = dosis;
        this.estado = estado;
        this.medicamento = medicamento;
        this.medico = medico
        this.descripcion = descripcion
    }

    mostrarDetalles() {
        console.log(`Fecha y Hora: ${this.fechaHora}`);
        console.log(`Descripción: ${this.descripcion}`)
        console.log(`Dosis: ${this.dosis}`);
        console.log(`Medicamento: ${this.medicamento.nombreGenerico}`);
        console.log(`Medicamento: ${this.medicamento.nombreComercial}`);
        console.log(`Medico: ${this.medico.matricula}`);

    }
}

// Array para almacenar las recetas digitales
const recetaDigital = [];

// Inicialización correcta de los medicamentos
const medicamentos = [
    new Medicamento('Tylenol', 'Paracetamol'),
    new Medicamento('Advil', 'Ibuprofeno'),
    new Medicamento('Aspirina', 'Ácido acetilsalicílico'),
    new Medicamento('Zyrtec', 'Cetirizina'),
    new Medicamento('Nexium', 'Esomeprazol')
];


function buscarMedicamentoPorNombreGenerico(nombreGenerico) {
    return medicamentos.find(medicamento => 
        medicamento && 
        medicamento.nombreGenerico &&
        medicamento.nombreGenerico.toLowerCase() === nombreGenerico.toLowerCase()
    );
}

function buscarMedicamentoPorNombreComercial(nombreComercial) {
    return medicamentos.find(medicamento => 
        medicamento && 
        medicamento.nombreMedicamento &&
        medicamento.nombreMedicamento.toLowerCase() === nombreComercial.toLowerCase()
    );
}

const medicos = [
    new Medico(1, '27358147562', 'Martina Gerez', '1990-05-12', 'martina.gerez@example.com', '123456712', '1234', 'Dermatología'),
    new Medico(2, '27328147563', 'Juliio Gomez', '1992-03-23', 'julio.gerez@example.com', '987654311', '5678', 'Cardiología')
  ];
  // Buscar médico por ID (revisar atributo correcto)
  function buscarMedicoPorMatricula(matricula) {
    return medicos.find(medico => medico.matricula === matricula);
}


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
                        <p class="card-text"><strong>Fecha y Hora:</strong> ${receta.fechaHora}</p>
                        <p class="card-text"><strong>Descripción:</strong> ${receta.descripcion}</p>
                        <p class="card-text"><strong>Dosis:</strong> ${receta.dosis}</p>
                        <p class="card-text"><strong>Nombre del medicamento comercial y generico:</strong> ${receta.medicamento.nombreGenerico} (${receta.medicamento.nombreComercial})</p>
                        <p class="card-text"><strong>Matricula del médico:</strong> ${receta.medico.matricula} </p>

                        </div>
                </div>`;
            divCardRecetas.innerHTML += card;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttonNuevaReceta = document.getElementById('buttonNuevaReceta');
    const inputDescripcion = document.getElementById('idInputNuevoDescripcion');
    const inputDosis = document.getElementById('idInputNuevoDosis');
    const inputNombreGenerico = document.getElementById('idInputNombreGenerico');
    const inputNombreComercial = document.getElementById('idInputNombreComercial');
    const idInputBuscarMedico = document.getElementById('idInputBuscarMedico'); // Input para la matrícula del médico

    if (!buttonNuevaReceta) {
        console.error("❌ Botón 'Nueva Receta' no encontrado.");
        return;
    }

    buttonNuevaReceta.addEventListener('click', () => {
        agregarReceta();
    });

    function agregarReceta() {
        const descripcion = inputDescripcion.value.trim();
        const dosis = inputDosis.value.trim();
        const nombreGenerico = inputNombreGenerico.value.trim();
        const nombreComercial = inputNombreComercial.value.trim();
        const matriculaMedico = idInputBuscarMedico.value.trim(); // Captura correcta de matrícula
        const fechaHora = new Date().toLocaleString();
    
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
    
        try {
            const nuevaReceta = new RecetaDigital(
                fechaHora,
                dosis,
                'pendiente',
                medicamentoEncontrado,
                medicoEncontrado,
                descripcion // Corregido: Pasando la descripción
            );
    
            recetaDigital.push(nuevaReceta);
            renderizarRecetas();
            alert('Receta agregada exitosamente.');
        } catch (error) {
            console.error("Error al crear la receta digital:", error);
            alert('Error al agregar la receta.');
        }
    }
});



