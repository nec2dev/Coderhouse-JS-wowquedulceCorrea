//Funciones del localStorage
function guardarCarritoEnLocalStorage() {
  myLocalStorage.setItem("carrito", JSON.stringify(carrito));
}
function agregarCarritoDeLocalStorage() {
  myLocalStorage.getItem("carrito") !== null
    ? (carrito = JSON.parse(myLocalStorage.getItem("carrito")))
    : (carrito = []);
}

function guardarListadeDeseosEnLocalStorage() {
  myLocalStorage.setItem("listadeDeseos", JSON.stringify(listadeDeseos));
}
function agregarListadeDeseosDeLocalStorage() {
  myLocalStorage.getItem("listadeDeseos") !== null
    ? (listadeDeseos = JSON.parse(myLocalStorage.getItem("listadeDeseos")))
    : (listadeDeseos = []);
}
