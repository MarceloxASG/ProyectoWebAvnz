import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginUserComponent } from './components/loginUser/loginUser.component';
import { LoginAdminComponent } from './components/loginAdmin/loginAdmin.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { mainUserComponent } from './components/mainUser/mainUser.component';
import { mainAdminComponent } from './components/mainAdmin/mainAdmin.component';
import { registerUserComponent } from './components/registerUser/registerUser.component';
import { PostModalComponent } from './components/post-modal/post-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginUserComponent,
    LoginAdminComponent,
    NavmenuComponent,
    FooterComponent,
    mainUserComponent,
    mainAdminComponent,
    registerUserComponent,
    PostModalComponent
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
