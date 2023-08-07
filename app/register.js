const createUser = (event) => {
event.preventDefault();
const userName = document.getElementById('name').value.toLowerCase();
const userLastName = document.getElementById('lastname').value.toLowerCase();
const userEmail = document.getElementById('email').value;
const userPassword = document.getElementById('password').value.toLowerCase();
const userRepeatPassword = document.getElementById('repeatpassword').value;
const conditions = document.getElementById('form-check-input').checked;

const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (userName.length < 3) {
    alert('debe ingresar un nombre valido');
    return;
}

if (userLastName.length < 3) {
    alert('debe ingresar un apellido valido');
    return;
}

if (!emailRegex.test(userEmail)) {
    alert('Debe ingresar un email valido');
    return;
}

if (!PasswordRegex.test(userPassword)) {
    alert('Debe ingresar un password valido');
    return;
}

if (userPassword !== userRepeatPassword) {
    alert('Las contraseñas no coinciden');
    return;
}

if (!conditions) {
    alert('Debe aceptar los terminos y condiciones');
    return;
}

const newUser = {
name: userName,
lastName: userLastName,
password: userPassword,
email: userEmail,
};

localStorage.setItem('user', JSON.stringify(newUser));

window.location.href = 'http...'

};