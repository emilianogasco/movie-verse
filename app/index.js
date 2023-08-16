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
    publicado : "checked",
    img : "../src/img/pelis/antebellum.webp", 
  },
  {
    id : 3 ,
    titulo :"Como si fuera la primera vez" ,
    tipo : "pelicula" ,
    categoria : "comedia",
    descripcion : "Henry, biólogo marino, no tiene la mínima intención de comprometerse con nadie, hasta que conoce a Lucy, la chica de sus sueños. Sin embargo, hay un pequeño problema, la joven se levanta cada mañana sin recordar absolutamente nada del día anterior",
    publicado : "checked",
    img : "../src/img/pelis/como si fuera la primera vez.jpeg", 
  },
  {
    id : 4 ,
    titulo :"Deadpool 2" ,
    tipo : "pelicula" ,
    categoria : "comedia",
    descripcion : "Deadpool tiene que proteger a un mutante adolescente de Cable, un soldado del futuro genéticamente modificado, pero Deadpool no está solo: otros superhéroes igual de chiflados que él unen sus fuerzas contra el perverso Cable",
    publicado : "checked",
    img : "../src/img/pelis/deadpool2.jpg", 
  },
  {
    id : 5 ,
    titulo :"Un lugar en silencio" ,
    tipo : "pelicula" ,
    categoria : "terror",
    descripcion : "Antebellum es una película estadounidense de terror escrita y dirigida por Gerard Bush y Christopher Renz. Es protagonizada por Janelle Monáe, Eric Lange, Jena Malone, Jack Huston, Kiersey Clemons y Gabourey Sidibe",
    publicado : "checked",
    img : "../src/img/pelis/DIWCCFQJBJKALNQ3BET2QXU674.jpg", 
  },
  {
    id : 6 ,
    titulo :"El Exorcista" ,
    tipo : "pelicula" ,
    categoria : "terror",
    descripcion : "Una actriz llama a unos sacerdotes jesuitas para que intenten terminar con la posesión demoníaca de su hija de 12 años.",
    publicado : "checked",
    img : "../src/img/pelis/MV5BMTgxMjIyNTc5Nl5BMl5BanBnXkFtZTgwMjgwNDgwNzE-._V1_.jpg", 
  },
  {
    id : 7 ,
    titulo :"Ted " ,
    tipo : "pelicula" ,
    categoria : "comedia",
    descripcion : "Cuando John Bennett era un niño pequeño, pidió el deseo de que Ted, su querido oso de peluche, cobrara vida. Treinta años más tarde, Ted continúa siendo el compañero de John, ante el disgusto de Lori, la novia de John.",
    publicado : "checked",
    img : "../src/img/pelis/ted.jpg", 
  },
  {
    id : 8 ,
    titulo :"Wrong missy",
    tipo : "pelicula" ,
    categoria : "comedia",
    descripcion : "Tras un intensa relación virtual, un joven decide invitar a la chica de sus sueños a una isla paradisíaca. Sin embargo, cuando se encuentran en persona, ambos se dan cuenta del error que han cometido.",
    publicado : "checked",
    img : "../src/img/pelis/wrong missy.jpg", 
  },
  {
    id : 9 ,
    titulo :"Civil War",
    tipo : "pelicula" ,
    categoria : "accion",
    descripcion : "Después de que otro incidente internacional, en el que se ven envueltos los Vengadores, produzca daños colaterales, la presión política obliga a poner en marcha un sistema para depurar responsabilidades.",
    publicado : "checked",
    img : "../src/img/pelis/civilwar.jpg", 
  },
  {
    id : 10 ,
    titulo :"El niño",
    tipo : "pelicula" ,
    categoria : "accion",
    descripcion : "Frontera sur de Europa. Dos continentes, tres países y 14 kilómetros, es tierra de contrabando. Desafiando la autoridad de los capos locales, El Niño y El Compi, dos jóvenes de 20 años, deciden ir por su cuenta y se introducen en el narcotráfico casi como un juego",
    publicado : "checked",
    img : "../src/img/pelis/el niño.jpg", 
  },
  {
    id : 11 ,
    titulo :"Liga de la justicia",
    tipo : "pelicula" ,
    categoria : "accion",
    descripcion : "Gracias a su renovada fe en la humanidad e inspirado por el acto de altruísmo de Superman, Bruce Wayne pide ayuda a su nueva aliada, Diana Prince, para enfrentar a un enemigo aún más peligroso",
    publicado : "checked",
    img : "../src/img/pelis/Justice League.jpg", 
  },
  {
    id : 12 ,
    titulo :"Piña express",
    tipo : "pelicula" ,
    categoria : "comedia",
    descripcion : "Dale Denton, cuyo trabajo es entregar citaciones legales, le compra marihuana a una mula que se llama Saul. El traficante quiere hacerse amigo suyo, pero Dale solo está interesado en los negocios.",
    publicado : "checked",
    img : "../src/img/pelis/pineapplexpress.jpg", 
  },
  {
    id : 13 ,
    titulo :"Star Wars: Episodio VIII",
    tipo : "pelicula" ,
    categoria : "accion",
    descripcion : "La Primera Orden ha acorralado a los últimos miembros de la resistencia. Su última esperanza es que Finn se introduzca en la nave de Snoke y desactive el radar que les permite localizarlos.",
    publicado : "checked",
    img : "../src/img/pelis/starwars.webp", 
  },
  {
    id : 14 ,
    titulo :"Transformers: el despertar de las bestias",
    tipo : "pelicula" ,
    categoria : "accion",
    descripcion : "Durante la década de 1990, los Maximals, Predacons y Terrorcons se unen a la batalla existente en la Tierra entre Autobots y Decepticons.",
    publicado : "checked",
    img : "../src/img/pelis/transformers caratula.jpg", 
  },
]
const bdusers=[{
  
}]
//cargo la base de datos
function bdd() {
  localStorage.setItem('PyS', JSON.stringify(bdpys))
  localStorage.setItem('users', JSON.stringify(bdpys))
}

