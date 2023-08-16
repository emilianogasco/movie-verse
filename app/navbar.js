//  function cerrarBuscador () {
//     resultado.classList.add("d-none");
//     buscador.value = "";
// }

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

  const basePyS = JSON.parse(localStorage.getItem("PyS"));
  
  const resultado = document.getElementById("resultado");

  

const buscador = document.getElementById("buscador");

buscador.addEventListener("input", function() {

    
    if(buscador.value === "") {

        resultado.classList.add("d-none");

    } else if (buscador.value) {
        
        resultado.classList.remove("d-none");
    }

    const resultadoBuscador = buscador.value.toLowerCase();

    console.log(resultadoBuscador);

    resultado.innerHTML = "";

    basePyS.forEach(pys => {

        const id = pys.id;
        const img = pys.img;
        const titulo = pys.titulo.toLowerCase();
      

        if(titulo.includes(resultadoBuscador)) {
            resultado.innerHTML += `<div class="d-flex my-2 align-items-center peliBuscador">
            <a href="http://127.0.0.1:5501/pages/detalle-pelicula.html?id=${id}" class="d-flex my-2 align-items-center peliBuscador text-decoration-none text-dark">
              <img class="w-25 imagenesBuscador" src="${img}" alt="${titulo}">
              <p class="titulosBuscador">${titulo}</p>
            </a>
        </div>

       <hr>
            `
        }  
      });
  
    })