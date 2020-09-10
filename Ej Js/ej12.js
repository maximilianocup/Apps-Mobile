class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    Presentarse(nombre, edad){
        return "Hola, me llamo " + this.nombre + " y tengo " + this.edad + " años ";
    }

    

}

class Estudiante extends Persona{
    constructor(nombre, edad, profesor){
        super(nombre, edad);
        this.profesor = profesor;
    }

    estudiando(){
        return "estoy estudiando con " + this.profesor;
    }

    setProfesor(profesor){
        this.profesor = profesor;
    }
}

var estudiante = new Estudiante ("Maximiliano", 22, "Nievas");
console.log(estudiante.Presentarse());
console.log(estudiante.setProfesor("Christian Dario Nievas"));
console.log(estudiante.estudiando());
