// Una tupla fija tiene dos posiciones, con tipos distintos.
let tupla: [string, number] = ["Hola", 3];
console.log(tupla);

// Para permitir más elementos, se declara un rest explícito.
let extensible: [string, number, ...(string | number)[]] = ["Hola", 3];
extensible.push(6);
console.log(extensible);
