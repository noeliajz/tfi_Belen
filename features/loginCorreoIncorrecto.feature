Feature: Login de usuario

  Scenario: Login fallido con correo y contraseña inválidos
    Given el usuario está en la página de login
    When el usuario ingresa su correo "gerezbelen877@gmail.com" y contraseña "124"
    Then el mensaje de error "Correo o contraseña incorrectos" debe ser mostrado
