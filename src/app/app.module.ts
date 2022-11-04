import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { LivroModule } from './components/livro/livro.module';
import { MenuModule } from './components/menu/menu.module';
import { HttpClientModule } from '@angular/common/http'
import { MensagemModule } from './components/mensagem/mensagem.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule/*,
    LivroModule*/,
    HomeModule,
    HttpClientModule,
    MensagemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
