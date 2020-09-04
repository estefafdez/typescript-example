// Los decoradores de propieades se diferencian de los de clase porque 
// en lugar de mandar un argumento mandan dos. 
// El segundo argumento es una propiedad y siempre de tipo string. 

function Decorador2(clsProto : Speakers, propertyName: string) {
    console.log('Soy un decorador en ejecución');
    clsProto.className = clsProto.constructor.name; 
    console.log(propertyName);
}

// Decorador que se aplica sobre propiedades estáticas. 
function DecoradorStatic(cls:Function, propertyName : string){
}

// Definimos un decorador dentro de un parámetro de la clase
class Speakers {
    @Decorador 
    numero : number; 

    @DecoradorStatic
    static otroParam : string; 
}

