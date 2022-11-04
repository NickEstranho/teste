import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroIndexComponent } from './livro-index/livro-index.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LivroEditComponent } from './livro-edit/livro-edit.component';
import { LivroRoutingModuleModule } from './livro-routing-module.module';




@NgModule({
  declarations: [
    LivroIndexComponent,
    LivroCreateComponent,
    LivroEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LivroRoutingModuleModule
  ],
  exports: [
    LivroIndexComponent
  ]
})
export class LivroModule { }
