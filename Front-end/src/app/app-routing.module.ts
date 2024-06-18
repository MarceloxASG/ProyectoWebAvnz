import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginUserComponent } from './components/loginUser/loginUser.component';
import { LoginAdminComponent } from './components/loginAdmin/loginAdmin.component';
import { mainUserComponent } from './components/mainUser/mainUser.component';
import { mainAdminComponent } from './components/mainAdmin/mainAdmin.component';
import { registerUserComponent } from './components/registerUser/registerUser.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', component: LoginUserComponent },
  { path: 'registerUser', component: registerUserComponent },
  { path: 'admin', component: LoginAdminComponent },
  { path: 'mainUser', component: mainUserComponent },
  { path: 'mainAdmin', component: mainAdminComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
