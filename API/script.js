const BASE_URL = "https://istp1service.azurewebsites.net/swagger/index.html";

//funcion 
async function obtenerDetalleMedicamento(id) {
    try {
        const response = await fetch(`${BASE_URL}Medicamentos/${id}`);
        
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error al obtener medicamento con ID ${id}: ${response.status}`);
        }

        // Convertir la respuesta en JSON
        const detalle = await response.json();
        return detalle;
    } catch (error) {
        console.error("Error al obtener el medicamento:", error);
        return null;
    }
}

document.getElementById("btn-detalle-medicamento").addEventListener("click", async () => {
    // Solicitar al usuario un ID mediante un prompt
    const id = prompt("Ingresa el ID del medicamento:");

    if (id) {
        const detalle = await obtenerDetalleMedicamento(id);

        // Mostrar el resultado en la página
        mostrarDetalle(detalle, "contenedor-detalle-medicamento");
    } else {
        alert("Por favor, ingresa un ID válido.");
    }
});
function mostrarDetalle(detalle, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = ""; // Limpia el contenido anterior

    if (!detalle) {
        contenedor.textContent = "No se encontraron datos.";
        return;
    }

    // Crear un elemento para mostrar el detalle en formato JSON
    const item = document.createElement("pre");
    item.textContent = JSON.stringify(detalle, null, 2); // Formatear el JSON
    contenedor.appendChild(item);
}

