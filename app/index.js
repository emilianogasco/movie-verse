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
      terror.innerHTML += `<div class="item m-3">
      <a href="./pages/detalle-pelicula.html?id=${id}">
        <img src="${img}" alt="${titulo}" class="card-img-top imgCarousel" >  
      </a>
    </div>
      `
  }  


});