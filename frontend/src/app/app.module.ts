import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule,
  MatDialogModule,
  MatSortModule,
  MatTableModule,
  MatSnackBar,
  MatSnackBarContainer,
  MatSnackBarModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { HomeComponent } from './main/home/home.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { recipesmanagerComponent } from './main/recipesmanager/recipesmanager.component';
import { SidenavComponent } from './main/sidenav/sidenav.component';
import { recipesComponent } from './main/recipes/recipes.component';
import { ConfigComponent } from './config/config.component';
import { SearchboxComponent } from './main/searchbox/searchbox.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './main/settings/settings.component';
import { TagfilterComponent } from './main/tagfilter/tagfilter.component';
import { RecipelistComponent } from './main/recipelist/recipelist.component';
import { RecipeDialogComponent } from './main/recipe-dialog/recipe-dialog.component';
import { RecipeService } from './service/recipeservice/recipe.service';
import { FormsModule } from '@angular/forms';
import { RecipeDialogCreateComponent } from './main/recipe-dialog-create/recipe-dialog-create.component';
import { RecipeDialogEditComponent } from './main/recipe-dialog-edit/recipe-dialog-edit.component';
import { RecipeDialogDeleteComponent } from './main/recipe-dialog-delete/recipe-dialog-delete.component';
import { RecipeComponent } from './main/recipe/recipe.component';
import { UserService } from './service/UserService/user.service';
import { AuthService } from './service/authservice/auth.service';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    recipesmanagerComponent,
    SidenavComponent,
    recipesComponent,
    ConfigComponent,
    SearchboxComponent,
    WelcomeComponent,
    SettingsComponent,
    TagfilterComponent,
    RecipelistComponent,
    RecipeDialogComponent,
    RecipeDialogCreateComponent,
    RecipeDialogEditComponent,
    RecipeDialogDeleteComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatListModule,
    HttpClientModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    MatSnackBarModule,
    JwtModule
  ],

  entryComponents: [
    RecipeDialogCreateComponent,
    RecipeDialogComponent,
    RecipeDialogEditComponent,
    RecipeDialogDeleteComponent,
    MatSnackBarContainer
  ],

  providers: [
    MatDatepickerModule,
    ConfigComponent,
    RecipeService,
    UserService,
    AuthService,
    MatSnackBar,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
