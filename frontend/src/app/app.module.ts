import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule, 
         MatSidenavModule,
         MatFormFieldModule,
         MatInputModule,
         MatIconModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatListModule,
         MatExpansionModule,
         MatDialogModule,
         MatSortModule,
         MatTableModule
        } from '@angular/material';
import { NgModule } from '@angular/core';
import {} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { HomeComponent } from './main/home/home.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { recipesmanagerComponent } from './main/recipesmanager/recipesmanager.component';
import { SidenavComponent } from './main/sidenav/sidenav.component';
import { recipesComponent } from './main/recipes/recipes.component';
import { ConfigComponent } from './config/config.component';
import { SearchboxComponent } from './main/searchbox/searchbox.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './main/settings/settings.component';
import { TagfilterComponent } from './main/tagfilter/tagfilter.component';
import { ReceipeDialogComponent } from './main/receipe-dialog/receipe-dialog.component';



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
    ReceipeDialogComponent,

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
    MatDialogModule,
    MatSortModule,
    MatTableModule
  ],
  
  entryComponents: [
    ReceipeDialogComponent
  ],

  providers: [
    MatDatepickerModule,
    ConfigComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
