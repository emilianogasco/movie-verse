//base de datos de peliculas y serie
const bdpys = [
  {
    "id":0 ,
    "titulo" :"Dark" ,
    "tipo" : 2 ,
    "categoria" : 2,
    "descripcion" : "esto es una descricion",
    "publicado" : false 
  },
  {
    "id":1 ,
    "titulo" :"Dark2" ,
    "tipo" : 1 ,
    "categoria" : 4,
    "descripcion" : "esto es una descripcion",
    "publicado" : true 
  },
  {
    "id":2 ,
    "titulo" :"Dark3" ,
    "tipo" : 1 ,
    "categoria" : 4,
    "descripcion" : "esto es una descripcion",
    "publicado" : true 
  }
]

//cargo la base de datos
localStorage.setItem('PyS', JSON.stringify(bdpys))

//tranformo la bd en un JSON y lo almacena en la varible
const storedPyS = JSON.parse(localStorage.getItem ('PyS')) || [];

// id de peliculas y series
let idPyS = storedPyS.length;
// selector de mensaje
let mensaje = document.querySelector('.mensaje');

// funcion para borrar el error
function cleanError() {
  mensaje.innerHTML='';
}
// funcion para borrar agregado
function cleanSuccess() {
  // //incremento del id de peliculas y series
  idPyS = storedPyS.length;
  mensaje.innerHTML='';
  document.getElementById('form-pys').reset();
  document.getElementById('cerrar-modal').click();
}

// funcion submit del formulario
const createPyS = (event) =>{
 
  // // evitar el refresco de la pagina
  event.preventDefault();

  // // objeto de peliculas y series
  let newPyS = {
    id: idPyS,
    titulo :  document.getElementById('titulo').value,
    tipo : document.getElementById('tipo').value,
    categoria : document.getElementById('categoria').value,
    descripcion : document.getElementById('descripcion').value,
    publicado : document.getElementById('publicado').checked,
  };

  // // consulta si selecciono algun tipo de pelicula o serie
  if(newPyS.tipo == 0){
    mensaje.innerHTML= `<div class='alert alert-danger mt-3' role='alert'>Debe seleccionar si es pelicula o serie</div>`
    setTimeout(cleanError,3000);
    return;
  }

  // //consulta si selecciono alguna categoria
  if(newPyS.categoria == 0){
    mensaje.innerHTML= `<div class='alert alert-danger mt-3' role='alert'>Debe seleccionar una categoria</div>`
    setTimeout(cleanError,3000);
    return;
  }

  //hace la comparativa de si existe el id o no
  storedPyS.find((pys) =>{
    if(pys.id === newPyS.id){
      newPyS.id = storedPyS.length;
    }
  });

  //crea una variable que equivale al storedPyS
   const PyS = storedPyS;
  // // agregar al JSON el objeto de peliculas y serie
   PyS.push(newPyS)

  // agregar al JSON el objeto de peliculas y serie
  localStorage.setItem('PyS',JSON.stringify(PyS))
  
  // // muestra un mensaje que dice que se agrego la clave
  mensaje.innerHTML=  `<div class='alert alert-success mt-3' role='alert'>Se agrego correctamente</div>`

  setTimeout(cleanSuccess, 3000);
}