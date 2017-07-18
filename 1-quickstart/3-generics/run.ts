import { Dao } from './dao'
import { Animal } from './../1-classes/animal';
import { Cavalo } from './../1-classes/cavalo';

let dao: Dao<Animal> = new Dao<Animal>();

let animal: Cavalo = new Cavalo('titã');

dao.insert(animal);