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

//tranformo la bd en un JSON y lo almacena en la varible por las dudas si no existe crea un array vacio
const storedPyS = JSON.parse(localStorage.getItem ('PyS')) || [];

//obtengo el id tabla
const tabla = document.getElementById('tabla');
//funcion para obtener la tabla
function obtenerTablaPyS(){
  storedPyS.forEach((pys) => {
    const id = pys.id;
    const img = pys.img;
    const titulo = pys.titulo;
    const tipo = pys.tipo;
    const categoria = pys.categoria;
    const descripcion = pys.descripcion;
    const publicado = pys.publicado;
    tabla.innerHTML+=`
      <tr idPyS="${id}">
        <th scope="row">${id}</th>
        <td><img src="${img}" alt="" id="idPyS"></td>
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
          <div class="btn btn-sm btn-secondary" > <i class="bi bi-pencil-fill"></i></div>
          <div class="btn btn-sm btn-danger " > <i class="bi bi-trash-fill"></i></div>
        </td>
      </tr>
    
    `
      
  });
}
//muestro la tabla
obtenerTablaPyS();

//editar peliculas y series



// tabla.addEventListener('click', function(event){
//   const btnEditar = document.querySelectorAll('.editar');
//   console.log
//   for (let i = 0; i < btnEditar.length; i++) {
//     alert(this.innertText + "clicked")
     
//    }

// })
  
  // seleccionar la fila para sacar el idPyS
  // const fila = btn.parentNode.parentNode;


// selector de mensaje
let mensaje = document.querySelector('.mensaje');

// funcion para borrar el error
function cleanError() {
  mensaje.innerHTML='';
}
// funcion para borrar agregado
function cleanSuccess() {
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
    id: idPyS = storedPyS.length,
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
  localStorage.setItem('PyS',JSON.stringify(PyS))
  
  // // muestra un mensaje que dice que se agrego la clave
  mensaje.innerHTML=  `<div class='alert alert-success mt-3' role='alert'>Se agrego correctamente</div>`

  setTimeout(cleanSuccess, 2000);
}



