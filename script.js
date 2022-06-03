let divDolar = document.getElementById('divDolar')
let divProductos = document.getElementById('divProductos')


fetch('productos.json')
    .then(response => response.json())
    .then(productos => {
        productos.forEach(producto => {
            divProductos.innerHTML += `
        <div class="card border-primary mb-3" id="producto${producto.id}" style="max-width: 20rem; margin: 4px;">
            <div class="card-header">Ropa Deportiva</div>
            <div class="card-body">
                <h4 class="card-title"> ${producto.nombre}</h4>
                <p class="card-text">Marca: ${producto.marca}</p>
                <p class="card-text">Precio: $${producto.precio}</p>
                <p class="card-text">Stock: ${producto.stock}</p>
            </div>
        </div>
      `
        });
    })

const productos = async () => {
    let promesa = await fetch('productos.json')
    let productos = await promesa.json()

    return productos
}
productos().then(producto => console.log(producto))