// id de peliculas y series
let idPyS = 0;
// selector de mensaje
let mensaje = document.querySelector('.mensaje');

// funcion para borrar el error
function cleanError() {
  mensaje.innerHTML='';
}
// funcion para borrar agregado
function cleanSuccess() {
  //incremento del id de peliculas y series
  idPyS++
  mensaje.innerHTML='';
  document.getElementById('form-pys').reset();
  document.getElementById('cerrar-modal').click();
}

// funcion submit del formulario
const createPyS = (event) =>{
  
  // evitar el refresco de la pagina
  event.preventDefault();

  // objeto de peliculas y series
  let newPyS = {
    id: idPyS,
    titulo :  document.getElementById('titulo').value,
    tipo : document.getElementById('tipo').value,
    categoria : document.getElementById('categoria').value,
    descripcion : document.getElementById('descripcion').value,
    publicado : document.getElementById('publicado').checked,
    img: 'src/img/peli/ted.jpg'
  };

  // consulta si selecciono algun tipo de pelicula o serie
  if(newPyS.tipo == 0){
    mensaje.innerHTML= `<div class='alert alert-danger mt-3' role='alert'>Debe seleccionar si es pelicula o serie</div>`
    setTimeout(cleanError,3000);
    return;
  }

  //consulta si selecciono alguna categoria
  if(newPyS.categoria == 0){
    mensaje.innerHTML= `<div class='alert alert-danger mt-3' role='alert'>Debe seleccionar una categoria</div>`
    setTimeout(cleanError,3000);
    return;
  }
  
  // crea la key "PyS", lo tranforma en un JSON y lo almacena en la varible
  const storedPyS = JSON.parse(localStorage.getItem ('PyS')) || [];

  //hace la comparativa de si existe el id o no
  storedPyS.find((pys) =>{
    if(pys.id === newPyS.id){
      newPyS.id = pys.id++
    }
  });

   //crea una variable que equivale al storedPyS
   const PyS = storedPyS;
  // agregar al JSON el objeto de peliculas y serie
   PyS.push(newPyS)

  //  //si el id existe, dice que el id de newPyS pasa a valr al id que encontro + 1
  // if(PySAlredyExist){
  //   newPyS.id = pys.id++
  //   // agregar al JSON el objeto de peliculas y serie
  //   PyS.push(newPyS)
  // }else{
  //   // agregar al JSON el objeto de peliculas y serie
  //   PyS.push(newPyS)
  // }
  
  // agregar al JSON el objeto de peliculas y serie
  localStorage.setItem('PyS',JSON.stringify(PyS))
  
  // muestra un mensaje que dice que se agrego la clave
  mensaje.innerHTML=  `<div class='alert alert-success mt-3' role='alert'>Se agrego correctamente</div>`
  
  setTimeout(cleanSuccess, 3000);
  

}