// Funciones en TypeScript. 

// Ejemplo 1:

function suma(v1: number, v2: number): number{
    return v1+v2;
}

console.log(suma(1,5));

let suma2 = (v1: number, v2: number): number => v1 + v2; 

console.log(suma2(6,2));

// Otro tipo de función con parámetros opcionales
// Siempre los parametros opcionales deben ir declarados al final

function opcional(nombre?: string) {}

opcional();
opcional("Estefania");

// Si tenemos parámetros obligatorios los teemos que declarar al principio, por ejemplo: 

function opcional2(parametro_obligatorio: number, nombre?: string) {}

// Como en JS, podemos asignar un valor por defecto a los parámetros de la función, eso se haría de la siguiente forma:

function opcional3(valor_por_defecto = "Inicial") {}

// Para indicar qué devuelve una función lo añadimos al final de la declaración con : . Por ejemplo:

function suma3(v1: number, v2: number): number{
    return v1+v2;
}

// Si queremos indicar que una función no devuelve nada, podemos ponerle el tipo void de la siguiente forma:

function crearUsuario(nombre: string, apellido : string, edad : number) : void {
    // no podemos devolver nada salvo undefined o null. 
    // Podemos dejarlo así o indicar que devolvemos null o undefined:
    return undefined; 
}

// También podemos devolver el tipo never. Este tipo se usa para las funciones que nunca terminan (bucle infinito o error)

//function funcion_con_error() : never{}

