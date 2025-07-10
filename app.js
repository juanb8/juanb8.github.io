document.addEventListener("DOMContentLoaded", () => {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const renderProductos = () => {
    fetch("./productos.json") //pido los datos, el fetch me retorna la promesa
      .then((res) => res.json()) //esperamos la promesa... luego leemos y convertimos a js
      .then((data) =>
        data.forEach((prod) => {
          // una vez que esperamos los datos, hacemos lo que necesitamos

          //creamos los elementos que necesitamos para la tarjeta de producto
          let article = document.createElement("article");
          let titulo = document.createElement("h2");
          let precio = document.createElement("p");
          let btnAgregar = document.createElement("button");

          //Le doy valor al titulo, precio y boton
          titulo.textContent = prod.titulo;
          precio.textContent = `$${prod.precio}`;
          btnAgregar.textContent = "Agregar";

          //Agregamos el evento click que haga push y actualice el contador
          btnAgregar.addEventListener("click", () => {
            carrito.push(prod);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarContador();
          });

          //Los agrego a la tarjeta de producto
          article.appendChild(titulo);
          article.appendChild(precio);
          article.appendChild(btnAgregar);

          //Agrego la tarjeta al body (simple, solo para el ejemplo inicial)
          document.body.appendChild(article);
        })
      )
      .catch((err) => console.error("ERROR: ", err));
  };

  const actualizarContador = () => {
    let contador = document.getElementById("contador-carrito");
    contador.textContent = carrito.length;
  };

  renderProductos();
  actualizarContador();
});
