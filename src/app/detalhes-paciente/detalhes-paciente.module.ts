import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalhesPacientePage } from './detalhes-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesPacientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalhesPacientePage]
})
export class DetalhesPacientePageModule {}
