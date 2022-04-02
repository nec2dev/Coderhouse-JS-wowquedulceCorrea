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

cargarBoxesDestacadas();
agregarCarritoDeLocalStorage();
mostrarCarrito();
