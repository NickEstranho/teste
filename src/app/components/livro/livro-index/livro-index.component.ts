import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livros';
import { LivroService } from 'src/app/services/livro/livro.service';

@Component({
  selector: 'app-livro-index',
  templateUrl: './livro-index.component.html',
  styleUrls: ['./livro-index.component.css']
})
export class LivroIndexComponent implements OnInit {

  Livros: Livro[];

  constructor(private livroService:LivroService, private router:Router) {
    this.Livros = new Array<Livro>();
   }

  ngOnInit(): void {
  }

  pesquisar():void{
    const endpoint = 'https://localhost:44332/api/livros'
    this.livroService.getAll()
      .subscribe(livros => {
        this.Livros = livros;
        console.log(this.Livros)
        });
  }

  novo():void{
    this.router.navigate(["/livros/livros-create"])
    console.log("novo")
  }

}
