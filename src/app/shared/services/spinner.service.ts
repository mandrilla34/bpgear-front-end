import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
    public visible = false;

    constructor() { }

    show(): void {
        this.visible = true;
    }

    hide(): void {
        this.visible = false;
    }
}
