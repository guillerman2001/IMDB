const fs = require('fs');
import { Movie } from "./movie";

export class Imdb{
    public peliculas:Movie[];
    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
    escribirEnFicheroJSON(nombreFichero:string){
        fs.writeFile(nombreFichero+".json", JSON.stringify(this.peliculas), function(err:boolean, result:boolean) {
            if(err) console.log('error', err);
            if(result) console.log('ha cargado correctamente');
        });
    }
    obtenerInstanciaIMDB(nombreFichero:string){
        fs.readFile(nombreFichero+'.json', (err:any, data:any) => {
            if (err) throw err;
            let student = JSON.parse(data);
            console.log(student);
        })
    }
}

