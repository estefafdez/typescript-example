// Las clases abstractas pueden tener implementación. 

abstract class Asset2 {
    x : number;
    y : number;
    witdh : number;
    heigh : number; 
    getCoords() : string {
        return `${this.x},${this.y}`
    };
}

class Hero2 extends Asset2 {
    move(speed: number){
        return true;
    }
}