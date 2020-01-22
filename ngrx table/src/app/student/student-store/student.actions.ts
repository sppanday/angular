
import { Action } from '@ngrx/store';


export const ADD_STUDENT = '[STUDENT] Add';
export const REMOVE_STUDENT = '[STUDENT] Remove';

export class AddStudent implements Action {

    readonly type = ADD_STUDENT;

    constructor(public payload: {id: number}) {
      
    }
}
export class RemoveStudent implements Action {
    readonly type = REMOVE_STUDENT;
    constructor(public payload: {id: number}) {}

}

export type Actions = AddStudent | RemoveStudent;