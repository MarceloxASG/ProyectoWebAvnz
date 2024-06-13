import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { loginUserComponent } from './components/loginUser/loginUser.component';
import { loginAdminComponent } from './components/loginAdmin/loginAdmin.component';
import { mainUserComponent } from './components/mainUser/mainUser.component';
import { mainAdminComponent } from './components/mainAdmin/mainAdmin.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', component: loginUserComponent },
  { path: 'admin', component: loginAdminComponent },
  { path: 'mainUser', component: mainUserComponent },
  { path: 'mainAdmin', component: mainAdminComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
