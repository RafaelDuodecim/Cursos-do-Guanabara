
/*
function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    // Formatar minutos e segundos
    if (minutos < 10) {
        minutos = '0' + minutos
    }

    if (segundos < 10) {
        segundos = '0' + segundos
    }

    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`

    // Troca de imagem
    if (hora >= 0 && hora < 12) {
        img.src = '../../fotos/manha.jpg'
        document.body.style.background = '#87CEEB' // manhã
    } else if (hora >= 12 && hora < 18) {
        img.src = '../../fotos/tarde.jpg'
        document.body.style.background = '#c9af81' // tarde
    } else {
        img.src = '../../fotos/noite.jpg'
        document.body.style.background = '#031527' // noite
    }
}

// Atualiza automaticamente
window.onload = function() {
    carregar()
    setInterval(carregar, 1000)
}

*/


function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    var nascimento = Number(fano.value)
    if (fano.value.length == 0 || nascimento > ano || nascimento < 0) {
        window.alert('[Erro] Verifique seus dados e tente novamente!')
    } else {
        var idade = ano - nascimento
        res.innerHTML = `Idade calculada: ${idade} anos`
        var fsex = document.getElementsByName('radsex')
    } 
}

//13:36
