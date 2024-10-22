import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JelovniciService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  dohvatiSve(){
    return this.http.get<any>(this.baseUrl + 'jelovnik');
  }

  dohvatiPoId(id: any){
    return this.http.get<any>(this.baseUrl + 'jelovnik/' + id);
  }

  spremiNovog(model: any){
    return this.http.post(this.baseUrl + 'jelovnik', model);
  }

  obrisi(id: number){
    return this.http.delete(this.baseUrl + 'jelovnik/'+id);
  }

  azuriraj(model: any){
    console.log(model);
    return this.http.put(this.baseUrl + 'jelovnik/'+ model.id, model);
  }
}
