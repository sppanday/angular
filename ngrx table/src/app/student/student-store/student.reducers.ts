import { AddStudent } from './../../store/student.actions';
import { StudentInfo } from './../../model/student.model';
import { Action } from '@ngrx/store';
import * as StudentActions from './student.actions';
export interface State {
}
export const initialState:  StudentInfo = {
    id : 1,
    name: 'Rob',
    address: '12 Maryland Pl',
    major: 'Science',
    date: '11/03/2020',
    telephoneNum: 3646873
};

export function reducer(state: StudentInfo[] = [initialState], 
    action: StudentActions.Actions): State {
    switch (action.type) {
        case StudentActions.ADD_STUDENT:
            return[...state, action.payload];

        case StudentActions.REMOVE_STUDENT:
            state.splice(action.payload.id, 1)
            return state;
        default:
            return state;
    }
}
