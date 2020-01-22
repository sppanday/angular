import { StudentInfo } from './../model/student.model';
import { Observable } from 'rxjs';
import { State } from './student-store/student.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as StudentActions from './student-store/student.actions';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students : any;
  constructor(
    private store : Store<State>
  ) { }

  ngOnInit() {
  }

  addStudent(id) {
  this.store.dispatch(new StudentActions.AddStudent({id}));
  }
  removeStudent(id) {
  this.store.dispatch(new StudentActions.RemoveStudent({id}));
  }

}
