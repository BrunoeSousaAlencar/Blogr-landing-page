// product
const productBotao = document.querySelector("#product-botao");
const product = document.querySelector(".product");
const arrow1 = document.querySelector(".arrow-product");

productBotao.addEventListener('click', () => {
    product.classList.toggle('active');
    company.classList.remove('active');
    connect.classList.remove('active');

    arrow1.classList.toggle('rotacao')
    arrow2.classList.remove('rotacao')
    arrow3.classList.remove('rotacao')
})



// company
const companyBotao = document.querySelector("#company-botao");
const  company = document.querySelector(".company");
const arrow2 = document.querySelector(".arrow-company");


companyBotao.addEventListener('click', () => {
    company.classList.toggle('active');
    product.classList.remove('active');
    connect.classList.remove('active');

    arrow2.classList.toggle('rotacao')
    arrow1.classList.remove('rotacao')
    arrow3.classList.remove('rotacao')

})



// connect
const connectBotao = document.querySelector("#connect-botao");
const  connect = document.querySelector(".connect");
const arrow3 = document.querySelector(".arrow-connect");


connectBotao.addEventListener('click', () => {
    connect.classList.toggle('active');
    company.classList.remove('active');
    product.classList.remove('active');

    arrow3.classList.toggle('rotacao')
    arrow1.classList.remove('rotacao')
    arrow2.classList.remove('rotacao')
})

// menu hamburger

const botaoMenu = document.querySelector('#botao-menu');
const menuMobile = document.querySelector('#menu-mobile');

botaoMenu.addEventListener('click', () => {
    botaoMenu.classList.toggle('active');  
    menuMobile.classList.toggle('active');  
})


// product mobile

const productBotao2 = document.querySelector("#product-botao2");
const product2 = document.querySelector(".product2");
const arrowB1 = document.querySelector(".arrow-product2");

productBotao2.addEventListener('click', () => {
    product2.classList.toggle('active');
    company2.classList.remove('active');
    connect2.classList.remove('active');

    arrowB1.classList.toggle('rotacao');
    arrowB2.classList.remove('rotacao');
    arrowB3.classList.remove('rotacao');

})


// company mobile

const companyBotao2 = document.querySelector("#company-botao2");
const company2 = document.querySelector(".company2");
const arrowB2 = document.querySelector(".arrow-company2");


companyBotao2.addEventListener('click', () => {
    company2.classList.toggle('active');
    product2.classList.remove('active');
    connect2.classList.remove('active');

    arrowB2.classList.toggle('rotacao');
    arrowB1.classList.remove('rotacao');
    arrowB3.classList.remove('rotacao');
})


// connect mobile

const connect2Botao2 = document.querySelector("#connect-botao2");
const connect2 = document.querySelector(".connect2");
const arrowB3 = document.querySelector(".arrow-connect2");


connect2Botao2.addEventListener('click', () => {
    connect2.classList.toggle('active');
    company2.classList.remove('active');
    product2.classList.remove('active');

    arrowB1.classList.remove('rotacao');
    arrowB3.classList.toggle('rotacao');
    arrowB2.classList.remove('rotacao');
})