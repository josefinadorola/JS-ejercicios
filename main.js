//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function parImpar(numero){
if (numero % 2 == 0){
 console.log(`El número ${numero} es par`);
}
else
console.log(`El número ${numero} es impar`);
}

parImpar(5);


//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function esMayorIgual(num1, num2){
        if (num1 === num2){
            console.log("Los números son igulaes"); 
        }

        else if (num1 < num2)   {
            console.log(`${num1} es menor que ${num2}`);
        }
        else{
            console.log(`${num1} es mayor que ${num2}`);
        }
}

esMayorIgual(5,5);



//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function esMultiplo5(numero){
    let resultado = numero % 5;
    if (resultado ==0)
        console.log(`El número ${numero} es múltiplo de 5`);
    else 
    console.log(`El número ${numero} no es múltiplo de 5`);
}

esMultiplo5(25);



//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.


function ciclo(num1){
    let num2 = 0;
    while(num2 < num1){
        console.log(num2) 
        num2++;
    }
    
    }

ciclo(10);





//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.




//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function arrayParametro([array]){
    console.log(array);
}
arrayParametro(["Leo", "Fideo", "Julián", "Enzo"]);


//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".


function miArray(){
    let num = [0,1,2,3,4,5,6,7,8,9];
    for (let i=0; i < num.length; i++){
        if (num[5]){
            continue;
        }
        console.log(num[i]);
    }
}
    miArray();



//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.


