document.addEventListener("DOMContentLoaded", () => {
  // Funciones de la tienda
  // Renderiza todos los productos desde la base de datos.
  function listarBoxes() {
    boxes.forEach((info) => {
      //Marco estructural de diseño con estilo de Tailwind
      const miNodo = document.createElement("div");
      miNodo.className = `bg-white shadow rounded overflow-hidden group`;
      //El cuerpo de la tarjeta
      const miNodoCardBody = document.createElement("div");
      miNodoCardBody.className = `relative`;
      //El título de la box
      const miNodoTitle = document.createElement("h4");
      miNodoTitle.className = `uppercase font-medium text-xl text-center mb-2 text-gray-800 hover:text-primary transition`;
      miNodoTitle.textContent = info.nombre;
      //La imagen de la box
      const miNodoImagen = document.createElement("img");
      miNodoImagen.setAttribute("src", info.imagen);
      //Efecto rollOver
      const miNodoRollOver = document.createElement("div");
      //miNodoRollOver.className = `"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition`;
      miNodoRollOver.innerHTML =
        "<div class='h-90 inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition'>" +
        "<div class='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-400 transition'>" +
        "<i class='fas fa-search'></i></div><div class='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-400 transition'>" +
        "<button class='fas fa-heart' id='boton-vaciar2'></button></div></div>" +
        "";
      //miNodoRollOver.miNodoBoton = document.createElement("button");
      //miNodoRollOver.className = `fas fa-heart block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition`
      //miNodoRollOver.textContent = `Agregar a la lista de Deseos`;
      //miNodoRollOver.setAttribute("marcador2", info.id);
      //miNodoRollOver.addEventListener("click", agregarBoxesaListadeDeseos);
      //El precio de oferta de la box
      const miNodoPrecio = document.createElement("p");
      miNodoPrecio.className = `text-xl text-primary font-semibold text-center`;
      miNodoPrecio.textContent = `${moneda} ${info.precio.toFixed(2)}`;
      //El precio de lista de la box
      const miNodoPrecioAnterior = document.createElement("p");
      miNodoPrecioAnterior.className = `text-sm text-gray-400 line-through text-center`;
      miNodoPrecioAnterior.textContent = `${moneda} ${info.precioAnterior.toFixed(
        2
      )}`;
      //La valoración de la box
      const miNodoEstrellas = document.createElement("div");
      miNodoEstrellas.innerHTML =
        "<div class='flex items-center'><div class='flex gap-1 text-sm text-yellow-400'>" +
        "<span><i class='fas fa-star'></i></span>" +
        "<span><i class='fas fa-star'></i></span>" +
        "<span><i class='fas fa-star'></i></span>" +
        "<span><i class='fas fa-star'></i></span>" +
        "<span><i class='fas fa-star'></i></span>" +
        "</div><div class='text-xs text-gray-500 ml-3'>(150)</div></div>";
      //El peso de la box
      const miNodoPeso = document.createElement("p");
      miNodoPeso.textContent = `Peso: ${info.peso} Kg.`;
      //Las medidas de la box
      const miNodoMedidas = document.createElement("p");
      miNodoMedidas.textContent = `Medidas: ${info.medidas}`;
      //El botón de Agregar al carrito
      const miNodoBoton = document.createElement("button");
      miNodoBoton.className = `block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition`;
      miNodoBoton.textContent = `Agregar al Carrito`;
      miNodoBoton.setAttribute("marcador", info.id);
      miNodoBoton.addEventListener("click", agregarBoxesaCarrito);
      //El botón de Agregar a la lista de Deseos
      const miNodoBoton2 = document.createElement("button");
      miNodoBoton2.className = `fas fa-heart block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition`;
      //miNodoBoton2.textContent = `Agregar a la lista de deseos`;
      miNodoBoton2.setAttribute("marcador2", info.id);
      miNodoBoton2.addEventListener("click", agregarBoxesaListadeDeseos);

      //Agregamos los nodos al DOM
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoRollOver);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoPrecioAnterior);
      miNodoCardBody.appendChild(miNodoEstrellas);
      miNodoCardBody.appendChild(miNodoPeso);
      miNodoCardBody.appendChild(miNodoMedidas);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodoCardBody.appendChild(miNodoBoton2);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
    });
  }

  // función que tras 2 segundo retorna un array de objetos
  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(boxes);
      }, 2000);
    });
  };

  //inicializamos con un array vacío
  let productos = [];
  const renderProductos = (arr) => {
    listarBoxes();
  };
  // asincrónicamente pedimos los datos y generamos la vista
  pedirProductos().then((res) => {
    productos = res;
    renderProductos(productos);
  });

  //Agrega un producto al carrito de compra
  function agregarBoxesaCarrito(evento) {
    carrito.push(evento.target.getAttribute("marcador"));
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
    swal({
      title: "¡Producto agregado!",
      text: "El producto se ha agregado al carrito de compras",
      icon: "success",
      background: "#f9dee9",
    });
  }

  //Agrega un producto a la lista de deseos
  function agregarBoxesaListadeDeseos(evento2) {
    listadeDeseos.push(evento2.target.getAttribute("marcador2"));
    mostrarListadeDeseos();
    guardarListadeDeseosEnLocalStorage();
    swal({
      title: "¡Producto agregado!",
      text: "El producto se ha agregado a tu lista de deseos!",
      icon: "success",
      background: "#f9dee9",
    });
  }

  //Muestra el carrito de compra
  function mostrarCarrito() {
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
      miNodo.className = `bg-black-100 shadow rounded overflow-hidden group w-full my-4`;
      miNodo.textContent = `${numeroUnidadesItem} x ${
        miItem[0].nombre
      } - ${moneda} ${miItem[0].precio.toFixed(2)} = ${moneda} ${
        numeroUnidadesItem * miItem[0].precio
      }.00`;
      const miBoton = document.createElement("button");
      miBoton.textContent = "X";
      miBoton.className =
        "mx-4 px-3 py-2 bg-primary rounded-lg hover:bg-transparent hover:text-primary transition";
      miBoton.dataset.item = item;
      miBoton.addEventListener("click", borrarItemCarrito);
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
    });
    DOMtotal.textContent = calcularTotal();
  }

  //Muestra la lista de deseos
  function mostrarListadeDeseos() {
    DOMlistadeDeseos.textContent = "";
    const listadeDeseosSinDuplicados = [...new Set(listadeDeseos)];
    listadeDeseosSinDuplicados.forEach((item2) => {
      const miItem2 = boxes.filter((itemBaseDatos2) => {
        return itemBaseDatos2.id === parseInt(item2);
      });
      const numeroUnidadesItem2 = listadeDeseos.reduce((total2, itemId2) => {
        return itemId2 === item2 ? (total2 += 1) : total2;
      }, 0);
      const miNodo2 = document.createElement("li");
      miNodo2.className = `bg-black-100 shadow rounded overflow-hidden group w-full my-4`;
      miNodo2.textContent = `${numeroUnidadesItem2} x ${
        miItem2[0].nombre
      } - ${moneda} ${miItem2[0].precio.toFixed(2)} = ${moneda} ${
        numeroUnidadesItem2 * miItem2[0].precio
      }.00`;
      const miBoton2 = document.createElement("button");
      miBoton2.textContent = "X";
      miBoton2.className =
        "mx-4 px-3 py-2 bg-primary rounded-lg hover:bg-transparent hover:text-primary transition";
      miBoton2.dataset.item2 = item2;
      miBoton2.addEventListener("click", borrarItemListadeDeseos);
      miNodo2.appendChild(miBoton2);
      DOMlistadeDeseos.appendChild(miNodo2);
    });
    DOMtotal2.textContent = calcularTotalDeseos();
  }

  //Borra una box del carrito de compra
  function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
  }

  //Borra una box de la lista de deseos
  function borrarItemListadeDeseos(evento2) {
    const id2 = evento2.target.dataset.item2;
    listadeDeseos = listadeDeseos.filter((listadeDeseosId) => {
      return listadeDeseosId !== id2;
    });
    mostrarListadeDeseos();
    guardarListadeDeseosEnLocalStorage();
  }

  //Calcula el Precio final y muestra el detalle de las unidades en el carrito
  function calcularTotal() {
    return carrito
      .reduce((total, item) => {
        const miItem = boxes.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
      }, 0)
      .toFixed(2);
  }

  //Calcula el Precio final y muestra el detalle de las unidades en la lista de deseos
  function calcularTotalDeseos() {
    return listadeDeseos
      .reduce((total2, item2) => {
        const miItem2 = boxes.filter((itemBaseDatos2) => {
          return itemBaseDatos2.id === parseInt(item2);
        });
        return total2 + miItem2[0].precio;
      }, 0)
      .toFixed(2);
  }

  //Elimina todos los productos del carrito de compra
  function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
    localStorage.clear();
    swal({
      title: "¡Ojo!",
      text: "Se van a eliminar todos los productos del carrito de compras",
      icon: "warning",
      buttons: ["No, no quiero eliminar nada!", "Si, estoy seguro!"],
    });
  }
  DOMbotonVaciar.addEventListener("click", vaciarCarrito);

  //Elimina todos los productos de la lista de Deseos
  function vaciarListadeDeseos() {
    listadeDeseos = [];
    mostrarListadeDeseos();
    localStorage.clear();
    swal({
      title: "¡Ojo!",
      text: "Se van a eliminar todos los productos de tu lista de Deseos",
      icon: "warning",
      buttons: ["No, no quiero eliminar nada!", "Si, estoy seguro!"],
    });
  }
  DOMbotonVaciar2.addEventListener("click", vaciarListadeDeseos);

  //  const boxes = document.querySelector("#listado");
  //  fetch("./data.json")
  //    .then((res) => res.json())
  //    .then((data) => {
  //     data.forEach((boxes) => {
  //        const li = document.createElement("li");
  //        li.innerHTML = `
  //                    <h4>${boxes.precio}</h4>
  //                    <p>${boxes.nombre}</p>
  //                    <p>Código: ${boxes.id}</p>
  //                    <hr/>
  //                `;

  //        boxes.append(li);
  //      });
  //    });

  //Eventos
  agregarCarritoDeLocalStorage();
  mostrarCarrito();
  agregarListadeDeseosDeLocalStorage();
  mostrarListadeDeseos();
});
