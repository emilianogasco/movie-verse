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