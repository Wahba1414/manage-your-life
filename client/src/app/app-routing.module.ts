import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Importing app components
import { TasksComponent } from './tasks/tasks.component';
import { CategoriesComponent } from './categories/categories.component';
import { StatisticsComponent } from './statistics/statistics.component'; 

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'categories' , component: CategoriesComponent},
  { path: 'statistics' , component:StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
