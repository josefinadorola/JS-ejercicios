    const form = document.getElementById('form');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', submitHandle);

    function submitHandle(e) {
      e.preventDefault();

      const input = document.getElementById('input');
      const pizzaId = parseInt(input.value);

      if (isNaN(pizzaId)) {
        showError('Por favor, ingrese un número válido.');
        return;
      }

      const pizza = getPizzaById(pizzaId);

      if (pizza) {
        renderPizzaCard(pizza);
      } else {
        showError('No se encontró una pizza con el ID proporcionado.');
      }

      input.value = '';
    }

    function getPizzaById(id) {
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

      return pizzas.find(pizza => pizza.id === id);
    }

    function renderPizzaCard(pizza) {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${pizza.nombre}</h3>
        <img src="${pizza.imagen}" alt="${pizza.name}">
        <p>Precio: $${pizza.precio}</p>
      `;

      resultado.innerHTML = '';
      resultado.appendChild(card);
    }

    function showError(message) {
      const error = document.createElement('p');
      error.className = 'error';
      error.textContent = message;

      resultado.innerHTML = '';
      resultado.appendChild(error);
    }
