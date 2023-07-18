import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OperationsComponent } from './components/operations/operations.component';

const routes: Routes = [
  { path: 'operations', component: OperationsComponent }, // Operations route
  { path: 'home', component: HomeComponent }, // Home route
  { path: '**', redirectTo: '/operations' }, // In case route parameters do not match;
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
