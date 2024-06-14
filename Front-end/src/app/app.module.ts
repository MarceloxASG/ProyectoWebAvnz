import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { loginUserComponent } from './components/loginUser/loginUser.component';
import { loginAdminComponent } from './components/loginAdmin/loginAdmin.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { mainUserComponent } from './components/mainUser/mainUser.component';
import { mainAdminComponent } from './components/mainAdmin/mainAdmin.component';
import { registerUserComponent } from './components/registerUser/registerUser.component';



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
    registerUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
