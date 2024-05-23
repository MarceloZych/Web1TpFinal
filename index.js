function hablar(id) {
    const texto = document.getElementById(id).textContent
    if (texto.trim() !== "") {
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
        speechSynthesis.speak(utterance)
    } else {
        alert("Por favor ingresa un texto antes de reproducirlo")
    }
}

function detener() {
    if (utterance) {
        speechSynthesis.cancel()
    }
}

function aumentarTexto() {
    let elementos = document.querySelectorAll('*');
    elementos.forEach(elemento => {
        let estiloActual = window.getComputedStyle(elemento).fontSize;
        let tamañoActual = parseFloat(estiloActual);
        let nuevoTamaño = tamañoActual * 1.1;
        elemento.style.fontSize = nuevoTamaño + 'px';
    });
}

function disminuirTexto() {
    let elementos = document.querySelectorAll('*');
    elementos.forEach(elemento => {
        let estiloActual = window.getComputedStyle(elemento).fontSize;
        let tamañoActual = parseFloat(estiloActual);
        let nuevoTamaño = tamañoActual * 0.9;
        elemento.style.fontSize = nuevoTamaño + 'px';
    });
}

function validarInput() {
    let email = document.getElementById('mail');
    let numero = document.getElementById('numero');
    let personas = document.getElementById('personas');

    let validacion = true

    if (email.value === '') {
        email.style.borderColor = "red"
        validacion = false
    }else if (numero.value === '') {
        numero.style.borderColor = "red"
        validacion = false;
    }else if (personas.value < 1 || personas.value > 30) {
        personas.style.borderColor = "red"
        validacion = false
    }

    if (validacion) {
        alert('Formulario enviado con exito.')
    }

    return true;
}