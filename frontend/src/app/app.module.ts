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
         MatListModule
        } from '@angular/material';
import { NgModule } from '@angular/core';
import {} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { HomeComponent } from './main/home/home.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { ReceiptsmanagerComponent } from './main/receiptsmanager/receiptsmanager.component';
import { SidenavComponent } from './main/sidenav/sidenav.component';
import { ReceiptsComponent } from './main/receipts/receipts.component';
import { ConfigComponent } from './config.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ReceiptsmanagerComponent,
    SidenavComponent,
    ReceiptsComponent,
    ConfigComponent,

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
    MatListModule 
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
