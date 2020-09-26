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

class Profesor extends Persona{
    constructor(nombre, edad, estudiantes){
    super(nombre,edad);
    this.estudiantes = [];
    }

    enseñando(){
        console.log("soy el profesor: " + this.nombre + ", tengo: " + this.edad + " años" +  " y le estoy enseñando a: " /*this.estudiantes.forEach(i => console.log(i.nombre))*/);
        this.estudiantes.forEach(i => console.log(i.nombre));
    }

    addEstudiante(estudiante){
        this.estudiantes.push(estudiante);
        estudiante.setProfesor(this.nombre)
    }
}
var estudiante2 = new Estudiante("Maximiliano", 24, "Jorge");
var estudiante3 = new Estudiante("Julian", 38, "Julio");
profesor1 = new Profesor("Christian",35, [estudiante2,estudiante3]);
profesor1.addEstudiante(estudiante2)
profesor1.addEstudiante(estudiante3);
profesor1.enseñando();

 