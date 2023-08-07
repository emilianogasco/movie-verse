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
