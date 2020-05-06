import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaterialModule} from '../material/material.module'
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [{path: '', component: LoginPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes), MaterialModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
