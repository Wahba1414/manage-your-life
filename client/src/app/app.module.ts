import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular notifier.
import { NotifierModule } from 'angular-notifier';


import { AppRoutingModule } from './app-routing.module';



// Icons.
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Pagination.
import {NgxPaginationModule} from 'ngx-pagination';

// Importing app modules
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { CategoriesComponent } from './categories/categories.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoreComponent } from './core/core.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CategoriesComponent,
    StatisticsComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
