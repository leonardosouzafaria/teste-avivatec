import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacoteEmprestimoService {

  constructor(private http: HttpClient) { }

  getPacotesEmprestimo() {
    return this.http.get('https://apifront.azurewebsites.net/api/front');
  }
}
