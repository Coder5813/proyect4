
const botonInicioPausa = document.querySelector('#boton-inicio-pausa');
const botonReiniciar = document.querySelector('#boton-reiniciar');

let [horas, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro() {
  segundos++;

  if(segundos / 60 === 1) {
    segundos = 0;
    minutos++;

  if(minutos / 60 === 1) {
    minutos = 0;
    horas++;
  }
  }

const segundosConFormato = asignarFormato(segundos);
const minutosConFormato = asignarFormato(minutos);
const horasConFormato = asignarFormato(horas);

const cronometro = document.getElementById('cronometro');
cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}

botonInicioPausa.addEventListener('click', function() {
   if(estadoCronometro === 'pausado') {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    document.getElementById('boton-inicio-pausa').innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonInicioPausa.classList.remove('iniciar');
    botonInicioPausa.classList.add('pausar');
    estadoCronometro = 'andando';
   }else{
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado';
}
});


// Reiniciar el cronometro eliminando el intervalo de tiempo,
// reiniciando los segundos, minutos y horas, y actualizando
// el estado del cronometro y de los botones.
botonReiniciar.addEventListener('click', function() {
  // Eliminar el intervalo.
  window.clearInterval(intervaloDeTiempo);

  // Segundos, minutos y horas.
  segundos = 0;
  minutos = 0;
  horas = 0;
  document.getElementById('cronometro').innerHTML = '00:00:00';

  // Botones.
  document.getElementById('boton-inicio-pausa').innerHTML = `<i class="bi bi-play-fill" id="inicio"></i>`;
  botonInicioPausa.classList.remove('pausar');
  botonInicioPausa.classList.add('iniciar');

  // Estado.
  estadoCronometro = 'pausado';
});