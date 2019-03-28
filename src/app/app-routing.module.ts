import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'reset', loadChildren: './reset/reset.module#ResetPageModule' },
  { path: 'cadastrar', loadChildren: './cadastrar/cadastrar.module#CadastrarPageModule' },
  { path: 'detalhes-paciente', loadChildren: './detalhes-paciente/detalhes-paciente.module#DetalhesPacientePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
