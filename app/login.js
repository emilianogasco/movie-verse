const showPassword = () => {
 const closeIcon = document.getElementById('iconPassClosed');
 const openIcon = document.getElementById('iconPassOpen');
 const userPassword = document.getElementById('userPass');

openIcon.style.display = 'none';


 if (userPassword.type === 'password') {
    userPassword.type = 'text';
    openIcon.style.display = 'inline-block';
    closeIcon.style.display = 'none';
} else {
    userPassword.type = 'password';
    openIcon.style.display = 'none';
    closeIcon.style.display = 'inline-block';
}
};
