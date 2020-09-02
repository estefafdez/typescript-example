// declarar una clase:

class Video {

    // Creamos propiedades de esta clase
    title: string;

    // Creamos un constructor de la clase. Siempre se llama constructor. 
    // Vamos a ponerle un parámetro
    constructor(title: string) {
        this.title = title; 
    }

    // Creamos un método dentro de la clase para imprimir el titulo
    printTitle(){
        console.log(this.title);
    }

    // Creamos un método para cambiar el titulo
    changeTitle(title: string) {
        this.title = title;
    }

    // Método para coger el titulo
    getTitle(): string {
        return this.title;
    }
}

// generar una nueva instancia de la clase:
let miVideo: Video = new Video("Clases y objetos en TypeScript");

// Llamamos a las funciones que hemos creado
miVideo.printTitle();
miVideo.changeTitle("Titulo 2");
console.log(miVideo.getTitle());

