//base de datos de peliculas y serie
const bdpys = [
  {
    id : 0 ,
    titulo :"The Purge" ,
    tipo : "pelicula" ,
    categoria : "terror",
    descripcion : "En una futura sociedad distópica, el régimen político, llamado Nueva Fundación de los padres de América, ha implantado una medida catárquica ante la violencia campante y las cárceles saturadas: la 'purga anual', según la cual una noche al año se puede cometer cualquier clase de crimen, incluso el asesinato, sin tener que responder ante la justicia.",
    publicado : "checked", 
    img : "../src/img/pelis/423HV45CZBKCXGNS6355W3HNHY.jpg", 
  },
  {
    id : 1 ,
    titulo :"El Conjuro 2" ,
    tipo : "pelicula" ,
    categoria : "terror",
    descripcion : "Ed y Lorraine Warren, renombrados demonólogos e investigadores de lo paranormal, se enfrentan de nuevo a las fuerzas infernales. En esta ocasión, viajan hasta el norte de Londres para tratar de ayudar a una madre y sus cuatro hijos, quienes habitan en una casa plagada de espíritus malignos.",
    publicado : "checked",
    img : "../src/img/pelis/1572019225_928456_1572020312_album_normal.jpg",  
  },
  {
    id : 2 ,
    titulo :"Antebellum" ,
    tipo : "pelicula" ,
    categoria : "terror",
    descripcion : "Antebellum es una película estadounidense de terror escrita y dirigida por Gerard Bush y Christopher Renz. Es protagonizada por Janelle Monáe, Eric Lange, Jena Malone, Jack Huston, Kiersey Clemons y Gabourey Sidibe",
    publicado : "",
    img : "../src/img/pelis/antebellum.webp", 
  },
  {
    id : 3 ,
    titulo :"Como si fuera la primera vez" ,
    tipo : "pelicula" ,
    categoria : "comedia",
    descripcion : "Henry, biólogo marino, no tiene la mínima intención de comprometerse con nadie, hasta que conoce a Lucy, la chica de sus sueños. Sin embargo, hay un pequeño problema, la joven se levanta cada mañana sin recordar absolutamente nada del día anterior",
    publicado : "",
    img : "../src/img/pelis/como si fuera la primera vez.jpeg", 
  },
  {
    id : 4 ,
    titulo :"Deadpool 2" ,
    tipo : "pelicula" ,
    categoria : "comedia",
    descripcion : "Deadpool tiene que proteger a un mutante adolescente de Cable, un soldado del futuro genéticamente modificado, pero Deadpool no está solo: otros superhéroes igual de chiflados que él unen sus fuerzas contra el perverso Cable",
    publicado : "",
    img : "../src/img/pelis/deadpool2.jpg", 
  },
  {
    id : 5 ,
    titulo :"Un lugar en silencio" ,
    tipo : "pelicula" ,
    categoria : "terror",
    descripcion : "Antebellum es una película estadounidense de terror escrita y dirigida por Gerard Bush y Christopher Renz. Es protagonizada por Janelle Monáe, Eric Lange, Jena Malone, Jack Huston, Kiersey Clemons y Gabourey Sidibe",
    publicado : "",
    img : "../src/img/pelis/DIWCCFQJBJKALNQ3BET2QXU674.jpg", 
  },
  {
    id : 6 ,
    titulo :"El Exorcista" ,
    tipo : "pelicula" ,
    categoria : "terror",
    descripcion : "Una actriz llama a unos sacerdotes jesuitas para que intenten terminar con la posesión demoníaca de su hija de 12 años.",
    publicado : "",
    img : "../src/img/pelis/MV5BMTgxMjIyNTc5Nl5BMl5BanBnXkFtZTgwMjgwNDgwNzE-._V1_.jpg", 
  },
  {
    id : 7 ,
    titulo :"Ted " ,
    tipo : "pelicula" ,
    categoria : "comedia",
    descripcion : "Cuando John Bennett era un niño pequeño, pidió el deseo de que Ted, su querido oso de peluche, cobrara vida. Treinta años más tarde, Ted continúa siendo el compañero de John, ante el disgusto de Lori, la novia de John.",
    publicado : "",
    img : "../src/img/pelis/ted.jpg", 
  },
  {
    id : 8 ,
    titulo :"Dark 3" ,
    tipo : "pelicula" ,
    categoria : "comedia",
    descripcion : "Antebellum es una película estadounidense de terror escrita y dirigida por Gerard Bush y Christopher Renz. Es protagonizada por Janelle Monáe, Eric Lange, Jena Malone, Jack Huston, Kiersey Clemons y Gabourey Sidibe",
    publicado : "",
    img : "../src/img/pelis/wrong missy.jpg", 
  },
]

//cargo la base de datos
function bdd() {
  localStorage.setItem('PyS', JSON.stringify(bdpys))
}

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
    const id = pys.id;
    const img = pys.img;
    const titulo = pys.titulo;
    const tipo = pys.tipo;
    const categoria = pys.categoria;
    const descripcion = pys.descripcion;
    const publicado = pys.publicado;
    tabla.innerHTML+=`
      <tr>
        <th scope="row">${id}</th>
        <td><img src="${img}" alt="${titulo}" class="img-pys"></td>
        <td>${titulo}</td>
        <td>${tipo}</td>
        <td>${categoria}</td>
        <td>${descripcion}</td>
        <td>
          <div class="form-check d-flex justify-content-center aling-items-center">
          <input class="form-check-input" type="checkbox" ${publicado} id="flexCheckDefault" disabled>
          </div>
        </td>
        <td>
          <div class="btn btn-sm btn-secondary" onclick='editar(${id})'> <i class="bi bi-pencil-fill"></i></div>
          <div class="btn btn-sm btn-danger "onclick='eliminar(${id})' > <i class="bi bi-trash-fill"></i></div>
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
      publicado : document.getElementById('publicado').checked,
    };

    // cambio el valor de true por checked
    if(upDatePyS.publicado == true){
      upDatePyS.publicado = 'checked'
    }

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



