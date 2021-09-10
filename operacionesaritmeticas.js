alert ("Operaciones Aritméticas Básicas")
var num1 = parseInt (prompt ("Escribe un primer número"));
var num2 = parseInt (prompt ("Escribe un segundo número"));
function suma (num1, num2) {   
    var resultado = num1 + num2; 
    console.log (resultado); 
    document.write ("Resultado de suma: " + resultado + '</br>');
}

function resta (num1, num2) {   
    var resultado = num1 - num2; 
    console.log (resultado); 
    document.write ("Resultado de resta: " + resultado + '</br>');
}

function multiplicación (num1, num2) {   
    var resultado = num1 * num2; 
    console.log (resultado); 
    document.write ("Resultado de multiplicación: " + resultado + '</br>');
}

function división (num1, num2) {   
    var resultado = num1 / num2; 
    console.log (resultado); 
    document.write ("Resultado de división: " + resultado + '</br>');
}


suma (num1, num2);
resta (num1, num2);
multiplicación (num1, num2);
división (num1, num2);

/*suma (2, 4, 6, 8, 10, 12)
suma (3, 6, 9, 12, 15, 18)
suma (1, 2, 3, 4, 5, 6)*/