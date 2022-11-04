import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
import { LivroIndexComponent } from './components/livro/livro-index/livro-index.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "livros", loadChildren: () => import('./components/livro/livro.module').then(l => l.LivroModule)},
  {path: "**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
