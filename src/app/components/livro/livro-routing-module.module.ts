import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LivroIndexComponent } from './livro-index/livro-index.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';

const routes: Routes = [
  {path: "", component: LivroIndexComponent},
  {path: "livros-create", component: LivroCreateComponent},
  {path: "**", component: HomeComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModuleModule { }
