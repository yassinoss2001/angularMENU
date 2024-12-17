import { Component, Input } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.component.html',
  styleUrls: ['./menudetail.component.css']
})
export class MenuDetailComponent {
  @Input() menu!: Menu;  // Receive the menu data as input
}