// base de datos de peliculas y series
const basePyS = JSON.parse(localStorage.getItem("PyS"));

/// NAVBAR ///
// id resultado
const resultado = document.getElementById("resultado");
// id buscador
const buscador = document.getElementById("buscador");
// escucho el evento del input al presionar una tecla
buscador.addEventListener("input", function() {
  // comparo si el valor esta vacio en el input
  if(buscador.value === "") {
    resultado.classList.add("d-none");
  } // si encuenta un valor muestra el resultado
   else if (buscador.value) {
    resultado.classList.remove("d-none");
  }
  // almacena el valor en una constante resultadoBuscador
  const resultadoBuscador = buscador.value.toLowerCase();
  // al resultado lo deja en limpio
  resultado.innerHTML = "";
  // recorre la base de datos de peliculas y serie y encuentra conicidencia con el texto escrito
  basePyS.forEach(pys => {
    const id = pys.id;
    const img = pys.img;
    const titulo = pys.titulo.toLowerCase();

    //inserta codigo html en la constante resultado
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



/// INDEX ///
// id comedia
const comedia = document.getElementById("comedia");
// id terror
const terror = document.getElementById("terror");
// id accion
const accion = document.getElementById("accion");


// recorro la base de datos
basePyS.forEach(pys => {

  const id = pys.id;
  const img = pys.img;
  const titulo = pys.titulo;
  const categoria = pys.categoria;
  // inserto en el id accion, la P y S con categoria comedia
  if(categoria == "comedia") {
    comedia.innerHTML += `
    <div class="item m-3">
      <a href="./pages/detalle-pelicula.html?id=${id}">
        <img src="${img}" alt="${titulo}" class="card-img-top imgCarousel" >  
      </a>
    </div>
    `
  }  
  // inserto en el id accion, la P y S con categoria terror
  if(categoria == "terror") {
      terror.innerHTML += `<div class="item m-3">
      <a href="./pages/detalle-pelicula.html?id=${id}">
        <img src="${img}" alt="${titulo}" class="card-img-top imgCarousel" >  
      </a>
    </div>
      `
  }  
  // inserto en el id accion, la P y S con categoria accion
  if(categoria == "accion") {
      accion.innerHTML += `<div class="item m-3">
      <a href="./pages/detalle-pelicula.html?id=${id}">
        <img src="${img}" alt="${titulo}" class="card-img-top imgCarousel" >  
      </a>
    </div>
      `
  }  


});