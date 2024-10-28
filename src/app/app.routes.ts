import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:"operaciones", component:OperacionesComponent}
];
