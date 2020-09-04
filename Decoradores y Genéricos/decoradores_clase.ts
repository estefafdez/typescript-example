// Un decorador es el nombre de un patrón de diseño. 
// Los decoradores alteran de manera dinámica la funcionalidad 
// de una función, método o clase sin tener que hacer subclases 
// o cambiar el código fuente de la clase decorada

// Es como las anotaciones en Java. 

// Definimos un decorador:

function Decorador(cls : Function) {
    console.log('Soy un decorador en ejecución');
    cls.prototype.className = cls.name; 
}

// Definimos un decorador encima de la clase a la que vamos a decorar
@Decorador 
class Speakers {
    className: string;
}

// Definimos un objeto speakers que tendrá la propiedad className
let speakers : Speakers = new Speakers();

// Imprimimos ese objeto para ver el valor del className. 
console.log((speakers as any).className);

