import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JelaService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  dohvatiSve(){
    return this.http.get<any>(this.baseUrl + 'jelo');
  }
  
  dohvatiPoId(id: any){
    return this.http.get<any>(this.baseUrl + 'jelo/' + id);
  }

  spremiNovog(model: any){
    return this.http.post(this.baseUrl + 'jelo', model);
  }

  obrisi(id: number){
    return this.http.delete(this.baseUrl + 'jelo/'+id);
  }

  azuriraj(model: any){
    return this.http.put(this.baseUrl + 'jelo/'+ model.id, model);
  }
}
