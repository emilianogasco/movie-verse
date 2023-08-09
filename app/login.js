const showPassword = () => {
 const closeIcon = document.getElementById('iconPassClosed');
 const openIcon = document.getElementById('iconPassOpen');
 const userPassword = document.getElementById('userPass');

    

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


const authUser = (event) => {
 const userEmail = document.getElementById('userEmail').value;
 const userPass = document.getElementById('userPass').value;

 const storedUsers = JSON.parse(localStorage.getItem('users'));

 const authenticatesUser = storedUsers.find((user) => {
    if (newUser.email === userEmail && newUserUser.password === userPass) {
        return user
    } 
})
    if (authenticatesUser) {
      localStorage.setItem('authUser', JSON.stringify('authenticatesUser'))
      window.location.href = 'http://127.0.0.1:5501/index.html';
    } else { 
        alert('Las credenciales no son correctas');
    }

};