let sum = function(x,y) {
    return x + y;
};

//cuando se ejecute run, va a recibir la función sum y va a ejecutarla, imprimiendo el resultado de la suma
let run = function(fn,a,b) {
    console.log(fn(a,b));
}
//solo se pasa la referencia para sum, sin embargo, hasta dentro del a función run se ejecuta
run(sum,2,3);
 // si llamamos la función sin pasarle valores, no arroja errores en javascript hasta el tiempo de ejecución
run(function(a,b) {
    return a *  b;
},3,2);