import { Component, OnInit } from '@angular/core';

// importing interfaces.
import Category from './category.interface';

// Importing icons.
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  // Icons.
  trash = faTrash;
  edit = faEdit;

  // declaration.
  categories: Category[];
  
  constructor() { }
  
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
