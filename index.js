class Usuario{
    constructor (nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=[];
        this.mascotas=[];
     }
     getFullName(){
        console.log(`Mi nombre completo es ${this.nombre} ${this.apellido}`)
     }
     addMascotas(){
        this.mascotas.push("Perro", "Hamster", "Pato")
        console.log(this.mascotas)
        console.log(`mi mascotas son  ${this.mascotas}`)
    }
     countMascotas(){
        
       console.log(this.mascotas.length)
     }
    
     addBook(){
            this.libros.push({ nombre: "Star Wars", autor: "Lucas"}, {nombre: "Gladiador", autor:" Pepe"})  
        console.log(this.libros)
     }

     getBookNames(){
        //console.log(this.libros.map((libro) => this.libros.nombre))
        let nombreslibros = this.libros.map(libro=>{
            return (libro.nombre);
      } )
      console.log(nombreslibros)
    }
     
        //return nombreslibros
       // console.log(nombreslibros)
     //}
}

let usuario1 = new Usuario("Santiago", "Rodriguez",[],[])
//usuario1.addBook([{ nombre: "Star Wars",autor: "Lucas"}])

usuario1.getFullName()
usuario1.addMascotas()
usuario1.countMascotas()
usuario1.addBook()
usuario1.getBookNames()
