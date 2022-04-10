//Funciones del localStorage
function guardarCarritoEnLocalStorage() {
    //debugger
    myLocalStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function agregarCarritoDeLocalStorage() {
    //debugger
    myLocalStorage.getItem("carrito") !== null
      ? (carrito = JSON.parse(myLocalStorage.getItem("carrito")))
      : (carrito = []);
  }