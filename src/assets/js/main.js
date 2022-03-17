titulo.innerText = "Wow! qué dulce";
maincopy.innerText = "Nuestras mejores boxes para regalarnos";

const cargarproductos = ()=> {
    //debugger
    for(box of boxes){
        let itemList =
             "<li class='collection-item'>" + box + "</li>"
    boxeslist.innerHTML += itemList;
    }
}

cargarproductos();

