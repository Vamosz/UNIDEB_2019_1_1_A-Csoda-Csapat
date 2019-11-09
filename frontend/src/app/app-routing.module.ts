import { ReceiptsmanagerComponent } from './main/receiptsmanager/receiptsmanager.component';
import { HomeComponent } from './main/home/home.component';
import { RegisterComponent } from './main/register/register.component';
import { LoginComponent } from './main/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptsComponent } from './main/receipts/receipts.component';


const routes: Routes = [
  {path:"login", component: LoginComponent },
  {path:"register", component: RegisterComponent },
  {path:"home", component: HomeComponent },
  {path:"receiptsmanager", component: ReceiptsmanagerComponent },
  {path:"receipts", component: ReceiptsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
