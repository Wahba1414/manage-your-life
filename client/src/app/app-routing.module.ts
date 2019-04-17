import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


// Importing app components
import { TasksComponent } from './tasks/tasks.component';
import { CategoriesComponent } from './categories/categories.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'categories' , component: CategoriesComponent},
  { path: 'statistics' , component:StatisticsComponent},

  // Defualt wildcard route.
  { path: '**', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ,
    // FormsModule ,
    // ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
