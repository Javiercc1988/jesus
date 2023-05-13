// let edad = parseInt(prompt("introduce tu edad"));

// if (edad >= 18 && sexo === "M") {
//   console.log("eres mayor de edad o mujer");
// } else if (edad >= 16) {
//   console.log("Necesitas una autorizacion");
// } else {
//   console.log("no eres mayor", edad);
// }

// ********************************************
// if (edad > 18) {
//   console.log("Vale eres mayor de edad");
//   let sexo = prompt("Introduce H o M: ");

//   if (sexo === "M" || sexo === "m") {
//     console.log("Y ademas eres mujer")
//   }
// }

// ********************************************
// ********************************************
// let producto = prompt("Introduce el producto: ");

// let i = 0;

// if (producto === "piña") {
//   alert("El precio es 1.60€");
//   compra += 1;
//   console.log("El valor de tu compra es: ", compra + " €");
// } else if (producto === "manzana") {
//   alert("El precio es 2€");
//   compra += 2;
//   console.log("El valor de tu compra es: ", compra + " €");
// } else if (producto === "platano") {
//   alert("El precio es 3€");
//   compra += 3;
//   console.log("El valor de tu compra es: ", compra + " €");
// } else {
//   alert("no tenemos el producto");
// }

// if(compra === 2){
//     console.log("El total de tu compra se ha quedado en : ", compra + " €");
// }

// EJERCICIO CONCESIONARIO

// const marca = 'ford'
let marca = prompt("introduce un modelo");
let modelo = prompt("introduce un modelo");
let precio = 20000;

if (marca === "ford" && modelo === "fiesta") {
  console.log("se aplica 5%");
} else {
  console.log("se aplica 10%");
}

// if (modelo === 'fiesta') {
//     console.log('se aplica 5%')
// }else{
//     console.log('se aplica 10%')
// }

// if (modelo === 'fiesta') {
//     console.log('se aplica 5%')
//     const precioFinal = 20000*5/100
//     console.log('El precio se quedará en : ', (precio - precioFinal))
// }else if(modelo === 'focus'){
//     console.log('se aplica 10%')
//     const precioFinal = 20000*10/100
//     console.log('El precio se quedará en : ', (precio - precioFinal))
// }else{
//     alert('no tienes descuento')
// }
