import { recipesmanagerComponent } from './main/recipesmanager/recipesmanager.component';
import { HomeComponent } from './main/home/home.component';
import { RegisterComponent } from './main/register/register.component';
import { LoginComponent } from './main/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { recipesComponent } from './main/recipes/recipes.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { SettingsComponent } from './main/settings/settings.component';


const routes: Routes = [
  {path:"", component: WelcomeComponent },
  {path:"login", component: LoginComponent },
  {path:"register", component: RegisterComponent },
  {path:"home", component: HomeComponent },
  {path:"recipesmanager", component: recipesmanagerComponent },
  {path:"recipes", component: recipesComponent },
  {path:"profile", component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
