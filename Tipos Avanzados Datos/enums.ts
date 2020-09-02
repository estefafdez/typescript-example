// Los enum son un tipo de dato que toma un conjunto de valores
// numericos y asignarles un nombre para identificarlos de forma clara

// Definimos por ejemplo un conjunto enum con las diferentes tallas de ropa
enum Tallas {
    S = 1,
    M = 2 ,
    L = 3
}

// Definimos una clase pedido que tendrá una talla
class Pedido{
    talla: number; 
}

// Creamos una variable del tipo pedido para hacer un pedido con su talla correspondiente
let pedido: Pedido = new Pedido(); 

// Para definir la talla usando el enum usamos la siguiente sintaxis
pedido.talla = Tallas.L; 

console.log(Tallas.L); 

// Creamos otro enum con los estados del pago:

enum PaymentState {
    Creado, // Coge el valor 0 por defecto
    Pagado,
    Deuda
}

// Esto devuelve 2
console.log(PaymentState.Deuda); 

