import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Livro } from 'src/app/models/livros';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private httpClient:HttpClient) {
      this.url = 'https://localhost:44332/api/livros'
   }

   private readonly url: string;

   getAll(): Observable<Livro[]>{
      return this.httpClient.get<Livro[]>(this.url);
   }

   post(livro: Livro): Observable<Livro>{
    return this.httpClient.post<Livro>(this.url, livro);
   }

}
