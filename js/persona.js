export class Persona {
    static personas = []; // Array estático para almacenar todas las personas
  
    constructor(id, cuil, nombreCompleto, fechaNacimiento, email, telefono) {
      this.id = id;
      this.cuil = cuil;
      this.nombreCompleto = nombreCompleto;
      this.fechaNacimiento = fechaNacimiento;
      this.email = email;
      this.telefono = telefono;
  
      // Agregar esta persona al array estático
      Persona.personas.push(this);
    }
  
    // Método estático para inicializar personas predefinidas
    static inicializarPersonas() {
      new Persona(1, '27358147562', 'Belen Gerez', '1990-05-12', 'belen.gerez@example.com', '123456789');
      new Persona(2, '27328147563', 'Julieta Gerez', '1992-03-23', 'julieta.gerez@example.com', '987654321');
      new Persona(3, '27348147564', 'Carlos Gomez', '1985-11-14', 'carlos.gomez@example.com', '456789123');
    }
  }
  
  // Inicializar personas predefinidas al cargar la clase
  Persona.inicializarPersonas();
  