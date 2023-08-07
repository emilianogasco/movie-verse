const createUser = (event) => {
event.preventDefault();
const userName = document.getElementById('name').value.toLowerCase();
const userLastName = document.getElementById('lastname').value.toLowerCase();
const userEmail = document.getElementById('email').value;
const userPassword = document.getElementById('password').value.toLowerCase();
const userRepeatPassword = document.getElementById('repeatpassword').value;
const conditions = document.getElementById('form-check-input').checked;

if (userName.length < 3) {
    alert('debe ingresar un nombre valido');
    return;
}

if (userLastName.length < 3) {
    alert('debe ingresar un apellido valido');
    return;
}



};