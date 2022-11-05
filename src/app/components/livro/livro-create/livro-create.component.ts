import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livros';
import { LivroService } from 'src/app/services/livro/livro.service';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  livro: Livro;

  constructor(private mensagemService: MensagemService, private livroService: LivroService,private router: Router) {
    this.livro = new Livro;
   }

  ngOnInit(): void {
  }
/*adfafafadff/*/
  salvar(){
    console.log(this.livro)
    this.livroService.post(this.livro).pipe(take(1)).subscribe({next: livro => this.handleResponseOk(livro),
       error: erro => this.handleResponseError(erro)})

  }

  handleResponseOk(livros: Livro): void{
    this.mensagemService.set("Livros adicionados com sucesso")
    this.voltar();
  }

  handleResponseError(erro: any){

  }
  

  voltar(){
    this.router.navigate(["livro-index"])
  }

  testar(){
    
  }
}
