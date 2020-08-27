// Los namespaces nos permiten agrupar identificadores en un mismo nombre
// Tienen como objetivo evitar que dos programas (independientes) usen el mismo nombre para cosas distintas
// clases, constantes o interfaces pueden ir dentro de un namespace

// Definimos un namespace:

namespace CF {

    // Con el export, podemos exportar los valores declarados aquí
    export class Youtube{}
    export const url : string = "https://codigofacilito.com";

    // Si tenemos un atributo privado no se exporta. 
    const privado : string = "123";

}   

// Para acceder a los elementos tenemos que poner el nombre del namespace y el atributo al que queremos acceder. 
let video : CF.Youtube = new CF.Youtube();