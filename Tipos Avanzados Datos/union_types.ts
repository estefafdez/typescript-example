// Qué pasa si queremos guardar parámetros de tipos diferentes en una misma variable, por ejemplo
// un string o un número. 

// Para eso hay un tipo avanzado del lenguaje llamados tipos de unión que tienen el símbolo |

// Definimos un dato de este tipo: el valor puede ser número o string:

let age : number | string; 

age = 12;

age = "doce";

// Estos tipos de datos pueden ejecutarse en métodos que comparten los tipos de datos que se declaran
// Por ejemplo, podemos usar el método toString con age:

age.toString();

