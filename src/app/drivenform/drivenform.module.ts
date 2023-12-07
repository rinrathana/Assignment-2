import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrivenComponent } from './driven/driven.component';
import { Route, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const routes: Route[] = [
{
  path: '',
  component: DrivenComponent
}
]

@NgModule({
  declarations: [DrivenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class DrivenformModule { }
