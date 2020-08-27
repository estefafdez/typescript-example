// Las aserciones de tipo se usan para almacenar el tipo de 
// dato de un objeto y sobreescribirlo si lo necesitamos. 

interface AJAXSettings {
    url: string;
}

// Aqui decimos a typescript que aunque no tenga parámetros definidos como tal
// dentro de options, que es del tipo AJAXSettings. 

let options = {} as AJAXSettings;

options.url = "https://www.google.com"