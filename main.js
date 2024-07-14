let textoAEncriptar = "";
let textoADesencriptar = "";
let botonCopiar = document.querySelector(".boton-copiar");
let contador = 0;


function procesoDeEncriptacion() {
    if (contador == 0) {
        contador = contador + 1;
        tomarTexto();
        let textoEncriptado = encriptarTexto(textoAEncriptar);
        if (textoEncriptado) {
            borrarElementosContenedor();
            crearNuevosElementosParaContenedor(textoEncriptado);
        }
    }
    else if (contador != 0) {
        tomarTexto();
        if (tomarTexto) {
            let textoEncriptado = encriptarTexto(textoAEncriptar);
            document.querySelector(".texto-encriptado").innerHTML = textoEncriptado;

        }

    }

}

function valirdarMinusculas(stringAValidar) {
    let mayusculasNumerosSimbolos = []
    let error = true;
    for (let i = 33; i <= 95; i++) {
        mayusculasNumerosSimbolos.push(String.fromCharCode(i));
    }

    for (let i = 0; i <= stringAValidar.length; i++) {
        if (mayusculasNumerosSimbolos.includes(stringAValidar[i])) {
            return error;
        }
        else {
            error = false;
            return error;
        }
    }


}



function tomarTexto() {
    let texto = document.querySelector("#texto").value;
    let textoCorrecto = valirdarMinusculas(texto);
    if (textoCorrecto == true) {
        alert("La entrada de texto sólo trabaja con minusculas...");
    }
    else if (textoCorrecto == false && texto != "") {
        textoAEncriptar = texto;
        document.getElementById("texto").value = "";
        return textoAEncriptar;
    }
    else {
        alert("Error... No se ingreso ningun texto o palabra para encriptar");
    }

}





function encriptarTexto(txAEncriptar) {

    let cad = "";
    for (let i = 0; i < txAEncriptar.length; i++) {
        if (txAEncriptar[i] == "a") {
            cad = cad + "ai";
        }
        else if (txAEncriptar[i] == "e") {
            cad = cad + "enter";
        }
        else if (txAEncriptar[i] == "i") {
            cad = cad + "imes";
        }
        else if (txAEncriptar[i] == "o") {
            cad = cad + "ober";
        }
        else if (txAEncriptar[i] == "u") {
            cad = cad + "ufat";
        }
        else {
            cad = cad + txAEncriptar[i];
        }

    }
    return cad;
}



function borrarElementosContenedor() {
    let imagen = document.querySelector(".contenedor-imagen");
    let informacion = document.querySelector(".contenedor-informacion");
    if (imagen && informacion) {
        imagen.remove();
        informacion.remove();
    }


}



function crearNuevosElementosParaContenedor(txtencriptado) {
    let contenedorPalabrasEncriptadas = document.querySelector(".contenedor-palabrasencriptadas");

    let mostrarTextoEncriptado = document.createElement("p");
    let botonCopiarTexto = document.createElement("button");

    mostrarTextoEncriptado.className = "texto-encriptado";
    botonCopiarTexto.className = "boton-copiar";

    mostrarTextoEncriptado.innerHTML = txtencriptado;
    botonCopiarTexto.innerHTML = "Copiar";

    contenedorPalabrasEncriptadas.appendChild(mostrarTextoEncriptado);
    contenedorPalabrasEncriptadas.appendChild(botonCopiarTexto);

    botonCopiarTexto.addEventListener("click", () => {
        let texto = document.querySelector(".texto-encriptado").textContent;
        navigator.clipboard.writeText(texto);
        alert(`Haz guardado en el portapapeles la palabra o frase: \n${texto}`)

    });
}

function procesoDeDesencriptacion() {
    textoADesencriptar = tomarTexto();
    let textoDesencriptado = desencriptarTexto(textoADesencriptar);
    document.querySelector(".texto-encriptado").textContent = textoDesencriptado;
}

function desencriptarTexto(txtADesencriptar) {
    if (txtADesencriptar.includes("ai")) {
        txtADesencriptar = txtADesencriptar.replaceAll("ai", "a")
    }
    if (txtADesencriptar.includes("enter")) {
        txtADesencriptar = txtADesencriptar.replaceAll("enter", "e")
    }
    if (txtADesencriptar.includes("imes")) {
        txtADesencriptar = txtADesencriptar.replaceAll("imes", "i")
    }
    if (txtADesencriptar.includes("ober")) {
        txtADesencriptar = txtADesencriptar.replaceAll("ober", "o")
    }
    if (txtADesencriptar.includes("ufat")) {
        txtADesencriptar = txtADesencriptar.replaceAll("ufat", "u")
    }

    return txtADesencriptar;
}















