import { DaoInterface } from './dao.interface';
import { Animal } from './../1-classes/animal'

export class AnimalDao implements DaoInterface {
    
    tableName: string = '';

    insert(object: Animal): boolean {
        console.log('inserting...');
        object.mover(50)
        return true;
    }

    update(object: Animal): boolean {
        console.log('inserting...');
        object.mover(20)
        return true;
    }

    delete(id: number): Animal {
        return null;
    }

    find(id: number): Animal {
        return null;
    }

    findAll(): [Animal] {
        return [null];
    }
}