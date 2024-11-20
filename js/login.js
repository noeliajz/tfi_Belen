let inputUser = document.getElementById('inputUser');
let passUser = document.getElementById('inputPass');
let buttonLogin = document.getElementById('buttonLogin');

let divErrUser = document.getElementById('divErrUser');
let divErrPass = document.getElementById('divErrPass');

// Recupera los usuarios almacenados en LocalStorage
let localStorageArray = JSON.parse(localStorage.getItem('users')) || [];

// Ocultar errores al cargar la página
divErrUser.classList.add('d-none');
divErrPass.classList.add('d-none');

let objetoForm = {
    username: '',
    pass: ''
};

// Función para manejar los cambios en los inputs
const inputChange = (event) => {
    const { name, value } = event.target;
    objetoForm[name] = value;

    // Oculta el mensaje de error correspondiente cuando se cambia el input
    switch (name) {
        case 'username':
            divErrUser.classList.add('d-none');
            break;
        case 'pass':
            divErrPass.classList.add('d-none');
            break;
    }
};

// Función para manejar el inicio de sesión
const login = () => {
    const { username, pass } = objetoForm;

    // Verificar si ambos campos están vacíos
    if (!username && !pass) {
        alert('Debe completar los campos usuario y contraseña');
        return;
    } else if (!username) {
        divErrUser.classList.remove('d-none');
        return;
    } else if (!pass) {
        divErrPass.classList.remove('d-none');
        return;
    }

    // Busca el usuario en LocalStorage
    let usuario = localStorageArray.find(usuario => usuario.username === username);

    if (usuario) {
        // Si se encuentra el usuario, verifica la contraseña
        if (usuario.pass === pass) {
            let usuarioIndex = localStorageArray.findIndex(usuario => usuario.username === username);

            // Actualiza el estado de login en LocalStorage
            localStorageArray[usuarioIndex].login = true;
            localStorage.setItem('users', JSON.stringify(localStorageArray));

            // Redireccionar basado en el rol
            if (usuario.role === 'admin') {
                location.href = `admin.html?id=${usuario.id}`;
            } else {
                location.href = `vistaUsuarioLogueado.html?id=${usuario.id}`;
            }
        } else {
            alert('Contraseña incorrecta.');
        }
    } else {
        alert('Usuario no encontrado.');
    }
};

// Escuchadores de eventos para los inputs y el botón
inputUser.addEventListener('input', inputChange);
passUser.addEventListener('input', inputChange);
buttonLogin.addEventListener('click', login);
