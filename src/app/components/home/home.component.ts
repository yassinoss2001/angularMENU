import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus: Menu[] = []; // Array to store menus fetched from the server

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getMenus(); // Fetch the menus when the component is initialized
  }

  // Fetch all menus from the server
  getMenus(): void {
    this.crudService.getMenus().subscribe(
      (data: Menu[]) => {
        this.menus = data; // Store the fetched menus in the menus array
      },
      (error) => {
        console.error('Error fetching menus', error);
      }
    );
  }
}
