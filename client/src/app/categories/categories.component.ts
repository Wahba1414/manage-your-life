import { Component, OnInit } from '@angular/core';

// importing interfaces.
import Category from './category.interface';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor() { }
  categories: Category[];

  ngOnInit() {
    // initalizing categories.
    this. categories = [
      {
        name: 'work',
        color:'red',
        number:1,
        description:'Manging Work tasks'
      },
      {
        name: 'personal',
        color:'blue',
        number:2,
        description:'Manging personal tasks'
      }
    ] 
  }

}
