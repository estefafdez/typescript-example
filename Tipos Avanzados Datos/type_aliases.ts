// Son un alias para un tipo existente de dato. 

//Definit un nuevo tipo de dato, sintaxis:
// type + nombreTipo = tipo del que queremos que sea el dato;
// Por ejemplo:

type numero = number; 

let edad: numero; 

edad = 20; 


// Vamos a crear un tipo con una unión de tipos, es decir, 
// un dato que puede tener varios tipos, en este caso number o string. 

type NumberOfString = number | string; 

let ag : NumberOfString;

ag = "hola"; 
ag = 20; 

// También podemos crear tipos compuestos con clases:

class User {
    name : string; 
}

class Admin {
    permissions : number; 
}

type UserAdmin = User & Admin; 
let user: UserAdmin; 

// También podemos asignarle el uso de una función a los type aliases. 
// Por ejemplo, esto es un type alias donde la función debe devolver un string. 

type FuncString = () => string; 

function executor (f: FuncString) {
}

executor(() => "Hola"); 

