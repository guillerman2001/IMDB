
export class Movie{
    public title:string;
    public releaseYear:number;
    public actors:string[];
    public nacionality:string;
    public director:string;
    public writer:string;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;
    constructor(title:string,releaseYear:number,nacionality:string,genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    printAll(){
        console.log(`
        Titulo: ${this.title},
        Año de lanzamiento: ${this.releaseYear},
        Actores: ${this.actors},
        Nacionalidad: ${this.nacionality},
        Director: ${this.director},
        Escritor: ${this.writer},
        Lenguaje: ${this.language},
        Plataforma: ${this.plataform},
        Es de Marvel?: ${this.isMCU},
        Protagonista: ${this.mainCharacterName},
        Productor: ${this.producer},
        Distribudor: ${this.distributor},
        Genero: ${this.genre}
        `)
    }
}