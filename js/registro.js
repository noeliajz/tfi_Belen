// CAPTURO LOS ELEMENTOS DEL INPUT
let inputUser = document.getElementById('inputUser')
let mailUser = document.getElementById('mailUser')
let passUser = document.getElementById('passUser')
let repeatPassUser = document.getElementById('repeatPassUser')
let createUser = document.getElementById('createUser')

// CAPTURO LOS MENSAJES DE ERROR
let divErrorName = document.getElementById('msgErrorName')
let divErrorMail = document.getElementById('msgErrorMail')
let divErrorPass = document.getElementById('msgErrorPass')
let divErrorRepeat = document.getElementById('msgErrorRepeat')

let localStorageArray = JSON.parse(localStorage.getItem('users')) || []
let arrayUsuarios = []

if (localStorageArray.length > 0 ){ 
    localStorageArray.forEach(user => arrayUsuarios.push(user)) 
}

divErrorName.classList= 'd-none'
divErrorMail.classList= 'd-none'
divErrorPass.classList= 'd-none'
divErrorRepeat.classList= 'd-none'

let username = ''
let pass = ''
let repeatPass = ''
let usermail = ''

let idUser = localStorageArray.length > 0 ? localStorageArray[localStorageArray.length - 1].id + 1 : 1

let objetoForm= {
    id: idUser,
    username: '',
    usermail: '',
    pass: '',
    repeatPass: '',
    role:'user',
    login:false,
    deleted: false
}


const inputChange= (event) => {
    const {name,value}= event.target
    objetoForm[name]=value

    switch(name){
        case 'username':
             divErrorName.classList ='d-none'
            break;
        case 'usermail':
            divErrorMail.classList= 'd-none'
            break;
        case 'pass':
            divErrorPass.classList= 'd-none'
            break;
        case 'repeatPass':
            divErrorRepeat.classList='d-none'  
            break              
    }
}

const register = ()=> {
    const { username, usermail, pass, repeatPass }= objetoForm
    if(username && pass && usermail && repeatPass){
        if( pass === repeatPass){
        arrayUsuarios.push(objetoForm)
        localStorage.setItem('users', JSON.stringify(arrayUsuarios))
        setTimeout(()=> {
            location.href = './iniciarSesion.html'
        }, 2000)
        }else{
           alert('Las contraseñas no coinciden')
        }
        
    }else if(!username && !pass && !usermail && !repeatPass){
        switch(true){
            case !username:
                divErrorName.classList= 'd-block text-danger'
            case !usermail:
                divErrorMail.classList= 'd-block text-danger'
            case !pass:
                divErrorPass.classList= 'd-block text-danger'
            case !repeatPass:
                divErrorRepeat.classList= 'd-block text-danger'
        }
        
    } else {
        if (!username){
            divErrorName.classList= 'd-block text-danger'
        }
         if(!usermail){
            divErrorMail.classList= 'd-block text-danger'
        } 
         if(!pass){
            divErrorPass.classList= 'd-block text-danger'
        }
         if(!repeatPass){
            divErrorRepeat.classList= 'd-block text-danger'
        }
    }
}







// SE AGREGAN LOS EVENTOS A LOS INPUT
inputUser.addEventListener('input', inputChange)
mailUser.addEventListener('input',inputChange)
passUser.addEventListener('input',inputChange)
repeatPassUser.addEventListener('input', inputChange)
createUser.addEventListener('click',register)