import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/models/menu';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl = 'http://localhost:3000/menu';

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl);
  }

  postMenus(menu: Menu) {
    return this.http.post('http://localhost:3000/menu', menu);
  }


  getMenusById(id:any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/menu/' + id);
  }

  updateMenu(menu:Menu) {
    return this.http.put('http://localhost:3000/menu/' + menu.id, menu);
  }



}
