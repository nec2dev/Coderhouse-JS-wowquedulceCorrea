const focoEnCampos = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")
            campo.addEventListener("blur", ()=> campo.className = "")
        }
    }
};

btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Complete los datos antes de pulsar ENVIAR"
});

document.addEventListener("submit", (event)=> {
    event.preventDefault()
    alert("Formulario enviado.")
});

inputNombre.addEventListener("keyup", (event)=> {
    datosDeInput = event.target.value
    console.log(datosDeInput)
});

inputNombre.addEventListener("keypress", (event)=> {
    if (event.keyCode == 13) { //event.key = "Enter"
        inputTelefono.focus()
    }
});

focoEnCampos();