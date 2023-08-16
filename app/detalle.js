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
      img : "../src/img/pelis/MV5BMTgxMjIyNTc5Nl5BMl5BanBnXkFtZTgwMjgwNDgwNzE-.V1.jpg", 
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
  
const urlParams = new URLSearchParams(window.location.search);

let movieIndex = urlParams.get("id");

const movieDetailsContainer = document.getElementById("movie-details");

// revisar el if, que pasa si alguien entra manual a detalle-pelicula.html
if (basePyS && movieIndex < basePyS.length) {
  const movie = basePyS[movieIndex]; // Obtener la película en base al índice
  // Llenar movieDetailsContainer con los detalles de la película
  movieDetailsContainer.innerHTML = `
  <div class="container-fluid mt-5">
            <div class="row"> 
              <div class="col-12 col-md-6">
            <div>
              <h4>${movie.titulo} </h4>
          <div class="informacion d-flex mb-3">
                <p class="texto mb-3 me-2">2 h 7 min</p>
                <i class="bi bi-badge-hd me-2"></i>
                <p class="texto mb-3">2023</p>
          </div>
            </div>
          <div class="description">
              <h6>${movie.descripcion}</h6>
          </div>
          <div class="mb-2">
              <a href="./error-404.html">
                <button class="btn btn-primary">Reproducir <i class="bi bi-caret-right-square-fill"></i></button>  
              </a>
          </div>
          <div class="mb-2">
              <a href="https://www.youtube.com/watch?v=v0d0id78XdE">
                <button class="btn btn-primary">Ver trailer</button>
              </a>
          </div>
            </div>
            </div>
          </div>
  `;
} else {
  // Mostrar mensaje de error si no se encuentra la película
  movieDetailsContainer.innerHTML = "<p>La película no se encontró.</p>"; }