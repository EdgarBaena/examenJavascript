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
    const carteraContainer = document.querySelector('#cartera');
    const cartaSeleccionadaContainer = document.querySelector('.carta-seleccionada');
    const numeroCartesInput = document.querySelector('#numero-cartes');
    let cartaSeleccionada = null; 
}

function generarCartes(numeroCartes) {
    carteraContainer.innerHTML = ''; 
    for (let i = 0; i < numeroCartes; i++) {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.textContent = `Carta ${i + 1}`;
        carta.addEventListener('click', function() {
            seleccionarCarta(carta);
        });
        carteraContainer.appendChild(carta);
    }
}

function seleccionarCarta(carta) {
    if (cartaSeleccionada !== null) {
        cartaSeleccionada.classList.remove('seleccionada');
    }
    carta.classList.add('seleccionada');
    cartaSeleccionada = carta;
    cartaSeleccionadaContainer.textContent = `Carta seleccionada: ${carta.textContent}`;
}

numeroCartes.addEventListener('input', function() {
    console.log(`Número de cartes: ${numeroCartesInput.value}`);
});

repartirButton.addEventListener('click', function() {
    console.log(`S'ha fet clic al botó "Repartir"`);
    console.log(`Número de cartes per repartir: ${numeroCartesInput.value}`);
    const numeroCartes = parseInt(numeroCartesInput.value, 10);
    if (numeroCartes > 0) {
        generarCartes(numeroCartes);
    }
});

otraCartaButton.addEventListener('click', function() {
    let numeroCartes = parseInt(numeroCartesInput.value, 10);
    numeroCartes += 1;
    numeroCartesInput.value = numeroCartes; 
    console.log(`Afegint una carta més. Total cartes: ${numeroCartes}`);
    generarCartes(numeroCartes); 
});
});