import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()

export class Effects {
    constructor(private actions$: Action) {}
}
