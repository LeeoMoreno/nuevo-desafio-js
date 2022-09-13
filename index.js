
function calcularPrecios() {

    let productoIngresado;
    let respuesta = "si";
    let sumaFinalPrecios;
    let precioChocolate = 15;
    let precioAlfajor = 8;
    let precioChupetin = 4;
    let contadorChocolate = 0;
    let contadorAlfajor = 0;
    let contadorChupetin = 0;
    let descuentoDel10 = 10;
    let precioFinalChocolate;
    let precioFinalAlfajor;
    let precioFinalChupetin;
    let mensajeDescuento;
    let mensaje;
    let cantidadTotalDeProductos;
    let precioConDescuento;
    let precioFinal;
  
  
    alert("Bienvenidos la kiosco de Leo!")
  
    while (respuesta == "si") {
      productoIngresado = prompt(`Nuestros productos son:
      Chocolate: $15  
      Alfajor: $8
      Chupetin: $4
      Que desea comprar?`);
      while (productoIngresado != "chocolate" && productoIngresado != "alfajor" && productoIngresado != "chupetin") {
        productoIngresado = prompt("Por favor introdusca uno de los productos disponibles", "Chocolate Alfajor o Chupetin");
      }
  
 
      switch (productoIngresado) {
        case "chocolate":
          contadorChocolate++;
          break;
  
        case "alfajor":
          contadorAlfajor++;
          break;
  
        case "chupetin":
          contadorChupetin++;
          break;
  
      }
      alert('Al comprar 5 o mas de un mismo producto, se le hara un 10% de descuento!');
      respuesta = prompt("¿Desea seguir comprando?");
      while (respuesta != "si" && respuesta != "no") {
        respuesta = prompt('Por favor, ingrese solamente si o no');
      }
  
    }
  
  
    precioFinalChocolate = precioChocolate * contadorChocolate;
    precioFinalAlfajor = precioAlfajor * contadorAlfajor;
    precioFinalChupetin = precioChupetin * contadorChupetin;
  
    sumaFinalPrecios = precioFinalChocolate + precioFinalAlfajor + precioFinalChupetin;
  
    cantidadTotalDeProductos = contadorChocolate + contadorAlfajor + contadorChupetin;
  
  
    if (cantidadTotalDeProductos >= 5) {
      mensajeDescuento = 'Felicidades, por su compra obtuvo un 10% de descuento';
      precioConDescuento = sumaFinalPrecios/descuentoDel10;
    }
    else if (cantidadTotalDeProductos == 4) {
      mensajeDescuento = 'Compre 5 o mas unidades de un mismo producto para obtener un 10% de descuento';
      precioConDescuento=0;
    } else {
      mensajeDescuento = 'No tiene descuento';
      precioConDescuento=0;
    }
  
  
    precioFinal = sumaFinalPrecios - precioConDescuento;
  
    //MENSAJE FINAL
    mensaje = `Usted compró ${contadorChocolate} unidad/es de Chocolates, <br>
    ${contadorAlfajor} unidad/es de Alfajors,<br>
    ${contadorChupetin} unidad/es de Chupetins,<br>
    ${mensajeDescuento} El precio final a pagar es de $${precioFinal}`;
  
    document.write(mensaje);
  
  }
  
  calcularPrecios();