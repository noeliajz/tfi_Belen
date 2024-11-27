export class Persona {
    static personas = []; // Array estático para almacenar todas las personas
  
    constructor(id, cuil, nombreCompleto, fechaNacimiento, email, telefono, dni) {
      this.id = id;
      this.cuil = cuil;
      this.nombreCompleto = nombreCompleto;
      this.fechaNacimiento = fechaNacimiento;
      this.email = email;
      this.telefono = telefono;
      this.dni = dni;
  
      // Agregar esta persona al array estático
      Persona.personas.push(this);
    }
  
    // Método estático para inicializar personas predefinidas
    static inicializarPersonas() {
      new Persona(1, '27358147562', 'Belen Gerez', '1990-05-12', 'belen.gerez@example.com', '123456789', '43203765');
      new Persona(2, '27328147563', 'Julieta Gerez', '1992-03-23', 'julieta.gerez@example.com', '987654321', '43203674');
      new Persona(3, '27348147564', 'Carlos Gomez', '1985-11-14', 'carlos.gomez@example.com', '456789123', '43203766');
    }
  }
  
  // Inicializar personas predefinidas al cargar la clase
  Persona.inicializarPersonas();
  