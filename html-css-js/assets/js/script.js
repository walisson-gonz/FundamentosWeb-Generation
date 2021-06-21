/*
Case sensitive = reconhece letras maiusculas e minusculas

por Tag = getElementByTagName()
por Id = getElementById() 
por Nome =  getElementsByName()
por Classe = getElementsByClassName()
por Seletor: querySelector()
*/

/*if(nome.value.length < 3  ){ <<< CAIXA DE ALERTA
        alert('nome invalido')
    }*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let logo = document.querySelector('#logo')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome invalido'
        txtNome.style.color = 'red'
    }
    else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }
    else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true

    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo até 100 caracteres'
        txtAssunto.style.color= 'red'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha o formulário corretamente antes de enviar')

    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

/*PAG TWITCH*/

function logoZoom(){
    logo.style.width = '100px'
    logo.style.height = '100px'
    document.getElementById("logo").style.transition = "all 2s";
}

function logoNormal(){
    logo.style.width = '50px'
    logo.style.height = '50px'
}

