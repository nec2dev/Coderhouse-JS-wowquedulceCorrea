const titulo = document.getElementById("titulo");
const maincopy = document.getElementById("maincopy");

titulo.innerText = "Wow! qué dulce";
maincopy.innerText = "Nuestras mejores boxes para regalarnos";

const featuredboxes = ["box001", "box002", "box003", "box004"];
const ul = document.getElementById("featuredboxeslist");
const cargarBoxesDestacadas = () => {
  //debugger
  for (box of featuredboxes) {
    const liBoxes = document.createElement("li");
    liBoxes.className = "collection-item";
    liBoxes.innerText = box;
    liBoxes.setAttribute("onclick", `agregarAlCarrito('${box}')`);
    ul.append(liBoxes);
  }
};

function listarFavoritos() {
  //debugger
  boxes.forEach((info) => {
    const miNodo = document.createElement("div");
    miNodo.className = `bg-secondary shadow rounded overflow-hidden group`;
    const miNodoCardBody = document.createElement("div");
    miNodoCardBody.className = `relative`;
    const miNodoRollOver = document.createElement("div");
    miNodoRollOver.style.backgroundImage = `url("../assets/images/box001.jpg")`;
    miNodoRollOver.className = `"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition`;
    miNodoRollOver.innerHTML =
      "<a href='#' class='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'>" +
      "<i class='fas fa-search'></i></a><a href='#'class='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'>" +
      "<i class='fas fa-heart'></i></a>";
    const miNodoTitle = document.createElement("h4");
    miNodoTitle.className = `uppercase font-medium text-xl text-center mb-2 text-gray-800 hover:text-primary transition`;
    miNodoTitle.textContent = info.nombre;
    const miNodoImagen = document.createElement("img");
    miNodoImagen.setAttribute("src", info.imagen);
    const miNodoPrecio = document.createElement("p");
    miNodoPrecio.className = `text-xl text-primary font-semibold text-center`;
    miNodoPrecio.textContent = `${moneda} ${info.precio.toFixed(2)}`;
    const miNodoPrecioAnterior = document.createElement("p");
    miNodoPrecioAnterior.className = `text-sm text-gray-400 line-through text-center`;
    miNodoPrecioAnterior.textContent = `${moneda} ${info.precioAnterior.toFixed(
      2
    )}`;
    const miNodoEstrellas = document.createElement("div");
    miNodoEstrellas.innerHTML =
      "<div class='flex items-center'><div class='flex gap-1 text-sm text-yellow-400'>" +
      "<span><i class='fas fa-star'></i></span>" +
      "<span><i class='fas fa-star'></i></span>" +
      "<span><i class='fas fa-star'></i></span>" +
      "<span><i class='fas fa-star'></i></span>" +
      "<span><i class='fas fa-star'></i></span>" +
      "</div><div class='text-xs text-gray-500 ml-3'>(150)</div></div>";
    const miNodoPeso = document.createElement("p");
    miNodoPeso.textContent = `Peso: ${info.peso} Kg.`;
    const miNodoMedidas = document.createElement("p");
    miNodoMedidas.textContent = `Medidas: ${info.medidas}`;
    const miNodoBoton = document.createElement("button");
    miNodoBoton.className = `block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition`;
    miNodoBoton.textContent = `Agregar al Carrito`;
    miNodoBoton.setAttribute("marcador", info.id);
    miNodoBoton.addEventListener("click", agregarBoxesaCarrito);
    miNodoCardBody.appendChild(miNodoImagen);
    miNodoCardBody.append(miNodoRollOver);
    miNodoCardBody.appendChild(miNodoTitle);
    miNodoCardBody.appendChild(miNodoPrecio);
    miNodoCardBody.appendChild(miNodoPrecioAnterior);
    miNodoCardBody.appendChild(miNodoEstrellas);
    miNodoCardBody.appendChild(miNodoPeso);
    miNodoCardBody.appendChild(miNodoMedidas);
    miNodoCardBody.appendChild(miNodoBoton);
    miNodo.appendChild(miNodoCardBody);
    DOMitems.appendChild(miNodo);
  });
}

cargarBoxesDestacadas();
agregarCarritoDeLocalStorage();
mostrarCarrito();
