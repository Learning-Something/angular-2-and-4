import { DaoInterface } from './dao.interface'
import { AnimalDao } from './animal-dao'
import { Animal } from './../classes/animal'

let dao: DaoInterface = new AnimalDao();

dao.insert(new Animal('Rex'));