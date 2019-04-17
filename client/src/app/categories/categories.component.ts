import { Component, OnInit } from '@angular/core';

// Form.
import {FormBuilder, Validators} from '@angular/forms'

// Http.
import { HttpClient } from '@angular/common/http';


// importing interfaces.
import Category from './category.interface';

// Importing icons.
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

// Angular notifier.
import { NotifierService } from 'angular-notifier';


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
  categories: Category[] = [];

  // Form.
  // Building Form.
  newCategoryForm = this.fb.group({
    name: ['',Validators.required],
    description: ['',[Validators.required] ],
    color: ['#FF8899'],
  });

  // submit.
  onSubmit(){
    console.log('Inside onSubmit function');

    console.log('this.newCategoryForm: ' , this.newCategoryForm);
    // preparing the new category data.
    var newCategory:Category = {
      name: this.newCategoryForm.controls['name'].value.trim(),
      description: this.newCategoryForm.controls['description'].value.trim(),
      color: this.newCategoryForm.controls['color'].value,
      number: 0 //Will ignored by the server.
    };

    this.http.post('category/createCategory',newCategory).subscribe((data:any) => {
      // notifier.
      this.notifierService.notify('success' , 'New Category is successfully added');
      // Reset form with initial values.
      this.newCategoryForm.setValue({
          name: '',
          description: '',
          color: '#FF8899'
      });
      this.newCategoryForm.reset(this.newCategoryForm.value);
      // Refresh.
      this.getCategories();
    })
  }


  // Tables.
  getCategories(){
    console.log('Inside getCategories function');
    this.http.get('category/getCategories').subscribe((data:any) => {
      this.categories = data.categories;
    })
  }

  // Delete.
  deleteCategory(category:any){
    this.http.post('category/removeCategories',[category.number]).subscribe((data:any) => {
      // Refresh.
      this.getCategories();
    })
  }

  // Update.


  // Controls.
  showNewCategoryForm:Boolean = false;

  showCategoryForm(){
    this.showNewCategoryForm = true;
  }

  hideCategoryForm(){
    this.showNewCategoryForm = false;
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private notifierService: NotifierService) {

  }

  ngOnInit() {
    // initalizing categories.
    this.getCategories();
  }

}
