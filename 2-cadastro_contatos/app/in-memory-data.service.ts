import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService {
    createDb(): {} {
        let contatos: Contato[] = [
            {id: 1, nome: 'Fulano de tal', email: 'fulano@email.com', telefone: '(00) 00000-0000'},
            {id: 2, nome: 'AAAAAAAAAAA', email: 'aaaaaaaa@email.com', telefone: '(00) 00000-0000'},
            {id: 3, nome: 'MEEEEEEE', email: 'meeeee@email.com', telefone: '(00) 00000-0000'},
            {id: 4, nome: 'BLUUUUUUU', email: 'bluuuuu@email.com', telefone: '(00) 00000-0000'},
            {id: 5, nome: 'Xablau', email: 'xablau@email.com', telefone: '(00) 00000-0000'},
        ];

        return {
            'contatos': contatos
        };
    }
}