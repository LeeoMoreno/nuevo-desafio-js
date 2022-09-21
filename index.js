const juegos = [
  {nombre: "Fifa 23", precio: 15000},
  {nombre: "GTA V", precio: 10000},
  {nombre: "Gran Turismo 7", precio: 12000},
  {nombre: "God of War", precio: 10500}
]

let carrito = []

let pregunta = prompt ("Bienvenido, desea comprar un juego de PS4 ?")

while (pregunta != "si" && pregunta != "no"){
  alert ("Por favor, escriba si o no para continuar")
  pregunta = prompt ("Bienvenido, desea comprar un juego de PS4 ?");
}

if (pregunta == "si"){
  alert ("Lista de juegos disponibles:")
  let listaDeJuegos = juegos.map((juego) => juego.nombre + " $" + juego.precio);
  alert (listaDeJuegos.join(" - "));
} else if (pregunta == "no"){
  alert ("Gracias por ingresar a la tienda de Videojuegos de Leo");
}

while (pregunta != "no"){
  let juego = prompt ("Agregue un juego a su carrito");
  let precio = 0;

  if (juego == "fifa 23"
  || juego == "gta v"
  || juego == "gran turismo 7"
  || juego == "god of war"){
    switch (juego){
      case "fifa 23":
        precio = 15000;
        break;
      case "god of war":
        precio = 10500;
        break
      case "gta v":
        precio = 10000;
        break
      case "gran turismo 7":
        precio = 12000;
        break;

        default:
          break;
    }

    let cantidad = parseInt (prompt ("Cuantas unidades quiere?"))

    carrito.push({juego, cantidad, precio})
    console.log(carrito);
  }else {
    alert ("No esta disponible")
  }

  pregunta = prompt ("Quiere agregar otro juego a su compra?")

  while (pregunta === "no"){
    alert("Gracias por su compra, el monto total a pagar es:")
    carrito.forEach(carritoTotal =>{
      alert(`Juego: ${carritoTotal.juego}, Cantidad: ${carritoTotal.cantidad},
      Precio: $ ${carritoTotal.precio}
      , Subtotal Producto: $ ${carritoTotal.cantidad * carritoTotal.precio}`)
    })
    break
  }
}

const total = carrito.reduce((total, juego) => total + juego.precio * juego.cantidad,0)
alert(`El monto total de su compra es: $ ${total}`);