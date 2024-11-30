
Feature: Login de usuario

  Scenario: Login exitoso con correo y contraseña válidos
    Given el usuario está en la página de login
    When el usuario ingresa su correo "gerezbelen875@gmail.com" y contraseña "123"
    Then el usuario debe ser redirigido a la página principal