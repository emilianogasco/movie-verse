const createUser = (event) => {
event.preventDefault();

const newUser = {
    name: document.getElementById('name').value.toLowerCase(),
    lastName: document.getElementById('lastname').value.toLowerCase(),
    password: document.getElementById('password').value,
    email: document.getElementById('email').value,
    };


const userRepeatPassword = document.getElementById('repeatpassword').value;
const conditions = document.getElementById('form-check-input').checked;


const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (newUser.name.length < 3) {
    alert('debe ingresar un nombre valido');
    return;
}

if (newUser.lastName.length < 3) {
    alert('debe ingresar un apellido valido');
    return;
}

if (!emailRegex.test(newUser.email)) {
    alert('Debe ingresar un email valido');
    return;
}

if (!PasswordRegex.test(newUser.password)) {
    alert('Debe ingresar un password valido');
    return;
}

if (newUser.password !== userRepeatPassword) {
    alert('Las contraseñas no coinciden');
    return;
}

if (!conditions) {
    alert('Debe aceptar los terminos y condiciones');
    return;
}

const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

const userAlreadyExist = storedUsers.find((user) => {
    return user.email === newUser.email
});

const users = storedUsers;

if (userAlreadyExist) {
    alert('Ya existe un usuario creado con este email. Por favor ingresa uno diferente');
    return;
} else {
    users.push(newUser)
}



localStorage.setItem('users', JSON.stringify(users));

window.location.href = 'http://127.0.0.1:5501/pages/login.html'

};