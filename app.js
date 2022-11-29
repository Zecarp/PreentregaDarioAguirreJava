/*
let nombre = "Ezequiel";
let apellido = "Aguirre";
let edad = 28;
let alumnos = true;

/*
console.log (nombre)
console.log (edad)
console.log(alumnos) */
/*
console.log(nombre)
console.log (apellido)
console.log(edad)
*/
/*console.log(nombre + " " + apellido)

let numero1 = 10
let numero2 = 15

console.log (numero1 + numero2)


/* prompt ( "Bienvenido, ingresa tu nombre" )

>	
<
*/
/*
let pais = prompt( "Ingrese su pais de origen" ) 
let destino = prompt ( "Y a donde queres viajar???" )


alert("Que bellizimo lugar es" + " " + pais + "!!!" + ";asi que te vas para" + " " + destino + ", que maravilla!!!" )

let valijas = prompt ("¿Con cuntas valijas viajas?")

if (valijas <= 1 ) {
console.log ("Usted lleva una vañija")
} else {

    
}
*/

let nombre = prompt ("Ingrese nombre")
let Apeliido = prompt ("Ingrese apellido")

function saludar(nombre, Apellido) {
    console.log(`Saludos ${nombre} ${Apellido}`);}

    saludar(nombre, Apeliido);


let PaisDeOrigen = prompt ("Ingrese su pais de origen.");
alert("Que bellizimo lugar es" + " " + PaisDeOrigen + "!!!" + ";asi que te vas de vacaciones????, que maravilla!!!" )

 
let PaisDeDestibo = prompt (`Elija los destinos disponibles a la fercha: 
1 = Disney
2 = Qatar
3 = Brazil
4 = Mexico
`)
4
switch (PaisDeDestibo) {
    case "1":
        console.log ("Tu destino es Disney");
        break;

    case "2":
        console.log ("Tu destino es Qatar")
    break;

    case "3":
        console.log ("Tu destino es Brazil")
        break;

    case "4":
        console.log ("Tu destino es Mexico")
        break;

    default:
        console.log ("Ninguna de las anterirores")
        break;
}
let PesoDeValija1 = Number(prompt("Ingrese el peso de mi valija numero 1"));
let PesoDeValija2 = Number(prompt("Ingrese el peso de mi valija numero2"));
function suma(PesoDeValija1,PesoDeValija2 ) {
  return PesoDeValija2 + PesoDeValija1;
}
let resultado = suma(PesoDeValija1,PesoDeValija2);
console.log("Su peso total es de " + resultado + "Kg");

for (let i = 0; i <= 3; i++) {
  alert(`Espera el resultado a lasss: ${i}`);
}

