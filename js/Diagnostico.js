export class Diagnostico {
    static diagnosticos = []; // Array estático para almacenar todos los diagnósticos
  
    constructor(idDiagnostico, codigoDescripcion, descripcion) {
      this.idDiagnostico = idDiagnostico;
      this.codigoDescripcion = codigoDescripcion;
      this.descripcion = descripcion;
  
      // Agregar el diagnóstico al array estático
      Diagnostico.diagnosticos.push(this);
    }
  
    // Método para renderizar un diagnóstico
    renderizarDiagnostico() {
      return `
        <div class="diagnostico-card">
          <h5>ID Diagnóstico: ${this.idDiagnostico}</h5>
          <p>Código Descripción: ${this.codigoDescripcion}</p>
          <p>Descripción: ${this.descripcion}</p>
        </div>
      `;
    }
  
    // Método estático para obtener todos los diagnósticos
    static obtenerTodos() {
      return Diagnostico.diagnosticos;
    }
  
    // Método estático para buscar diagnóstico por ID
    static buscarPorId(id) {
      return Diagnostico.diagnosticos.find(diagnostico => diagnostico.idDiagnostico === id);
    }
  
    // Método estático para renderizar todos los diagnósticos
    static renderizarTodos() {
      const divDiagnosticos = document.getElementById('divDiagnosticos');
      divDiagnosticos.innerHTML = ''; // Limpiar contenido previo
  
      divDiagnosticos.innerHTML = Diagnostico.diagnosticos
        .map(diagnostico => diagnostico.renderizarDiagnostico())
        .join('');
    }
     // Método estático para agregar un diagnóstico
  
  }
  
  // Crear instancias de la clase Diagnóstico con los datos del array
  const arrayDiagnostico = [
    { idDiagnostico: 0, codigoDescripcion: "2ed", descripcion: "descripcion" },
    { idDiagnostico: 1, codigoDescripcion: "22ed", descripcion: "descripcion" },
    { idDiagnostico: 2, codigoDescripcion: "1ed", descripcion: "descripcion" }
  ];
  
  // Convertir los elementos del array a instancias de Diagnóstico
  arrayDiagnostico.forEach(diagnosticoData => {
    new Diagnostico(diagnosticoData.idDiagnostico, diagnosticoData.codigoDescripcion, diagnosticoData.descripcion);
  });
  
  // Renderizar los diagnósticos al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    Diagnostico.renderizarTodos();
  });

  
  
