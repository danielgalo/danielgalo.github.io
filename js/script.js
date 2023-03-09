// Definimos un arreglo con las rutas de las imágenes
const imagenes = [

    "./styles/images/cab_mazda.jpg",
    "./styles/images/cab_nissan.jpg",
    "./styles/images/cab_toyota.jpg",
    "./styles/images/cab_honda.jpg",
    "./images/s15-cab.jpg",
    "./images/ae86-cab.jpg",
    "./styles/images/cabecera_inicio.jpg",

  ];
let imagenActual = 0;
function changeBackground() {
    // Seleccionamos la cabecera y cambiamos el fondo con la imagen actual
    const cabecera = document.getElementById('cab');
    cabecera.style.backgroundImage = `url(${imagenes[imagenActual]})`;
    
    // Incrementamos el índice de la imagen actual, o lo reiniciamos si llegamos al final
    if (imagenActual === imagenes.length - 1) {
        imagenActual = 0;
        } else {
            imagenActual++;
        }
}


const btnParar = document.getElementById('stop-button');
btnParar.addEventListener('click', stopBackgroundChange);

const btnReanudar = document.getElementById('resume-button');
btnReanudar.addEventListener('click', startBackgroundChange);


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
    btnReanudar.disabled = true;
});
//Habilitarlo cuando se pulse parar
btnParar.addEventListener('click', ()=>{
    btnReanudar.disabled = false;
});

window.onload = startBackgroundChange;