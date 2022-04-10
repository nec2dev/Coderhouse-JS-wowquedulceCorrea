document.addEventListener("DOMContentLoaded", () => {
// Funciones de la tienda
  // Renderiza todos los productos desde la base de datos.
  function listarBoxes() {
    //debugger
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
        "<a href='#' class='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-400 transition'>" +
        "<i class='fas fa-search'></i></a><a href='#'class='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-400 transition'>" +
        "<i class='fas fa-heart'></i></a></div>" +
        "";
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
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
    });
  }

  //Agrega un producto al carrito de compra
  function agregarBoxesaCarrito(evento) {
    //debugger
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

  //Muestra el carrito de compra
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
      miNodo.className = `bg-black-100 shadow rounded overflow-hidden group w-full my-4`;
      miNodo.textContent = `${numeroUnidadesItem} x ${
        miItem[0].nombre
      } - ${moneda} ${miItem[0].precio.toFixed(2)} = ${moneda} ${
        numeroUnidadesItem * miItem[0].precio
      }`;
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

  //Borra una box del carrito de compra
  function borrarItemCarrito(evento) {
    //debugger
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
  }

  //Calcula el Precio final y muestra el detalle de las unidades en el carrito
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

  //Elimina todos los productos del carrito de compra
  function vaciarCarrito() {
    //debugger
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
  
  // const lista = document.querySelector("#listado");
  // fetch(boxesjson)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     data.forEach((boxesjson) => {
  //       const li = document.createElement("li");
  //       li.innerHTML = `
  //                   <h4>${boxesjson.precio}</h4>
  //                   <p>${boxesjson.nombre}</p>
  //                   <p>Código: ${boxesjson.id}</p>
  //                   <hr/>
  //               `;

  //       lista.append(li);
  //     });
  //   });

  //Eventos
  agregarCarritoDeLocalStorage();
  mostrarCarrito();
});
