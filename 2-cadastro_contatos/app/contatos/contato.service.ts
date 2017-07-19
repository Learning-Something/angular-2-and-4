import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CONTATOS } from './contatos-mock';
import { Contato } from './contato.model';

@Injectable()
export class ContatoService {

    private contatosUrl: string = 'app/contatos';

    constructor(
        private http: Http
    ) {}

    getContatos(): Promise<Contato[]> {
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(response => response.json().data as Contato[]);
    }

    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
    }
}