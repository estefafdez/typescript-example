class Video2 {

    // Creamos propiedades de esta clase
    public title: string;
    private titlePrivate: string;
    protected titleProtected: string; 

    // Creamos un constructor de la clase. Siempre se llama constructor. 
    constructor(title: string) {
        this.title = title; 
        this.titlePrivate = "Titulo privado";
        this.titleProtected = "Titulo protected";
    }
}

class YoutubeVideo2 extends Video2 {
    printTitle(){
        console.log(this.title);
        console.log(this.titleProtected);
    }
}

// generar una nueva instancia de la clase y llamamos a sus funciones:
let miVideo2: Video = new Video("Modificadores de acceso en TypeScript");

// Podemos imprimir este parametro porque es público 
console.log(miVideo.title); 

// generamos otra instancia de la segunda clase
let miYoutubeVideo2: YoutubeVideo2 = new YoutubeVideo2("Mi Youtube Video");
miYoutubeVideo2.printTitle();
