const moneda = "$";
const DOMitems = document.querySelector("#items");
const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#boton-vaciar");
const myLocalStorage = window.localStorage;
const inputNombre = document.querySelector("#inputNombre");
const inputTelefono = document.querySelector("#inputTelefono");
const inputEmail = document.querySelector("#inputEmail");
const btnSubmit = document.querySelector("#submit");
let datosDeInput = "";
let carrito = [];
let listadeDeseos = [];
