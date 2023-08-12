//Creamos una funcion para un evento onclick en el input pasword
const showPassword = () => {
 const closeIcon = document.getElementById('iconPassClosed');
 const openIcon = document.getElementById('iconPassOpen');
 const userPassword = document.getElementById('userPass');

    
// utilizamos un if para que usuario al hacer "clicks" pueda o no ver su contraseña
 if (userPassword.type === 'password') {
    userPassword.type = 'text';
    openIcon.classList.add('d-none');
    closeIcon.classList.remove('d-none');
} else {
    userPassword.type = 'password';
    openIcon.classList.remove('d-none');
    closeIcon.classList.add('d-none');
}
};

//Accedemos a nuestros inputs email y password 
const authUser = (event) => {
    event.preventDefault()
 const userEmail = document.getElementById('userEmail').value;
 const userPass = document.getElementById('userPass').value;


 //Obtenemos los elementos de los usuarios guardados en nuestro LocalStorage
 const storedUsers = JSON.parse(localStorage.getItem('users'));



//Iteramos entre los usuarios guardados para ver si hay una coincidencia
 const authenticatesUser = storedUsers.find((user) => {
    if (user.email === userEmail && user.password === userPass) {
        
        return user.name
    
    } 
})


//Si existe authenticatesUser se va a guardar en el localStorage de lo contrario se genera una alerta
     if (authenticatesUser) {
       localStorage.setItem('authUser', JSON.stringify(authenticatesUser));
       alert(`Bienvenido ${authenticatesUser.name}`);
       window.location.href = 'http://127.0.0.1:5501/index.html';
       
     } else { 
         alert('Las credenciales no son correctas');
     }

};