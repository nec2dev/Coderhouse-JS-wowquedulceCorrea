const boxes = ['box001', 'box002', 'box003', 'box004', 'box005', 'box006'];

const cargarproductos = ()=> {
    //debugger
    for(box of boxes){
        let itemList =
             "<li class='bg-white shadow rounded overflow-hidden group'>" +
                 "<div class='relative'>" +
                     "<img src='../assets/images/" + box + ".jpg'class='w-full' alt=''>" +
                     "<div class='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition'>" +
                         "<a href='#' class='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'>" +
                             "<i class='fas fa-search'></i>" +
                         "</a>" +
                         "<a href='#' class='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'>" +
                             "<i class='fas fa-heart'></i>" +
                         "</a>" +
                     "</div>" +
                     "<div class='pt-4 pb-3 px-4'>" +
                         "<a href='#'>" +
                             "<h4 class='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>" + box + "</h4>" +
                         "</a>" +
                         "<div class='flex items-baseline mb-1 space-x-2 font-roboto'>" +
                             "<p class='text-xl text-primary font-semibold'>$ 325.00</p>" +
                             "<p class='text-sm text-gray-400 line-through'>$ 520.00</p>" +
                         "</div>" +
                         "<div class='flex items-center'>" +
                             "<div class='flex gap-1 text-sm text-yellow-400'>" +
                                 "<span><i class='fas fa-star'></i></span>" +
                                 "<span><i class='fas fa-star'></i></span>" +
                                 "<span><i class='fas fa-star'></i></span>" +
                                 "<span><i class='fas fa-star'></i></span>" +
                                 "<span><i class='fas fa-star'></i></span>" +
                             "</div>" +
                             "<div class='text-xs text-gray-500 ml-3'>(150)</div>" +
                         "</div>" +
                     "</div>" +
                     "<a href='#' class='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'>Agregar al carrito</a>" +
                 "</div>" +
             "</li>";
    boxeslist.innerHTML += itemList
    }
}

cargarproductos()