//Vamos a crear 3 clases como si fuera para un video juego
// Una de un heroe, una bala y una de colisiones para ver si alguien ha sido disparado

// Definimos una interfaz con los atributos y métodos que vamos a necesitar. 
// Los define pero no se le asigna ni valor a las variables ni a los métodos.
interface Asset {
    x, y, width, height : number;
    getCoords(): string;
}

// Definimos la clase del heroe
class Hero implements Asset{
    x : number;
    y: number;
    width : number; 
    height : number; 

    getCoords() : string {
        return "";
    }

}

// Definimos la clase de la bala
class Bullet implements Asset{
    x : number;
    y: number;
    width : number; 
    height : number; 

    getCoords() : string {
        return "";
    }

}

// Definimos una clase enemigo
class Enemy implements Asset{
    x : number;
    y: number;
    width : number; 
    height : number; 

    getCoords() : string {
        return "";
    }

}

// Al heredar de bullets no debemos definir los mismos atributos de asset ya que están ya definidos. 
class SpaceBullet extends Bullet implements Asset{
}

// Definimos la clase de la colisión
class Collision {
    // Validamos que exista forma de comparar los elementos
    // Este método compara objeto con objeto2
    // Definimos el tipo como any porque no sabemos el tipo que vamos a recibir
    static check (obj : Asset, objet2: Asset){
    }
}


// Definimos un nuevo héroe
let hero : Asset = new Hero();


