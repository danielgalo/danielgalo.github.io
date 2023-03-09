// Definimos un arreglo con las rutas de las imágenes
const images = [

    "./styles/images/cab_mazda.jpg",
    "./styles/images/cab_nissan.jpg",
    "./styles/images/cab_toyota.jpg",
    "./styles/images/cab_honda.jpg",
    "./images/s15-cab.jpg",
    "./images/ae86-cab.jpg",
    "./styles/images/cabecera_inicio.jpg",

  ];
let imagenActual = 0;
let currentIndex = 0; // Índice de la imagen actual
function changeBackground() {
    // Seleccionamos la cabecera y cambiamos el fondo con la imagen actual
    const cabecera = document.getElementById('cab');
    cabecera.style.backgroundImage = `url(${images[imagenActual]})`;
    
    // Incrementamos el índice de la imagen actual, o lo reiniciamos si llegamos al final
    if (imagenActual === images.length - 1) {
        imagenActual = 0;
        } else {
            imagenActual++;
        }
}


const btnParar = document.getElementById('stop-button');
btnParar.addEventListener('click', stopBackgroundChange);

const btnReanudar = document.getElementById('resume-button');
btnReanudar.addEventListener('click', startBackgroundChange);

const btnAnterior = document.getElementById('back-button');
const btnSiguiente = document.getElementById('forward-button');


function startBackgroundChange() {
    intervalId = setInterval(changeBackground, 1500);
}

function stopBackgroundChange() {
    clearInterval(intervalId);
}

//Por defecto el boton de seguir está deshabilitado para evitar problemas
btnReanudar.disabled = true;

//Deshabilitar el botón para evitar problemas
btnReanudar.addEventListener('click', ()=>{
    startBackgroundChange;
    btnReanudar.disabled = true;
    txtBtns.style.display = "none";
    
});
//Habilitarlo cuando se pulse parar
btnParar.addEventListener('click', ()=>{
    btnReanudar.disabled = false;
});

let aviso = true;
let textoAviso ="La animación se para cuando se cambian las imágenes manualmente, \n presiona \"Reanudar\" para volver a activar la animación. \n (Este mensaje solo aparecerá una vez).";

btnSiguiente.addEventListener('click', ()=>{
    btnReanudar.disabled = false;
    clearInterval(intervalId);
    if (aviso) {
      alert(textoAviso);
    }
    aviso = false;

});

btnAnterior.addEventListener('click', ()=>{
    btnReanudar.disabled = false;
    clearInterval(intervalId);
    if (aviso) {
      alert(textoAviso);
    }
    aviso = false;
});


function changeBackgroundManually(direction) {
    // Cambiamos la imagen según la dirección de avance o retroceso
    if (direction === 'forward') {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    } else if (direction === 'backward') {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    }
  
    // Seleccionamos la cabecera y cambiamos el fondo con la nueva imagen
    const cabecera = document.getElementById('cab');
    cabecera.style.backgroundImage = `url(${images[currentIndex]})`;
  }


const forwardButton = document.getElementById('forward-button');
forwardButton.addEventListener('click', () => {
  changeBackgroundManually('forward');
});

const backButton = document.getElementById('back-button');
backButton.addEventListener('click', () => {
  changeBackgroundManually('backward');
});

window.onload = startBackgroundChange;