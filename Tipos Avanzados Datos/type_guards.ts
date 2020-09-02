// Los union types funcionan de esta forma como vimos antes. 
// Los veremos mucho más en los tipos de retorno de una función. 

let age : number | string ;

// Un ejemplo de función con type guards es la siguiente
// Después de definir los tipos de la variable obj, definimos el tipo que pensamos que vamos a tener, 
// en este caso number. En el return comparamos si efectivamente es o no un número. 
// Si esta función nos devuelve que obj es un número, ya sabemos el tipo que devolvemos, sino, nuestro objeto será del otro tipo definido. 
// Esta función se llama una función guardián de tipo número. 

function isNumber(obj: number | string) : obj is number {
    return typeof obj === "number";
}

// Igual que con el tipo número, nos creamos otra función para evaluar si
// el objeto es de tipo string. 

function isString(obj: number | string) : obj is string {
    // type of es el operador que devuelve el tipo de un objeto
    return typeof obj === "string";
}

// Ahora crearemos una función que utilice estas dos funciones de type guards. 

function printAge (age: number | string) {
    if(isNumber(age)){
        // El objeto es un número
    }
    if(isString(age)){
        // El objeto es un string
    }
}

// Como age sólo tiene dos valores tipo posibles, tambien podemos 
// escribir esa función de la siguiente forma:
function printAge2 (age: number | string) {
    if(isNumber(age)){
        // El objeto es un número
    }
    else{
        // El objeto es un string y no hace falta usar la lógica ya que 
        // este elemento sólo tiene dos posibles tipos. 
    }
}

// También podemos usar typeof sin tener que hacer una función concreta:
function printAge3 (age: number | string) {
    if(typeof age === 'number') {
        // El objeto es un número
    }
    else{
        // El objeto es un string y no hace falta usar la lógica ya que 
        // este elemento sólo tiene dos posibles tipos. 
        age.charAt(0);
    }
}

