Feature: Creación de receta digital

  Scenario: Generar receta digital con éxito
    Given un médico ha registrado la descripción "Tomar Paracetamol", la dosis "2 gotas por día" y el medicamento "Paracetamol"
    When el médico presiona el botón "generar receta digital"
    Then el sistema debe generar la receta digital con los datos proporcionados
    And el sistema debe mostrar un mensaje de éxito "Receta generada correctamente"


    
