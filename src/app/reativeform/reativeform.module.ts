import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Route, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDateRangePicker,
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatHeaderCell, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
const routes: Route[] = [
  {
    path: '',
    component: ReactiveformComponent,
  },


];

@NgModule({
  declarations: [ReactiveformComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    
  ],
})
export class ReativeformModule {}
