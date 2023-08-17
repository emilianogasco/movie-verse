const createUser = (event) => {
    event.preventDefault();
    const userName = document.getElementById('name').value.toLowerCase();
    const userEmail = document.getElementById('email').value;
    const userTextarea = document.getElementById('Textarea').value.toLowerCase();

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (userName.length < 3) {
        alert('Debe ingresar un nombre valido');
        return;
    }

    if (!emailRegex.test(userEmail )) {
        alert('Debe ingresar un email valido');
        return;
    }

    
    if (userTextarea.length < 10) {
        alert('Debe ingresar mas de 10 letras');
        return;
    }

    const newUser = {
     name: userName,
     email: userEmail,
     textarea: userTextarea,
    };

    localStorage.setItem('message', JSON.stringify(newUser));

    window.location.href ='../index.html';

};
