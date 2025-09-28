async function cargarProductos() {
  try {
    const respuesta = await fetch("products.json");
    const productos = await respuesta.json();

    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    productos.forEach(prod => {
      const card = document.createElement("div");
      card.className = "producto";
      card.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}">
        <h3>${prod.name}</h3>
        <p>${prod.price}</p>
      `;
      contenedor.appendChild(card);
    });
  } catch (error) {
    console.error("Error cargando productos:", error);
  }
}

cargarProductos();
