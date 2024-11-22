import { Diagnostico } from './Diagnostico.js';
import { Plantilla } from './Plantilla.js';
import { Medicamentos } from './Medicamentos.js';
import { HistoriaClinica } from './HistoriaClinica.js';
import { jsPDF } from "jspdf";

class RecetaDigital {
    constructor(fechaHora, dosis, estado, diagnostico, plantilla, medicamento, historiaClinica) {
        // Campos básicos
        this.fechaHora = fechaHora;
        this.dosis = dosis;
        this.estado = estado;

        // Relaciones 1 a 1 con otras clases
        this.diagnostico = diagnostico instanceof Diagnostico ? diagnostico : null;
        this.plantilla = plantilla instanceof Plantilla ? plantilla : null;
        this.medicamento = medicamento instanceof Medicamentos ? medicamento : null;
        this.historiaClinica = historiaClinica instanceof HistoriaClinica ? historiaClinica : null;

        // Validar que las relaciones sean instancias válidas de sus clases correspondientes
        if (!this.diagnostico || !this.plantilla || !this.medicamento || !this.historiaClinica) {
            throw new Error("Todos los campos relacionados deben ser instancias válidas de sus clases correspondientes.");
        }
    }

    // Método para mostrar detalles de la receta digital
    obtenerDetalles() {
        return `
            Fecha y Hora: ${this.fechaHora}
            Dosis: ${this.dosis}
            Estado: ${this.estado}
            Diagnóstico: ${this.diagnostico.descripcion}
            Plantilla: ${this.plantilla.nombrePlantilla}
            Medicamento: ${this.medicamento.nombreMedicamento}
            Historia Clínica: ${this.historiaClinica.nroHC}
        `;
    }
}

export { RecetaDigital };

// Archivo: controladorGenerarReceta.js

document.addEventListener('DOMContentLoaded', () => {
    const buttonNuevaReceta = document.getElementById('buttonNuevaReceta');
    const inputDescripcion = document.getElementById('idInputNuevoDescripcion');
    const inputDosis = document.getElementById('idInputNuevoDosis');
    const inputNombreGenerico = document.getElementById('idInputNombreGenerico');
    const inputNombreComercial = document.getElementById('idInputNombreComercial');
    const idInputBuscarMedico = document.getElementById('idInputBuscarMedico');

    buttonNuevaReceta.addEventListener('click', () => {
        generarReceta();
    });

    function generarReceta() {
        // Obtener datos ingresados en los formularios
        const medico = idInputBuscarMedico.value.trim();
        const descripcion = inputDescripcion.value.trim();
        const dosis = inputDosis.value.trim();
        const nombreGenerico = inputNombreGenerico.value.trim();
        const nombreComercial = inputNombreComercial.value.trim();
        const fechaHora = new Date().toLocaleString();

        // Verificar que todos los campos necesarios estén llenos
        if (!medico || !descripcion || !dosis || !nombreGenerico || !nombreComercial) {
            alert('Por favor, complete todos los campos antes de generar la receta.');
            return;
        }

        // Crear una instancia de RecetaDigital
        const receta = new RecetaDigital(
            fechaHora,
            dosis,
            'pendiente', // Estado por defecto
            new Diagnostico(descripcion),
            new Plantilla('PlantillaDefault'),
            new Medicamentos(nombreGenerico, nombreComercial),
            // ... (historia clínica)
        );

        // Generar el PDF utilizando la información de la receta
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text('Receta Digital', 10, 20);
        doc.setFontSize(12);

        // Utilizar el método obtenerDetalles() de la receta para obtener la información formateada
        const detalles = receta.obtenerDetalles();
        doc.text(detalles, 10, 30);

        // Personalizar la plantilla del PDF según las necesidades
        // ... (Agregar logotipos, firmas, etc.)

        // Guardar el PDF con un nombre predeterminado
        doc.save(`Receta_${fechaHora.replace(/[/:]/g, '_')}.pdf`);
    }
});
// controladorGenerarReceta.js

import { jsPDF } from "jspdf";
import { RecetaDigital } from "./RecetaDigital"; // Suponiendo que esta clase ya existe

document.addEventListener('DOMContentLoaded', () => {
    // ... (resto del código del controlador)

    function generarReceta() {
        // ... (obtener datos de la receta)

        const receta = new RecetaDigital(
            // ... (crear la instancia de RecetaDigital)
        );

        // Generar el PDF utilizando una función separada
        generarPDF(receta);
    }

    function generarPDF(receta) {
        const doc = new jsPDF();

        // Configuración básica del PDF
        doc.setFontSize(12);

        // Agregar encabezado
        doc.text("Receta Digital", doc.internal.pageSize.getWidth() / 2, 10, { align: 'center' });

        // Agregar detalles de la receta en formato de tabla
        const tableData = [
            ['Fecha y Hora', receta.fechaHora],
            // ... (otros campos)
        ];
        doc.autoTable(tableData);

        // Agregar logotipos, firmas, etc. (personalizable)
        // doc.addImage(...);

        // Guardar el PDF
        doc.save(`Receta_${receta.fechaHora.replace(/[/:]/g, '_')}.pdf`);
    }
});