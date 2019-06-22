import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from 'src/app/modules/pais/pais';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  constructor(private http: HttpClient) {}

  url = environment.host + '/pais';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YW5kZXJzb246YW5kZXJzb24='
    })
  };

  public getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.url, this.httpOptions);
  }

  public deletarPais(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id, this.httpOptions);
  }
}
