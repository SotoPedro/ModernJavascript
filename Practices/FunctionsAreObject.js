let report1 = function(val) {
    console.log(val);
};

//creando función con un constructor, opción no muy amigable 
// let report2 = new Function("val", "console.log(val);");


report1('Expression');
// report2("constructor")

//confirmar que es un objeto
report1.userName = 'Pedro';
console.log(report1.userName);

//se hace una referencia al reporte1 más no una copia de la función
let report3 = report1;

//Es por eso que report3 tiene acceso a .userName
console.log(report3.userName);