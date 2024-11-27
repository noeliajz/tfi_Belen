import { Diagnostico } from '../js/Diagnostico.js';
import { Medicamentos } from '../js/Medicamento.js';
import { HistoriaClinica } from '../js/historiaClinica.js';

// Array para almacenar las recetas digitales
const recetaDigital = [];

export class RecetaDigital {
    constructor(fechaHora, dosis, estado, diagnostico,  medicamento, historiaClinica) {
        this.fechaHora = fechaHora;
        this.dosis = dosis;
        this.estado = estado;
        this.diagnostico = diagnostico instanceof Diagnostico ? diagnostico : null;
        this.medicamento = medicamento instanceof Medicamentos ? medicamento : null;
        this.historiaClinica = historiaClinica instanceof HistoriaClinica ? historiaClinica : null;

        if (!this.diagnostico  || !this.medicamento || !this.historiaClinica) {
            throw new Error("Todos los campos relacionados deben ser instancias válidas de sus clases correspondientes.");
        }
    }

    obtenerDetalles() {
        return `
            Fecha y Hora: ${this.fechaHora}
            Dosis: ${this.dosis}
            Estado: ${this.estado}
            Diagnóstico: ${this.diagnostico.descripcion}
            Medicamento: ${this.medicamento.nombreMedicamento}
            Historia Clínica: ${this.historiaClinica.nroHC}
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Verifica si el botón existe en el DOM
    const buttonNuevaReceta = document.getElementById('buttonNuevaReceta');
    console.log("Elemento buttonNuevaReceta:", buttonNuevaReceta); // Verifica que el botón está siendo cargado correctamente

    const inputDescripcion = document.getElementById('idInputNuevoDescripcion');
    const inputDosis = document.getElementById('idInputNuevoDosis');
    const inputNombreGenerico = document.getElementById('idInputNombreGenerico');
    const inputNombreComercial = document.getElementById('idInputNombreComercial');
    const idInputBuscarMedico = document.getElementById('idInputBuscarMedico');

    // Asignamos el evento al botón si está disponible
    if (buttonNuevaReceta) {
        buttonNuevaReceta.addEventListener('click', () => {
            console.log("✅ Botón 'Nueva Receta' presionado. Evento click funcionando correctamente.");
            agregarReceta();
        });
    } else {
        console.error("❌ No se encontró el botón 'Nueva Receta'. Verifica el ID en el HTML.");
    }

    function agregarReceta() {
        const medico = idInputBuscarMedico.value.trim();
        const descripcion = inputDescripcion.value.trim();
        const dosis = inputDosis.value.trim();
        const nombreGenerico = inputNombreGenerico.value.trim();
        const nombreComercial = inputNombreComercial.value.trim();
        const fechaHora = new Date().toLocaleString();

        if (!medico || !descripcion || !dosis || !nombreGenerico || !nombreComercial) {
            alert('Por favor, complete todos los campos antes de agregar la receta.');
            return;
        }

        try {
            const nuevaReceta = new RecetaDigital(
                fechaHora,
                dosis,
                'pendiente',
                new Diagnostico(descripcion),
                new Medicamentos(nombreGenerico, nombreComercial),
                new HistoriaClinica(medico)
            );

            recetaDigital.push(nuevaReceta);

            console.log("Receta agregada al array:", nuevaReceta);
            console.log("Estado actual del array de recetas:", recetaDigital);

            alert('Receta agregada exitosamente.');
        } catch (error) {
            console.error("Error al crear la receta digital:", error);
            alert('Error al agregar la receta, verifique los datos ingresados.');
        }
    }
});

