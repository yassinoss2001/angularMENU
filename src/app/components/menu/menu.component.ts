import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';  
import { Menu } from 'src/app/models/menu'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu = { 
    id: 0, 
    name: '', 
    ingredients: '', 
    price: 0, 
    imageUrl: '', 
    nb_likes: 0 
  }; // Initialize the menu object
  menus: Menu[] = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getMenus(); // Fetch the menu items when the component initializes
  }

  // Fetch all menus
  getMenus(): void {
    this.crudService.getMenus().subscribe(
      (data: Menu[]) => {
        this.menus = data; // Store the fetched menus
      },
      (error) => {
        console.error('Error fetching menus', error);
      }
    );
  }

  // Handle form submit
  onSubmit(form: any): void {
    if (form.valid) {
      this.addMenu(); // If the form is valid, add the menu
    }
  }

  // Add a new menu item
  addMenu(): void {
    this.crudService.postMenus(this.menu).subscribe(
      (data) => {
        console.log('Menu added successfully:', data);
        this.getMenus(); // Reload the list of menus after adding
        this.menu = { // Reset the form after submitting
          id: 0, 
          name: '', 
          ingredients: '', 
          price: 0, 
          imageUrl: '', 
          nb_likes: 0 
        };
      },
      (error) => {
        console.error('Error adding menu', error);
      }
    );
  }

}
