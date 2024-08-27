const d = document;
const textArea = d.querySelector(".form__input");
const imagenMonito = d.querySelector(".result__ing");
const loaderBatman = d.querySelector(".loader");
const resultadoTitulo = d.querySelector(".result__title");
const resultadoText = d.querySelector(".result__text");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelectorAll(".form__btn");
const botonCopiar = d.querySelector(".result__btn");



const llaves = [
    ["e","enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
// funcion para encriptar
//complexity is 6 it´s time to doo something.
function encriptarmensaje(mensaje){
    let mensajeEncriptado ="";
   for(let i =0; i < mensaje.length; i++){
    let letra = mensaje[i];
    let encontrada = letra;
    for(let j = 0; j < llaves.length; j++){
        if(letra ===  llaves[j][0]){
            encontrada = llaves[j][1]; //remplaza la letra por un equivalente encriptado 
        break; // termina el bucle cuando se encuentra la correspondencia
        }
            }
            mensajeEncriptado += encontrada;
   }
   return mensajeEncriptado;
}
//funcion para desencriptar
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}
//oultar elemntos dinamicamente
textArea.addEventListener("input", (e)=>{
    imagenMonito.style.display = "none";
    resultadoTitulo.textContent = "capturando mensaje.";
    resultadoText.sultadoText.textContent = "";
});
//funcion del boton encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textoContent = "El resultado es:";
});

botonDesencriptar.addEventListener("click", (e)=> {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesncriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesncriptado;
    resultadoTitulo.textoContent = "El resultado es:";
    botonCopiar.classList.remove("hidden");
    
});

botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMonito.style.display = "block";
        imagenMonito.classList.add("hidden");
        resultadoTitulo.textContent = "El texto se copio";
        botonCopiar.classList.add("hidden");
        resultadoText.textContent = ""

    })

});
