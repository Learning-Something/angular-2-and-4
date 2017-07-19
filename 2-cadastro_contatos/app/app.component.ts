import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private location: Location
    ) {}

    isRoot(): boolean {
        return location.pathname === '/contato';
    }
}