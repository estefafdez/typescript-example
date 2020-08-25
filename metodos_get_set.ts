class User{
    private _name: string = "";
    private _lastName: string = "";

    // Get el full name del usuario
    get fullName(): string {
        return this._name + " " + this._lastName;
    }

    // Seteamos el nombre completo de un usuario
    set fullName(fullName : string){
        let words = fullName.split(" ");
        this._name = words[0];
        this._lastName = words[1];
    }
}

let usuario : User =  new User();
usuario.fullName = "Estefania Fernández";
console.log(usuario.fullName);

