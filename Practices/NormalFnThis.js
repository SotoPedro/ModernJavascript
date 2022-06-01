let name  = "global";

let runIt = function(fn) {
    let name  = "runIt";

    console.log("From runI ---");
    console.log(this); //con la invocación normal this hace referencia al ambiente global, si es el buscador, window es el objeto global
    console.log(this.name);
    fn();
}

//Normal approach to execute a returned function
/* const a = fun1();
a(); */

//shortcut para cuando retorna una función
// fun1()();
//No importa en dónde se declara la función, sino en cómo es que se invoca.
runIt(function fun2() {
    let name  = "fun2";

    console.log("From fun2 ---");
    console.log(this); //con la invocación normal this hace referencia al ambiente global, si es el buscador, window es el objeto global
    console.log(this.name);
});

//Cuando se invoca una función normal o normal function this hace referencia al objeto global sin importar en dónde definamos la función

//using strict
//utilizando el modo estricto this no se hace bind al objeto global, en strict mode el objeto global no está disponible