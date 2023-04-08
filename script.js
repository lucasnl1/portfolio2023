/*============= Icone da NavBar efeito X e Burgger ===============*/

let menuIcon = document.querySelector('#menu-i');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*============= seleciona link ativo ao rolar ===============*/

let selections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*============= Navbar destacada ===============*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*============= remove o icone e a navbar ao clicar em link (rolar) ===============*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*============= revelar ao rolar ===============*/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-box, .projetos-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .sobre-content', { origin: 'right' });

/*============= efeito escrita ===============*/

const typed = new Typed('.mult-texto', {
    strings: ['Front end Dev!', 'Técnico de T.I!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});