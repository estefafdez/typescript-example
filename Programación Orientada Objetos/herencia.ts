// Herencia con varias clases

class Video {

    // Creamos propiedades de esta clase
    title: string;

    // Creamos un constructor de la clase. Siempre se llama constructor. 
    // Vamos a ponerle un parámetro
    constructor(title: string) {
        this.title = title; 
    }

    play(){
        console.log("Playing");
    }

    stop(){
        console.log("Stopped");
    }
    
}

// Esta clase hereda de la clase Video 
class YoutubeVideo extends Video {

    // Sobreescribimos también el constructor
    constructor(title: string) {
        super(title); // para sobreescribir el constructor debemos usar super() y sus argumetos
        console.log("Reproduciendo video de Youtube con titulo " + title);
    }

    play(){
        super.play(); // Llama al método play de la clase padre
        console.log("Playing Youtube Video"); // sobre escribimos el método play
    }
}

// generar una nueva instancia de la clase y llamamos a sus funciones:
let miVideo: Video = new Video("Clases y objetos en TypeScript");
miVideo.play();
miVideo.stop();

// generamos otra instancia de la segunda clase
let miYoutubeVideo: YoutubeVideo = new YoutubeVideo("Mi Youtube Video");
miYoutubeVideo.play();
miYoutubeVideo.stop();