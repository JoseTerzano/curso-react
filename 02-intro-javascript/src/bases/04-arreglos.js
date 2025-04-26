
//const arreglo = new Array(100); utilizar asi cuando queramos crear un arreglo de un tamaño fijo (igualmente se puede seguir expandiendo)

const arreglo = [1,2,3,4];
//arreglo.push(1);   
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

let arreglo2 = [...arreglo, 5];
//arreglo2.push(5); // esto afecta a arreglo y arreglo2 porque ambos apuntan a la misma referencia de memoria

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);