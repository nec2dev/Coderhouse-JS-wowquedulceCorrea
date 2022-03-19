// const boxes = [
//   {
//       id: 001,
//       nombre: 'Wow! Box001',
//       precio: 560.00,
//       precioAnterior: 620.00,
//       imagen: '../assets/images/box001.jpg',
//       medidas: '15 x 15 x 10 cm',
//       peso: 3.20,
//       personas: 4,
//       numpiezas: 8,
//       piezas: ['Brownie', 'Lemon Pie', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de chocolate', 'Alfajorcito de chocolate'],
//       sabores: ['ch', 'li', 'v-ddl', 'v-ddl', 'v-ddl', 'v-ddl', 'ch-ddl', 'ch-ddl']
//   },
//   {
//       id: 002,
//       nombre: 'Wow! Box002',
//       precio: 940.50,
//       precioAnterior: 1020.00,
//       imagen: '../assets/images/box002.jpg',
//       medidas: '15 x 15 x 10 cm',
//       peso: 3.20,
//       personas: 4,
//       numpiezas: 8,
//       piezas: ['Brownie', 'Lemon Pie', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de chocolate', 'Alfajorcito de chocolate'],
//       sabores: ['ch', 'li', 'v-ddl', 'v-ddl', 'v-ddl', 'v-ddl', 'ch-ddl', 'ch-ddl']
//   },
//   {
//       id: 003,
//       nombre: 'Wow! Box003',
//       precio: 320.00,
//       precioAnterior: 420.00,
//       imagen: '../assets/images/box003.jpg',
//       medidas: '15 x 15 x 10 cm',
//       peso: 3.20,
//       personas: 4,
//       numpiezas: 8,
//       piezas: ['Brownie', 'Lemon Pie', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de chocolate', 'Alfajorcito de chocolate'],
//       sabores: ['ch', 'li', 'v-ddl', 'v-ddl', 'v-ddl', 'v-ddl', 'ch-ddl', 'ch-ddl']
//   },
//   {
//       id: 004,
//       nombre: 'Wow! Box004',
//       precio: 450.00,
//       precioAnterior: 620.00,
//       imagen: '../assets/images/box004.jpg',
//       medidas: '15 x 15 x 10 cm',
//       peso: 3.20,
//       personas: 4,
//       numpiezas: 8,
//       piezas: ['Brownie', 'Lemon Pie', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de chocolate', 'Alfajorcito de chocolate'],
//       sabores: ['ch', 'li', 'v-ddl', 'v-ddl', 'v-ddl', 'v-ddl', 'ch-ddl', 'ch-ddl']
//   },
//   {
//       id: 005,
//       nombre: 'Wow! Box005',
//       precio: 500.00,
//       precioAnterior: 620.00,
//       imagen: '../assets/images/box005.jpg',
//       medidas: '15 x 15 x 10 cm',
//       peso: 3.20,
//       personas: 4,
//       numpiezas: 8,
//       piezas: ['Brownie', 'Lemon Pie', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de chocolate', 'Alfajorcito de chocolate'],
//       sabores: ['ch', 'li', 'v-ddl', 'v-ddl', 'v-ddl', 'v-ddl', 'ch-ddl', 'ch-ddl']
//   },
//   {
//       id: 006,
//       nombre: 'Wow! Box006',
//       precio: 1028.00,
//       precioAnterior: 1320.00,
//       imagen: '../assets/images/box006.jpg',
//       medidas: '15 x 15 x 10 cm',
//       peso: 3.20,
//       personas: 4,
//       numpiezas: 8,
//       piezas: ['Brownie', 'Lemon Pie', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de maicena DDL', 'Alfajorcito de chocolate', 'Alfajorcito de chocolate'],
//       sabores: ['ch', 'li', 'v-ddl', 'v-ddl', 'v-ddl', 'v-ddl', 'ch-ddl', 'ch-ddl']
//   }

// ];

// let carrito = [];
// const moneda = '$';
// const DOMitems = document.querySelector('#items');
// const DOMcarrito = document.querySelector('#carrito');
// const DOMtotal = document.querySelector('#total');
// const DOMbotonVaciar = document.querySelector('#boton-vaciar');

function listarBoxes() {
  //debugger
  boxes.forEach((info) => {
      const miNodo = document.createElement('div');
      miNodo.className = `bg-white shadow rounded overflow-hidden group`;
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.className = `relative`;
      const miNodoRollOver = document.createElement('div');
      miNodoRollOver.className = `absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition`;
      const miNodoTitle = document.createElement('h4');
      miNodoTitle.className = `uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition`;
      miNodoTitle.textContent = info.nombre;
      const miNodoImagen = document.createElement('img');
      miNodoImagen.setAttribute('src', info.imagen);
      const miNodoPrecio = document.createElement('p');
      miNodoPrecio.className = `text-xl text-primary font-semibold`;
      miNodoPrecio.textContent = `${moneda} ${info.precio}`;
      const miNodoPrecioAnterior = document.createElement('p');
      miNodoPrecioAnterior.className = `text-sm text-gray-400 line-through`;
      miNodoPrecioAnterior.textContent = `${moneda} ${info.precioAnterior}`;
      const miNodoPeso = document.createElement('p');
      miNodoPeso.textContent = `Peso: ${info.peso} Kg.`;
      const miNodoMedidas = document.createElement('p');
      miNodoMedidas.textContent = `Medidas: ${info.medidas}`;
      const miNodoBoton = document.createElement('button');
      miNodoBoton.className = `block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition`;
      miNodoBoton.textContent = `Agregar al Carrito`;
      miNodoBoton.setAttribute('marcador', info.id);
      miNodoBoton.addEventListener('click', agregarBoxesaCarrito);
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoPrecioAnterior);
      miNodoCardBody.appendChild(miNodoPeso);
      miNodoCardBody.appendChild(miNodoMedidas);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
  });
}

function agregarBoxesaCarrito(evento) {
  //debugger
  carrito.push(evento.target.getAttribute('marcador'))
  mostrarCarrito();
}

function mostrarCarrito() {
  //debugger
  DOMcarrito.textContent = '';
  const carritoSinDuplicados = [...new Set(carrito)];
  carritoSinDuplicados.forEach((item) => {
      const miItem = boxes.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
      });
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          return itemId === item ? total += 1 : total;
      }, 0);
      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${moneda} ${miItem[0].precio}`;
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-5');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
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
}

function calcularTotal() {
  //debugger 
  return carrito.reduce((total, item) => {
      const miItem = boxes.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
      });
      return total + miItem[0].precio;
  }, 0).toFixed(2);
}

function vaciarCarrito() {
  //debugger
  carrito = [];
  mostrarCarrito();
}

DOMbotonVaciar.addEventListener('click', vaciarCarrito);

listarBoxes();
mostrarCarrito();
