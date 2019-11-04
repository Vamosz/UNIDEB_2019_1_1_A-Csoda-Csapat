import { ReceiptsmanagerComponent } from './receiptsmanager/receiptsmanager.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptsComponent } from './receipts/receipts.component';


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
