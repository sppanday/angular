import { Effects } from './store/effects';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule, combineReducers } from '@ngrx/store';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      student : student.reducers}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
