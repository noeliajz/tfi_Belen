import { Persona } from './persona.js'; // Importar la clase Persona correctamente

export class Medico {
    static medicos = []; // Array estático para almacenar todas las personas
  
    constructor(id, cuil, nombreCompleto, fechaNacimiento, email, telefono, matricula, especialidad) {
        super(id, cuil, nombreCompleto, fechaNacimiento, email, telefono);
        this.matricula = matricula;
        this.especialidad= especialidad
  
      // Agregar esta persona al array estático
      Medico.medicos.push(this);
    }
  
    // Método estático para inicializar personas predefinidas
    static inicializarMedicos() {
      new Persona(1, '27358147562', 'Belen Gerez', '1990-05-12', 'belen.gerez@example.com', '123456789', '232432', dermatología);
      new Persona(2, '27328147563', 'Julieta Gerez', '1992-03-23', 'julieta.gerez@example.com', '987654321', '232432', dermatología);
      new Persona(3, '27348147564', 'Carlos Gomez', '1985-11-14', 'carlos.gomez@example.com', '456789123', '232432', dermatología);
    }
  }
  
  // Inicializar personas predefinidas al cargar la clase
  Medico.inicializarMedicos();
  