class Requestor{

    // Declaramos una variable estática de la clase
    static url:string = "https://codigofacilito.com"; 

    // Accedemos al get con el artributo estático llamandolo desde la clase para no crear más de una copia de la url. 
    static getCourse(){
        console.log(`${Requestor.url}/cursos`);
    }

    // Hacemos lo mismo para acceder a los artículos.
    static getArticles(){
        console.log(`${Requestor.url}/articles`);
    }
}

// Podemos acceder a los objetos estáticos desde fuera de la clase
Requestor.getArticles();