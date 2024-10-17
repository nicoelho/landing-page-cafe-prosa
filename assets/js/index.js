let btnMenu = document.querySelector(".btn__menulateral");
let menuLista = document.querySelector(".cabecalho__lista");
let menuLinks = document.querySelectorAll(".cabecalho__item--link");

btnMenu.addEventListener('click', () => {
    menuLista.classList.toggle('ativo');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLista.classList.remove('ativo');
    });
});

