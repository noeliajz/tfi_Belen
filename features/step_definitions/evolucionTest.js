const { Given, When, Then } = require('@cucumber/cucumber');

// Simulación de datos en memoria
let sistema = {
    medicosLogueados: [],
    evoluciones: []
};

// Función para loguear a un médico
function loguearMedico(matricula) {
    sistema.medicosLogueados.push({ matricula });
}

// Función para verificar si un médico está logueado
function esMedicoLogueado(matricula) {
    return sistema.medicosLogueados.some(medico => medico.matricula === matricula);
}

// Función para agregar una evolución
function agregarEvolucion(idDoctor, observacion) {
    sistema.evoluciones.push({ idDoctor, observacion });
}

// Función para verificar si la evolución se agregó correctamente
function verificarEvolucionAgregada(idDoctor, observacion) {
    return sistema.evoluciones.some(evolucion =>
        evolucion.idDoctor === idDoctor && evolucion.observacion === observacion
    );
}

// Step Definitions

Given('El médico con matrícula {string} está logueado', function (matricula) {
    loguearMedico(matricula);
    console.log(`Médico con matrícula ${matricula} logueado.`);
});

When('ingresa el id de doctor {string}', function (idDoctor) {
    this.idDoctor = idDoctor;
    console.log(`ID del doctor ingresado: ${idDoctor}`);
});

When('agrega una observacion {string}', function (observacion) {
    this.observacion = observacion;
    console.log(`Observación agregada: ${observacion}`);
});

When('presiono el boton {string}', function (boton) {
    if (boton === "agregar evolucion" && esMedicoLogueado("1234")) {
        agregarEvolucion(this.idDoctor, this.observacion);
        console.log(`Botón "${boton}" presionado.`);
    } else {
        throw new Error('El médico no está logueado o el botón es incorrecto.');
    }
});

Then('se agrega la evolucion exitosamente', function () {
    const evolucionAgregada = verificarEvolucionAgregada(this.idDoctor, this.observacion);
    if (!evolucionAgregada) {
        throw new Error('La evolución no se agregó correctamente.');
    }
    console.log('Evolución agregada exitosamente.');
});
