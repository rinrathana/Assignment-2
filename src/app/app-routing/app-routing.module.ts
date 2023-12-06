import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'reactiveform',
    loadChildren: () => import('../reativeform/reativeform.module').then(m => m.ReativeformModule)
  },
  {
    path: 'drivenform',
    loadChildren: () => import('../drivenform/drivenform.module').then(m => m.DrivenformModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false}),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
