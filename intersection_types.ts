// Typescript nos permite a traves de los intersection types combinar
// varios tipos dentro de una misma variable 

// La sintaxis es la siguiente. Definimos dos clases con dos propiedades diferentes. 

class User {
    name : string;
}

class Admin {
    permission : number;
}

// Declaramos ahora una variable que va a tener los dos tipos: User y Admin:

let user: User & Admin; 

// Usamos las propiedades y los métodos de ambas clases. 

user.name = "Estefania";
user.permission = 123;

// Si tu quieres saber el tipo de user, te devolverá un tipo User&Admin por lo que no podemos
// guardar ambos tipos por separados sino que se guardarán juntos. 

