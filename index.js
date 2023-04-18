const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//a)  Las pizzas que tengan un id impar.

const idImpar = pizzas.filter((pizzas) => {
  return pizzas.id % 2 != 0;
});

idImpar.forEach((pizzas) => {
  console.log(`La pizza n°${pizzas.id} tiene id impar`);
});

//b) Responder: ¿Hay alguna pizza que valga menos de $600?

const menosDe600 = pizzas.some((pizzas) => {
  return pizzas.precio < 600;
});

if (menosDe600 == true) {
  console.log(`Hay pizzas que valen menos de $600.`);
} else {
  console.log(`No hay pizzas que valgan menos de $600`);
}

//c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach((pizzas) => {
  console.log(`La ${pizzas.nombre} tiene un valor de ${pizzas.precio}`);
});

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

pizzas.forEach((pizzas) => {
  console.log(`Ingredientes de la ${pizzas.nombre}: ${pizzas.ingredientes}`);
});
