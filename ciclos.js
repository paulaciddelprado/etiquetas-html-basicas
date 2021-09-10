alert ("Ciclos");
 
// Ciclo For en JS sirve para ejecutar n cantidad de veces un código

for (var i = 0 ; i < 5 ; i ++) {
    console.log ("Hola desde el ciclo for. Vuelta" + i); 
}


const frutas = ["Manzana", "Plátano", "Mango", "Pera", "Piña", "Sandía"]; 
console.log (frutas [0]); 
console.log (frutas [1]);
console.log (frutas [2]);
console.log (frutas [3]);
console.log (frutas [4]);
console.log (frutas [5]);

for (var i = 0; i < frutas.length; i ++) {
    console.log (frutas [i]);
    document.write (frutas [i] + '</br>');
}
