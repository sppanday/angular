
import { Injectable } from '@angular/core';
import { of } from 'rxjs';


Injectable();

export class StudentService {

    constructor() {}

    getStudentInfo() {
        return of(
            [
              {id: '1',
                name: 'Rob',
                major: 'science',
                date: '12/12/2020',
                address: '12 Harry Rd San Francisco USA',
                telephoneNum: '0437834534'}
            ],
            [
                {id: '2',
                  name: 'Jack',
                  major: 'science',
                  date: '12/12/2020',
                  address: '12 Harry Rd San Francisco USA',
                  telephoneNum: '0437834534'}
              ],
              [
                {id: '3',
                  name: 'Tom',
                  major: 'science',
                  date: '12/12/2020',
                  address: '12 Harry Rd San Francisco USA',
                  telephoneNum: '0437834534'}
              ]
        )
    };
}
