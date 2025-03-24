// Imprime "Hello, world!" en la consola
console.log("Hello, world!");

// Array de objetos que representan cartas, cada una con un nombre y un enlace a una imagen
const arrayCartas = [
  {
    nombre: "0_blue",
    link: "0_blue.png",
  },
  {
    nombre: "0_green",
    link: "0_green.png",
  },
  {
    nombre: "0_red",
    link: "0_red.png",
  },
  {
    nombre: "0_yellow",
    link: "0_yellow.png",
  },
  {
    nombre: "1_blue",
    link: "1_blue.png",
  },
  {
    nombre: "1_green",
    link: "1_green.png",
  },
  {
    nombre: "1_red",
    link: "1_red.png",
  },
  {
    nombre: "1_yellow",
    link: "1_yellow.png",
  },
  {
    nombre: "2_blue",
    link: "2_blue.png",
  },
  {
    nombre: "2_green",
    link: "2_green.png",
  },
  {
    nombre: "2_red",
    link: "2_red.png",
  },
  {
    nombre: "2_yellow",
    link: "2_yellow.png",
  },
  {
    nombre: "3_blue",
    link: "3_blue.png",
  },
  {
    nombre: "3_green",
    link: "3_green.png",
  },
  {
    nombre: "3_red",
    link: "3_red.png",
  },
  {
    nombre: "3_yellow",
    link: "3_yellow.png",
  },
  {
    nombre: "4_blue",
    link: "4_blue.png",
  },
];

document.addEventListener('DOMContentLoaded', function() {
    const repartirButton = document.querySelector('.repartir');
    const otraCartaButton = document.querySelector('.otra');
    const numCartasInput = document.querySelector('#numCartas');
    const tapeteContainer = document.querySelector('.tapete');
    const cartaSeleccionadaContainer = document.querySelector('.carta-seleccionada');
    let cartas = []; 

    function generarCartas(numeroCartas) {
        tapeteContainer.innerHTML = '';  
        cartas = [5]; 

        for (let i = 0; i < numeroCartas; i++) {
            const carta = document.createElement('div');
            carta.classList.add('carta');
            carta.innerHTML = `<img src="imagenes/${i}_blue.png" alt="Carta ${i + 1}">`;  
            carta.addEventListener('click', function() {
                seleccionarCarta(carta);
            });
            tapeteContainer.appendChild(carta);
            cartas.push(carta); 
        }
    }

    function seleccionarCarta(carta) {
        // Eliminar la clase "seleccionada" de la carta previamente seleccionada
        const cartaSeleccionada = document.querySelector('.carta.seleccionada');
        if (cartaSeleccionada) {
            cartaSeleccionada.classList.remove('seleccionada');
        }

        carta.classList.add('seleccionada');

        cartaSeleccionadaContainer.innerHTML = '<h3>Carta seleccionada</h3>';
        cartaSeleccionadaContainer.appendChild(carta.cloneNode(true));
    }


    numCartasInput.addEventListener('input', function() {
        console.log(`Número de cartas: ${numCartasInput.value}`);
    });

    repartirButton.addEventListener('click', function() {
        console.log(`S'ha fet clic al botó "Repartir"`);
        const numeroCartas = parseInt(numCartasInput.value, 10);
        if (numeroCartas > 0) {
            generarCartas(numeroCartas);
        } else {
            console.log('Por favor, ingresa un número válido de cartas.');
        }
    });

    otraCartaButton.addEventListener('click', function() {
        let numeroCartas = parseInt(numCartasInput.value, 10);
        numeroCartas += 1;
        numCartasInput.value = numeroCartas;  
        console.log(`Afegint una carta més. Total cartes: ${numeroCartas}`);
        generarCartas(numeroCartas);  
    });
});