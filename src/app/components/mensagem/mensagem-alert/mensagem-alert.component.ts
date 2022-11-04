import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';

@Component({
  selector: 'app-mensagem-alert',
  templateUrl: './mensagem-alert.component.html',
  styleUrls: ['./mensagem-alert.component.css']
})
export class MensagemAlertComponent implements OnInit {

  mostrar:boolean;
  mensagem:string;
  
  constructor(public mensagemService: MensagemService) { 
    this.mostrar=false;
    this.mensagem='';
  }

  ngOnInit(): void {

  }

  mudar(){
    this.mostrar = !this.mostrar;
  }

  fechar(){
    this.mensagemService.limpar();
  }


}
