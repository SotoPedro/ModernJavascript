let global = "global";

//Como el objeto es que Invoca el método, this es encadenado al objeto, es decir, que this ahora hace referencia al objeto que lo invoca y no al objeto global
let obj1 = {
    name: "obj1",
    fun1: function () {
        console.log("from fun 1 in obj 1 -----")
        console.log(this)
        console.log(this.name);
    }
};

// obj1.fun1();

//Cómo obj2 es el que invoca la función, this ahora hace referencia obj2
let obj2 = {
    name: "obj2",
    fun2: obj1.fun1
};

// obj2.fun2();

let fun3 = function() {
    console.log("From fun3 ---");
    console.log(this);
    console.log(this.name);
}


let obj3 = {
    name: 'obj3'
}

obj3.fun3 = fun3;
/* 
obj3.fun3();
fun3();
 */
let obj4 = {
    name: "obj4",
    obj5: {
        name: "obj5",
        fun5: function() {
            console.log("From fun5 ---");
            console.log(this);
            console.log(this.name);
        }
    }
};

//hace referencia a obj5 porque este es el que lo invoca
// obj4.obj5.fun5();


let fun6 = function() {
    console.log("fun6");
};

fun6.name = "fun6";
fun6.fun7 = function() {
    console.log("From fun7 ---");
    console.log(this);
    console.log(this.name);
}

fun6.fun7();