// Usa una etiqueta <script> o un archivo JS externo
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase);

    // Código GSAP aquí
    gsap.from("h2", {
        scrollTrigger: {
            trigger: ".container-item",
            start: "top center",
            end: "top center"
        },
        duration: 1,
        yPercent: 200,
        opacity: 0,
        stagger: 0.5,
        ease: "steps(40)",
        with: "0%"
    }, {
        with: "100%"
    });

    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        onEnter: () => {
            gsap.to("main", {
                duration: 1
            })
        }
    })

    gsap.from(".container-item", {
        scrollTrigger: {
            trigger: ".container-item",
            start: "top center",
            end: "top center"
        },
        duration: 1.5,
        y: -80,
        opacity: 0,
        ease: "bounce.out"
    }, {
        duration: 1.5,
        y: 80
    })

    gsap.from(".container-flechas-scroll", {
        scrollTrigger: {
            trigger: "main",
            start: "top center",
            end: "top center",
        },
        duration: 2,
        xParcerent: -1000,
        rotation: 360,
        yoyo: true,
        x: -1000
        , opacity: 0,
        ease: "bounce.out"
    }, {
        x: 1000,
        xParcerent: 1000
    })

    function moverArriba(){

    }
    showSlide(0);
});


const main = ()=>{
    let sectio_metodo = document.getElementById('section-metodologia');
    sectio_metodo.scrollIntoView({behavior: 'smooth'});
}


const moverArriba = () => {
    let sections = [
        document.getElementById('section-metodologia'),
        document.getElementById('nosotros'),
        document.getElementById('proyectos')
    ];

    let currentScroll = window.scrollY;
    let targetSection;

    for (let i = sections.length - 1; i >= 0; i--) {
        if (currentScroll > sections[i].offsetTop) {
            targetSection = sections[i];
            break;
        }
    }

    if (targetSection) {
        gsap.to(window, {
            scrollTo: {
                y: targetSection.offsetTop,
                autoKill: false
            },
            duration: 1
        });
    }
}


const moverAbajo = () => {
    let sections = [
        document.getElementById('section-metodologia'),
        document.getElementById('nosotros'),
        document.getElementById('proyectos')
    ];

    let currentScroll = window.scrollY;
    let targetSection;

    for (let i = 0; i < sections.length; i++) {
        if (currentScroll < sections[i].offsetTop) {
            targetSection = sections[i];
            console.log(targetSection.id);
            
             break;
        }
    }
    
    // En caso de que no haya una sección objetivo, asegúrate de no hacer scroll
    if (targetSection) {
        gsap.to(window, {
            scrollTo: {
                y: targetSection.offsetTop,
                autoKill: false
            },
            duration: 1
        });
    }else if(document.getElementById('proyectos').scrollY != window.scrollY<=1280 && window.scrollY>640){
        document.getElementById('proyectos').scrollIntoView({behavior:'smooth'})
        let monitor = document.querySelector('.container-monitor');
        let descriptionMonitor = document.querySelector('.container-description');

        monitor.classList.add('animate__lightSpeedInLeft');
        descriptionMonitor.classList.add('animate__lightSpeedInLeft');
    }
}



let gif  = document.querySelectorAll('.gif');    
let textDescription  = document.querySelectorAll('.text-description');
let imgGif = document.querySelectorAll('.gif-slide');

const showSlide = (numero) =>{
    for (let i = 0, j = 0 ,k=0; i < gif.length && j < textDescription.length   && k<imgGif.length;  i++, j++, k++) {
        if (i == numero && j == numero && k== numero) {
            gif[i].style.display  = "flex"
            // gif[i].classList.add('slide-top');
            imgGif[k].classList.add('animate__zoomInDown');
            textDescription[j].style.display = 'flex'
            textDescription[j].classList.add('slide-top')
        } else {
            gif[i].style.display = "none";
            imgGif[k].classList.remove('slide-top');
            // gif[i].classList.remove('slide-top');
            textDescription[j].style.display = "none";
        }
    }
    
    
}
let index = 0;
const  sliderArriba = ()=>{
    index -=1;
    if(index == -1){
        index = 0;
    }
    showSlide(index)
}

const sliderAbajo = ()=>{
    index += 1;
    // Cuando agregren otro slider solo modificar el  comparador del if pasar de tres al numero que se actualizo empezando por cero recuerden 
    if(index > 2){
        index = 0;
    }
    showSlide(index);
}

const mostrarItem = (index) => {
    let items = document.querySelectorAll('.container-item');
    let tache = document.getElementById('container-tache');
    let parentElement = document.querySelector('.container-items'); // El contenedor donde agregarás el tache
    // Itera sobre todos los elementos con la clase .container-item
    for (let i = 0; i < items.length; i++) {
        if (index == i) {
            // Muestra el item seleccionado
            items[i].classList.add('mostrar-item');
            items[i].classList.remove('ocultar-item');
            // Agrega el 'tache' dentro del item seleccionado
        } else {
            // Oculta los demás items
            items[i].classList.add('ocultar-item');
            items[i].classList.remove('mostrar-item');
        }
    }
    tache.style.display = "flex"

}


const removeItem = () =>{
    let item = document.querySelectorAll('#container-item');
    let tache = document.getElementById('container-tache');
    for(i=0; i<item.length; i++){
        item[i].classList.remove('mostrar-item');
        item[i].classList.remove('ocultar-item');
    }
    tache.style.display = "none"
}