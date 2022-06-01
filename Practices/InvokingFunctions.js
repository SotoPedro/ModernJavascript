let test = function(val) {
    console.log(this);
    console.log(val);
    console.log(arguments); //muestra el indice y valor de cada argumentos que se pasa a la función
    console.log(arguments[2]); 
};


test(3,3,4,5,6);

const sumIt = function() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    console.log(sum);
}

sumIt(1,2,3,4,5,6,7,8,9,10);