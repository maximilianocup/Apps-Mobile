class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    Presentarse(nombre, edad){
        return "Hola, me llamo " + this.nombre + " y tengo " + this.edad + " años ";
    }

    

}

var persona = new Persona ("Maximiliano", 25);

   console.log(persona.Presentarse());