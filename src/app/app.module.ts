import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { HeaderModule } from './header/header.module';
import { DrivenComponent } from './driven-form/driven/driven.component';
import { DrivenFormModule } from './driven-form/driven-form.module';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },

  {
    path: 'form',
    title: 'Home',
  },
  {
    path: 'form-two',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HeaderModule,
    DrivenFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
