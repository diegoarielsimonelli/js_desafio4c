// Calculo iva

precioCosto=parseInt(prompt("Ingrese el costo del producto"));
console.log ("el precio ingresado es:"+ precioCosto);


function iva1(a){
   let iva= a * 0.21;
   return iva;
}
let ivafinal= iva1(precioCosto);
console.log ("el precio con IVA es:"+ ivafinal);


function sumar(a,b){
    let precioTotal= a + b;
    return precioTotal;
}
let sumatotal=sumar(precioCosto, ivafinal);
console.log ("el precio total es $:"+ sumar(precioCosto, sumatotal));

// // Comprobando si es múltiplo o no

num=parseInt(prompt("Ingrese el n° a verificar"));
console.log ("el n° ingresado es:"+ num);
num1=parseInt(prompt("Ingrese el OTRO n° a verificar"));
console.log ("el segundo n° a comparar es:"+ num1);


function div(a,b){
    let division=a % b
    return division;
}
let divisionf= div(num,num1);

if (divisionf == 0){
    console.log (num+" es múltiplo de  " + num1);
} else{
    console.log (num+" NO es múltiplo de  "+ num1);
}


