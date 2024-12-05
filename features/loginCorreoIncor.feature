Feature: Login de usuario

  Scenario: Intento de inicio de sesión fallido por correo incorrecto
    Given el usuario con correo no registrado "gerezbelen877@gmail.com"
    When ingresa una contraseña "123"
    And presiona el botón "Iniciar sesión"
    Then el sistema muestra un mensaje de error "Usuario no encontrado"


