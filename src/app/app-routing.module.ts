import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToDoListComponent  } from './to-do-list/to-do-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'user-list', component: UserListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }