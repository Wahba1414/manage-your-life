import { Component, OnInit } from '@angular/core';

// Form.
import {FormBuilder, Validators} from '@angular/forms'

// Http.
import { HttpClient } from '@angular/common/http';


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

  // List data.
  categories: Category[];

  // Form.
  // Building Form.
  newCategoryForm = this.fb.group({
    name: ['',Validators.required],
    description: ['',[Validators.required] ],
    color: ['black'],
  });

  // submit.
  onSubmit(){
    console.log('Inside onSubmit function');
    // preparing the new category data.
    var newCategory:Category = {
      name: this.newCategoryForm.controls['name'].value.trim(),
      description: this.newCategoryForm.controls['description'].value.trim(),
      color: this.newCategoryForm.controls['color'].value.trim(),
      number: 0 //Will ignored by the server.
    };

    console.log('newCategory: ' , newCategory);

    this.http.post('category/createCategory',newCategory).subscribe((data:any) => {
      console.log('returned data: ' , data);
    })
  }


  // Controls.
  showNewCategoryForm:Boolean = true;

  constructor(private fb: FormBuilder, private http: HttpClient) {

  }

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
      },
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
      },
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
      },
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
      },
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
      },
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
