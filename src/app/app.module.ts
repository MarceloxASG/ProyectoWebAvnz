import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { loginUserComponent } from './components/loginUser/loginUser.component';
import { loginAdminComponent } from './components/loginAdmin/loginAdmin.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { mainUserComponent } from './components/mainUser/mainUser.component';
import { mainAdminComponent } from './components/mainAdmin/mainAdmin.component';
import { Pagina5Component } from './components/pagina5/pagina5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    loginUserComponent,
    loginAdminComponent,
    NavmenuComponent,
    FooterComponent,
    mainUserComponent,
    mainAdminComponent,
    Pagina5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
