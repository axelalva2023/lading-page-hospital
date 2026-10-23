const etiquetaParrafo = document.getElementById("parrafo")

let texto = "Bievenidos!!!"
let contador = 0

setInterval(() =>{
    if(texto.length > contador){
        etiquetaParrafo.innerText += texto[contador]
        contador += 1
    }else{
        etiquetaParrafo.innerText = ""
        contador = 0
    }
}, 300)

const boton = document.getElementById("botonModo")

const form = document.getElementById("formulario")

boton.addEventListener("click", () => {
    form.classList.toggle("modo-oscuro")
    if(form.classList.contains("modo-oscuro")){
        boton.value = "Modo claro"
    }else{
        boton.value = "Modo oscuro"
    }
})

const producto = document.getElementById("producto")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correo")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    try{

        const datos = {
            nombre: nombre.value,
            apellido: apellido.value,
            correo: correo.value,
            producto: producto.value
        }
        const options = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        }
    
        fetch("https://lading-page-hospital-2.onrender.com/formulario", options)
    }catch{
        alert("Error al enviar datos")
    }
    form.reset()

    alert("Datos enviados a MONGO DB")
})