
  
// function detallePeli () {
//     window.location.href = "http://127.0.0.1:5501/pages/detalle-pelicula.html";
// }

const basePyS = JSON.parse(localStorage.getItem("PyS"));

const comedia = document.getElementById("comedia");

basePyS.forEach(pys => {

    const id = pys.id;
    const img = pys.img;
    const titulo = pys.titulo;
    const categoria = pys.categoria;

    if(pys.categoria == "comedia") {
        comedia.innerHTML += `<div class="item m-3">
        <a href="./pages/detalle-pelicula.html?id=${id}">
          <img src="${img}" alt="${titulo}" class="card-img-top imgCarousel" >  
        </a>
      </div>
        `
    }  

    if(pys.categoria == "terror") {
        terror.innerHTML += `<div class="item m-3">
        <a href="./pages/detalle-pelicula.html?id=${id}">
          <img src="${img}" alt="${titulo}" class="card-img-top imgCarousel" >  
        </a>
      </div>
        `
    }  

    if(pys.categoria == "accion") {
        terror.innerHTML += `<div class="item m-3">
        <a href="./pages/detalle-pelicula.html?id=${id}">
          <img src="${img}" alt="${titulo}" class="card-img-top imgCarousel" >  
        </a>
      </div>
        `
    }  


  });