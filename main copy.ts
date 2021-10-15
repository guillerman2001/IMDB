import { Imdb } from './imdbClass';
import { Movie } from "./movie";

let pelicula1 = new Movie('Capitana Marvel',2020,'Estados Unidos','accion');

pelicula1.actors = ['Guillermo Ramos','Fernando Diaz','Carmen Fernandez'];
pelicula1.director = 'Guillermo Ramos';
pelicula1.writer = 'Eduardo Ramos';
pelicula1.language = 'ingles';
pelicula1.plataform = 'cine';
pelicula1.isMCU = true;
pelicula1.mainCharacterName = 'Jesica Jones';
pelicula1.producer = 'Tomas Castillo';
pelicula1.distributor = 'Walt Disney';

pelicula1.printAll();

let pelicula2 = new Movie('Capitan America',2015,'Estados Unidos','accion');
let pelicula3 = new Movie('Torrente5',2015,'España','comedia');
let pelicula4 = new Movie('Me quiero comer tu pancreas',2017,'Japon','romantica');

let imdb1 = new Imdb([pelicula2,pelicula3,pelicula4])
console.log(imdb1);