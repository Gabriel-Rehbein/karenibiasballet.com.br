
const menuToggle = document.getElementById("menuToggle");
const menuLista = document.getElementById("menuLista");

menuToggle.addEventListener("click", () => {
    menuLista.classList.toggle("ativo");
});


let index = 0;
const banners = document.querySelectorAll('.banner-img');

setInterval(() => {
    banners.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) img.classList.add('active');
    });

    index = (index + 1) % banners.length;
}, 4000);

