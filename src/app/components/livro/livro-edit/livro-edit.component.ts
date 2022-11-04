import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livros';

@Component({
  selector: 'app-livro-edit',
  templateUrl: './livro-edit.component.html',
  styleUrls: ['./livro-edit.component.css']
})
export class LivroEditComponent implements OnInit {

  livro: Livro;

  constructor() {
    this.livro = new Livro;
   }

  ngOnInit(): void {
  }

}
