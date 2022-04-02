document.addEventListener("DOMContentLoaded", () => {
  const boxes = [
    {
      id: 001,
      nombre: "Wow! Box001",
      precio: 560.0,
      precioAnterior: 620.0,
      imagen: "../assets/images/box001.jpg",
      medidas: "15 x 15 x 10 cm",
      peso: 3.2,
      personas: 4,
      numpiezas: 8,
      piezas: [
        "Brownie",
        "Lemon Pie",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de chocolate",
        "Alfajorcito de chocolate",
      ],
      sabores: [
        "ch",
        "li",
        "v-ddl",
        "v-ddl",
        "v-ddl",
        "v-ddl",
        "ch-ddl",
        "ch-ddl",
      ],
    },
    {
      id: 002,
      nombre: "Wow! Box002",
      precio: 940.5,
      precioAnterior: 1020.0,
      imagen: "../assets/images/box002.jpg",
      medidas: "15 x 15 x 10 cm",
      peso: 3.2,
      personas: 4,
      numpiezas: 8,
      piezas: [
        "Brownie",
        "Lemon Pie",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de chocolate",
        "Alfajorcito de chocolate",
      ],
      sabores: [
        "ch",
        "li",
        "v-ddl",
        "v-ddl",
        "v-ddl",
        "v-ddl",
        "ch-ddl",
        "ch-ddl",
      ],
    },
    {
      id: 003,
      nombre: "Wow! Box003",
      precio: 320.0,
      precioAnterior: 420.0,
      imagen: "../assets/images/box003.jpg",
      medidas: "15 x 15 x 10 cm",
      peso: 3.2,
      personas: 4,
      numpiezas: 8,
      piezas: [
        "Brownie",
        "Lemon Pie",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de chocolate",
        "Alfajorcito de chocolate",
      ],
      sabores: [
        "ch",
        "li",
        "v-ddl",
        "v-ddl",
        "v-ddl",
        "v-ddl",
        "ch-ddl",
        "ch-ddl",
      ],
    },
    {
      id: 004,
      nombre: "Wow! Box004",
      precio: 450.0,
      precioAnterior: 620.0,
      imagen: "../assets/images/box004.jpg",
      medidas: "15 x 15 x 10 cm",
      peso: 3.2,
      personas: 4,
      numpiezas: 8,
      piezas: [
        "Brownie",
        "Lemon Pie",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de chocolate",
        "Alfajorcito de chocolate",
      ],
      sabores: [
        "ch",
        "li",
        "v-ddl",
        "v-ddl",
        "v-ddl",
        "v-ddl",
        "ch-ddl",
        "ch-ddl",
      ],
    },
    {
      id: 005,
      nombre: "Wow! Box005",
      precio: 500.0,
      precioAnterior: 620.0,
      imagen: "../assets/images/box005.jpg",
      medidas: "15 x 15 x 10 cm",
      peso: 3.2,
      personas: 4,
      numpiezas: 8,
      piezas: [
        "Brownie",
        "Lemon Pie",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de chocolate",
        "Alfajorcito de chocolate",
      ],
      sabores: [
        "ch",
        "li",
        "v-ddl",
        "v-ddl",
        "v-ddl",
        "v-ddl",
        "ch-ddl",
        "ch-ddl",
      ],
    },
    {
      id: 006,
      nombre: "Wow! Box006",
      precio: 1028.0,
      precioAnterior: 1320.0,
      imagen: "../assets/images/box006.jpg",
      medidas: "15 x 15 x 10 cm",
      peso: 3.2,
      personas: 4,
      numpiezas: 8,
      piezas: [
        "Brownie",
        "Lemon Pie",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de maicena DDL",
        "Alfajorcito de chocolate",
        "Alfajorcito de chocolate",
      ],
      sabores: [
        "ch",
        "li",
        "v-ddl",
        "v-ddl",
        "v-ddl",
        "v-ddl",
        "ch-ddl",
        "ch-ddl",
      ],
    },
  ];

  let carrito = [];
  const moneda = "$";
  const DOMitems = document.querySelector("#items");
  const DOMcarrito = document.querySelector("#carrito");
  const DOMtotal = document.querySelector("#total");
  const DOMbotonVaciar = document.querySelector("#boton-vaciar");
  const myLocalStorage = window.localStorage;
  let numOfItemsCart = document.getElementById("numOfItemsCart");
  let numeroUnidadesItem = document.getElementById("numOfItemsCart");
  numOfItemsCart.textContent = `${numeroUnidadesItem}`;

     const inputNombre = document.querySelector("#inputNombre");
     const inputTelefono = document.querySelector("#inputTelefono");
     const inputEmail = document.querySelector("#inputEmail");
     const btnSubmit = document.querySelector("#submit");

     let datosDeInput = "";

  function listarBoxes() {
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

  function agregarBoxesaCarrito(evento) {
    //debugger
    carrito.push(evento.target.getAttribute("marcador"));
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
  }

  function mostrarCarrito() {
    //debugger
    DOMcarrito.textContent = "";
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
      const miItem = boxes.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
      });
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
        return itemId === item ? (total += 1) : total;
      }, 0);
      const miNodo = document.createElement("li");
      miNodo.className = `bg-black-100 shadow rounded overflow-hidden group w-full`;
      miNodo.textContent = `${numeroUnidadesItem} x ${
        miItem[0].nombre
      } - ${moneda} ${miItem[0].precio.toFixed(2)} = ${moneda} ${
        numeroUnidadesItem * miItem[0].precio
      }`;
      const miBoton = document.createElement("button");
      miBoton.className =
        "w-15 text-center text-green-800 bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition";
      miBoton.textContent = "X";
      miBoton.style.marginLeft = "1rem";
      miBoton.dataset.item = item;
      miBoton.addEventListener("click", borrarItemCarrito);
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
    });
    DOMtotal.textContent = calcularTotal();
  }

  function borrarItemCarrito(evento) {
    //debugger
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
  }

  function calcularTotal() {
    //debugger
    return carrito
      .reduce((total, item) => {
        const miItem = boxes.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
      }, 0)
      .toFixed(2);
  }

  function vaciarCarrito() {
    //debugger
    carrito = [];
    mostrarCarrito();
    localStorage.clear();
  }

  function guardarCarritoEnLocalStorage() {
    //debugger
    myLocalStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function agregarCarritoDeLocalStorage() {
    //debugger
    myLocalStorage.getItem("carrito") !== null ? carrito = JSON.parse(myLocalStorage.getItem("carrito")) : carrito=[];
  }

    DOMbotonVaciar.addEventListener("click", vaciarCarrito);

  agregarCarritoDeLocalStorage();
  listarBoxes();
  mostrarCarrito();
});
