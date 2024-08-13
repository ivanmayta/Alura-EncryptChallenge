const btnCopiar = document.getElementById("btn_copiar")
btnCopiar.style.display = "none"
const initialMessage = document.getElementById("initial_message")

const textoEncriptado = document.getElementById("texto_encriptado")
const textoAEncriptar = document.getElementById("texto_a_encriptar")

const btnEncriptar = document.getElementById("btn_encriptar")
const btnDesencriptar = document.getElementById("btn_desencriptar")

btnEncriptar.addEventListener("click", () => {
    btnCopiar.style.display = "block" //textoEncriptado.style.display = "block"
    initialMessage.style.display = "none"
    textoEncriptado.style.display = "block"

    textoEncriptado.value = encriptar(textoAEncriptar.value)
})

btnDesencriptar.addEventListener("click", () => {
    

    textoEncriptado.value = desencriptar(textoAEncriptar.value)
})

btnCopiar.addEventListener("click", () => {
    copiarTexto(textoEncriptado)
})

function encriptar(texto) {
    texto = texto.toLowerCase()

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")

    return textoEncriptado
}

function desencriptar(texto) {
    texto = texto.toLowerCase();

    let textoDesencriptado = texto
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e");

    return textoDesencriptado;
}


function copiarTexto(textoEncriptado) {
    // Seleccionar el contenido del textarea
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textoEncriptado.value)
            .then(() => {
                console.log("Texto copiado al portapapeles");
            })
            .catch(err => {
                console.error("Error al copiar el texto: ", err);
            });
    } else {
        console.error("Clipboard API no está disponible");
    }}
