const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.getElementById("form");
const input = document.getElementById("input");
const resultado = document.getElementById("resultado");

let itemsARenderizar = [];

const renderItems = () => {
  resultado.innerHTML = itemsARenderizar.map((item) => {
    return `
    <p> ${item} </p>
    <img src="${pizzas.imagen}" alt="${pizza.nombre}">
    <p>Precio: $${pizzas.precio}</p>
  `;
  });
  resultado.innerHTML = "";
};

const submitHandle = (e) => {
  e.preventDefault();

  let itemNuevo = input.value;

  itemsARenderizar = [...itemsARenderizar, itemNuevo];

  input.value = "";

  renderItems();
};

const init = () => {
  form.addEventListener("submit", submitHandle);
};

init();
