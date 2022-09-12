let producto= 0;
let precioTotal = 0;
let precioEnCuotas = 0;


alert("En esta seccion encontraran todos nuestros productos")
alert("Llevando hoy! 3, 6, 9 y hasta 12 cuotas sin interes, no te lo podes perder!!")

function elegirProductos() {
    producto = Number(prompt("Ingrese un numero de los que esten a continuacion para el producto que desea agregar al carrito // 1. Maquina Wahl magic clip - $16.000 // 2. Afeitadora Phillips - $12.000 // 3. Bata peluqueria - $900 // 4. Kit tijeras + peine - $7.500 // 5. Cepillo de pelo + talco - $1200"));
    while (producto > 0 && producto < 6) {
        switch (producto) {
            case 1:
                precioTotal += 16000
                break;
                
            case 2:
                precioTotal += 12000
                break;

            case 3:
                precioTotal += 900
                break;

            case 4:
                precioTotal += 7500
                break;

            case 5:
                precioTotal += 1200
                break;

            default:
                break;
        }
        producto = Number(prompt("Ingrese el numero del producto que desea llevar // 1. Maquina Wahl magic clip - $16.000 // 2. Afeitadora Phillips - $12.000 // 3. Bata peluqueria - $900 // 4. Kit tijeras + peine - $7.500 // 5. Cepillo de pelo + talco - $1200"));
    }
    alert("Ya que el numero ingresado no corresponde a ninguno de la lista damos por sentado que no desea seguir agregando productos a su carrito! El monto total es de: $" + precioTotal)
}

function elegirCuotas() {
    cuotas = Number(prompt("Elige la cantidad de cuotas en las que desea abonar (1, 3, 6, 9, 12)"));
    if(cuotas === 3 || cuotas === 6 || cuotas === 9 || cuotas === 12) {
        precioEnCuotas = precioCuotas(cuotas);
        alert("Excelente, elegiste el pago en " + cuotas + " cuotas sin interes! El precio total de cada cuota es de: $" + precioEnCuotas.toFixed() + " - Gracias por elegirnos!!");
    }else if(cuotas === 1){
        alert("Excelente, elegiste el pago en " + cuotas + " cuota! El precio total es de: $" + precioTotal + " - Gracias por elegirnos!!");
    }else{
        alert("Ya que el numero ingresado no corresponde a ninguna cantidad de cuotas validas, por defecto el programa elige el pago en un unico abono de: $" + precioTotal + " - de lo contrario debe volver a realizar la operacion, muchas gracias!")
    }
}

function precioCuotas(a){
    return precioTotal / a;
}

elegirProductos();
elegirCuotas();