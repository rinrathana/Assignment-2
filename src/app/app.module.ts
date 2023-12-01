import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { CreateformComponent } from './createform/createform.component';
import { HomeComponent } from './home/home.component';
import { Createform2Component } from './createform2/createform2.component';

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
    component: CreateformComponent,
    title: 'Home',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateformComponent,
    HomeComponent,
    Createform2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
