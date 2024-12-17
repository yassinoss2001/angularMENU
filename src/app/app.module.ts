import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MenuDetailComponent,  } from './components/menudetail/menudetail.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'menu', loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule) },
  { path: 'detail/:id', loadChildren: () => import('./components/menudetail/menudetail.module').then(m => m.MenudetailModule) },//load it when click on button vue details

  { path: '**', component: NotfoundComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    NotfoundComponent,
    MenuDetailComponent
    

    
  ],
  imports: [
    FormValidationComponent,
    BrowserModule,FormsModule,
    RouterModule.forRoot(routes), HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
