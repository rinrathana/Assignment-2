import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrivenComponent } from './driven/driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [DrivenComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [DrivenComponent]
})
export class DrivenFormModule { }
