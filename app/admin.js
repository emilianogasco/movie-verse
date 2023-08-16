// variable editar
let edit = false;

//posision de la pelicula
let posisionPyS;

// formulario de peliculas y series
let formulario = document.getElementById('form-pys');

//openModal
let openModal = document.getElementById('abrir-modal');

//Boton agregar
const btnAgregar = document.getElementById('agregar');

//Boton Cerrar
const btnCerrar =  document.getElementById('cerrar-modal');

// selector de mensaje
let mensaje = document.querySelector('.mensaje');

//tranformo la bd en un JSON y lo almacena en la varible por las dudas si no existe crea un array vacio
const storedPyS = JSON.parse(localStorage.getItem ('PyS')) || [];

// obtengo el id mas grande que tengo en mi Array de P y S y le sumo uno, apply() es parara aplicar la función a un conjunto de valores  del arreglo
var idMax = Math.max.apply(Math, storedPyS.map(id => {return id.id;}))+1

//obtengo el id tabla donde se mostraran las peliculas y serias
const tabla = document.getElementById('tabla');

//funcion para obtener la tabla de PyS
function obtenerTablaPyS(){
  // limpio la tabla
  tabla.innerHTML=''

  // recorro el array de peliculas y series
  storedPyS.forEach((pys) => {
    tabla.innerHTML+=`
      <tr>
        <th scope="row">${pys.id}</th>
        <td><img src="${pys.img}" alt="${pys.titulo}" class="img-pys"></td>
        <td>${pys.titulo}</td>
        <td>${pys.tipo}</td>
        <td>${pys.categoria}</td>
        <td>${pys.descripcion}</td>
        <td>
          <div class="form-check d-flex justify-content-center aling-items-center">
          <input class="form-check-input" type="checkbox" ${pys.publicado} id="flexCheckDefault" disabled>
          </div>
        </td>
        <td>
          <div class="btn btn-sm btn-secondary" onclick='editar(${pys.id})'> <i class="bi bi-pencil-fill"></i></div>
          <div class="btn btn-sm btn-danger "onclick='eliminar(${pys.id})' > <i class="bi bi-trash-fill"></i></div>
        </td>
      </tr>
    
    `
  });
}

//muestro la tabla
obtenerTablaPyS();

//editar peliculas y series
function editar(id) {
  edit = true;
  
  //abrimos el modal
  openModal.click();

  //obtenemos la posicion de la PyS que queremos editar
  posisionPyS = storedPyS.findIndex(pys => pys.id === id);

  // cargamos los datos en los imput para editar  
  document.getElementById('titulo').value = storedPyS[posisionPyS].titulo;
  document.getElementById('tipo').value = storedPyS[posisionPyS].tipo;
  document.getElementById('categoria').value = storedPyS[posisionPyS].categoria;
  document.getElementById('descripcion').value = storedPyS[posisionPyS].descripcion;
  
  // pregunto si publicado es checked y lo tranformo en un booleano 
  if(storedPyS[posisionPyS].publicado == 'checked'){
    const checkeado = storedPyS[posisionPyS].publicado = true;
    document.getElementById('publicado').checked = checkeado;
  }

  //modifico el texto del btn agregar por actualizar
  btnAgregar.textContent='Actualizar';
}

//eliminar peliculas y series
function eliminar(id) {
  // aqui con la propiedad findIndex selecciono la posicion en la que se encuentra dentro del array
  const posisionPyS = storedPyS.findIndex(pys => pys.id === id);

  //pregunto si quiero eliminar la pelicula o serie
  if(confirm('¿Quieres relamente eliminar la pelicula o serie?')){

    //pregunto si esto no es diferente a -1
    if (posisionPyS !== -1) {

      //elimino todo lo de esa posicion
      storedPyS.splice(posisionPyS, 1);

      //alamceno la nueva informacion en la key PyS
      localStorage.setItem('PyS', JSON.stringify(storedPyS));

      // obtengo la tabla de peliculas y series
      obtenerTablaPyS();
    }
  }
}

// funcion para borrar el error
function cleanError() {
  // borro el contenido de mensaje
  mensaje.innerHTML='';
}

// funcion para borrar el mensaje
function cleanSuccess() {
  // borro el contenido de mensaje
  mensaje.innerHTML='';

  // reseteo el formulario
  formulario.reset();

  // hago un click en el btn cerrar
  btnCerrar.click();

  // limpio la tabla
  tabla.innerHTML='';

  // obtengo la tabla de peliculas y series
  obtenerTablaPyS();
}

// funcion para resetear el formulario
function cleanForm(){
  // reseteo el formularo
  formulario.reset();
  // edita pasa a ser falso
  edit = false
}

// funcion submit del formulario
const createPyS = (event) =>{
 
  // evitar el refresco de la pagina
  event.preventDefault();
  // pregunto si edit es true o false para ver si estoy editando o no
  if(edit == false){
    // objeto de peliculas y series
    let newPyS = {
      id: idMax,
      img: "../src/img/pelis/sin-imagen.png",
      titulo :  document.getElementById('titulo').value,
      tipo : document.getElementById('tipo').value,
      categoria : document.getElementById('categoria').value,
      descripcion : document.getElementById('descripcion').value,
      publicado: document.getElementById('publicado').checked ? 'checked' : '',
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
    
    //crea una variable que equivale al storedPyS
    const PyS = storedPyS;
    // // agregar al JSON el objeto de peliculas y serie
    PyS.push(newPyS)

    // agregar al JSON el objeto de peliculas y serie
    localStorage.setItem('PyS',JSON.stringify(PyS));

    idMax = idMax+1;
    // // muestra un mensaje que dice que se agrego la plelicula
    mensaje.innerHTML=  `<div class='alert alert-success mt-3' role='alert'>Se agrego correctamente</div>`
    
    setTimeout(cleanSuccess, 2000);
  }else{
    // creo el objeto con las nuevas modificaciones
    let upDatePyS = {
      id: storedPyS[posisionPyS].id,
      img : storedPyS[posisionPyS].img,
      titulo :  document.getElementById('titulo').value,
      tipo : document.getElementById('tipo').value,
      categoria : document.getElementById('categoria').value,
      descripcion : document.getElementById('descripcion').value,
      publicado: document.getElementById('publicado').checked ? 'checked' : '',
    };

    // edit pasa a ser falso ahora
    edit = false
    
    // elimino 1 objeto en la posicion y cargo el nuevo valor en la misma posicion (reemplazo)
    storedPyS.splice(posisionPyS,1,upDatePyS)
    
    // introduzco los datos nuevos actualizados
    localStorage.setItem('PyS', JSON.stringify(storedPyS));
    
    // muestro un mensaje 
    mensaje.innerHTML=  `<div class='alert alert-success mt-3' role='alert'>Se actualizo correctamente</div>`
    
    // ejecuto la funcion 
    setTimeout(cleanSuccess, 2000);
    
    // al btn agregar le modifico el texto
    btnAgregar.innerText = 'Agregar';
  }
}



