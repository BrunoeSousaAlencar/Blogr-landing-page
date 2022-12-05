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

const hamburger = document.querySelector('.hamburger');
const botaoMenu = document.querySelector('.botao-menu');
const close1 = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('botao-active');  
    close1.classList.toggle('close-active'); 
    
})

