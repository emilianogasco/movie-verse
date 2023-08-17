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
        <a href="./pages/detalle-pelicula.html?id=${id}" class="d-flex my-2 align-items-center peliBuscador text-decoration-none text-dark">
          <img class="w-25 imagenesBuscador" src="${img}" alt="${titulo}">
          <p class="titulosBuscador">${titulo}</p>
        </a>
    </div>

    <hr>
        `
    }  
  });

})

// obtengo el valor del id atraves de un GET
const urlParams = new URLSearchParams(window.location.search);

// almaceno el valor del id en la variable movieIndex
let movieIndex = urlParams.get("id");

// id movie-details 
const movieDetailsContainer = document.getElementById("movie-details");

// pregunto si el id que obtengo por get es null que muestre el mensaje por pantalla
if(movieIndex == null){
  movieDetailsContainer.innerHTML =`
  <div class="container d-flex align-items-center justify-content-center">
  <div class="display-5 text-dark m-5">NO SE ENCONTRO RESULTADO</div>
</div>`
}// caso contrario que muestre el resultado
else{
  // recorro la base de datos
  basePyS.forEach(pys => {
    // obtengo una pelicula o serie y pregunto si es exactamente igual al id que recibo por get
    if(pys.id == movieIndex){
      // inyecto codigo html en el container de movie detalle
      movieDetailsContainer.innerHTML = `
      <div class="container-fluid mt-5">
        <div class="row"> 
          <div class="col-12 col-md-6">
            <div>
              <div class="mb-2 ">
                <img class="img-fluid w-25" src="${pys.img} " alt="">
              </div>
              <h4>${pys.titulo} </h4>
              <div class="informacion d-flex mb-3">
                <p class="texto mb-3 me-2">2 h 7 min</p>
                <i class="bi bi-badge-hd me-2"></i>
                <p class="texto mb-3">2023</p>
              </div>
            </div>
            <div class="description">
              <h6>${pys.descripcion}</h6>
            </div>
            <div class="mb-2">
              <a href="./error-404.html">
                <button class="btn btn-primary">Reproducir <i class="bi bi-caret-right-square-fill"></i></button>
              </a>
            </div>
            <div class="mb-2">
              <a href="./pages/error-404.html">
                <button class="btn btn-primary">Ver trailer</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      `;
      
    }
  })
}

