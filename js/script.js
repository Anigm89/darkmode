const boton = document.getElementById('boton');
const body = document.getElementById('body');
const titulo = document.querySelector('.titulo');
const text = document.querySelector('.text');
const titular = document.querySelector('.titular');
const textos= document.querySelectorAll('.texto')


boton.addEventListener('click', () => {
    
    body.classList.toggle("negro");
    titulo.classList.toggle('amarillo');
    text.classList.toggle('blanco');
    boton.classList.toggle('azul')
    titular.classList.toggle('amarillo');
    textos.forEach(texto => {
        texto.classList.toggle('blanco');
    })


    //animacion
    boton.classList.toggle('mover');

})

