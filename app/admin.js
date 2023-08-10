//base de datos de peliculas y serie
const bdpys = [
  {
    "id":0 ,
    "titulo" :"Dark" ,
    "tipo" : "pelicula" ,
    "categoria" : "accion",
    "descripcion" : "esto es una descricion",
    "publicado" : "checked" 
  },
  {
    "id":1 ,
    "titulo" :"Dark 2" ,
    "tipo" : "serie" ,
    "categoria" : "accion",
    "descripcion" : "esto es una descricion",
    "publicado" : "checked" 
  },
  {
    "id":2 ,
    "titulo" :"Dark 3" ,
    "tipo" : "pelicula" ,
    "categoria" : "accion",
    "descripcion" : "esto es una descricion",
    "publicado" : "" 
  },

]

//cargo la base de datos
localStorage.setItem('PyS', JSON.stringify(bdpys))

//tranformo la bd en un JSON y lo almacena en la varible por las dudas si no existe crea un array vacio
const storedPyS = JSON.parse(localStorage.getItem ('PyS')) || [];

//obtengo el id tabla
const tabla = document.getElementById('tabla');
//funcion para obtener la tabla
function obtenerTablaPyS(){
  storedPyS.forEach((pys) => {
    const id = pys.id;
    const titulo = pys.titulo;
    const tipo = pys.tipo;
    const categoria = pys.categoria;
    const descripcion = pys.descripcion;
    const publicado = pys.publicado;
    tabla.innerHTML+=`
      <tr>
        <th scope="row">${id}</th>
        <td>${titulo}</td>
        <td>${tipo}</td>
        <td>${categoria}</td>
        <td>${descripcion}</td>
        <td>
          <div class="form-check d-flex justify-content-center aling-items-center">
          <input class="form-check-input" type="checkbox" ${publicado} id="flexCheckDefault">
          </div>
        </td>
        <td>
          <div class="btn btn-sm btn-secondary"> <i class="bi bi-pencil-fill"></i></div>
          <div class="btn btn-sm btn-danger"> <i class="bi bi-trash-fill"></i></div>
        </td>
      </tr>
    
    `
      
  });
}
//muestro la tabla
obtenerTablaPyS();

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
  tabla.innerHTML='';
  obtenerTablaPyS()
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

  //cambio el valor de true por checked
  if(newPyS.publicado == true){
    newPyS.publicado = 'checked'
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

  setTimeout(cleanSuccess, 2000);
}



