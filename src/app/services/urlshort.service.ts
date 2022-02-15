import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from  '@angular/common/http';
import { UrlShort } from '../model/urlshort.model';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Origin': 'http://localhost:5000'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UrlshortService {

  private BASE = 'http://localhost:5000/api/urls'
  
  constructor(private http: HttpClient) { }

  getUrl(key : string) {
    return this.http.get<UrlShort>(this.BASE + "/" + key, httpOptions).toPromise();
  }

  insertUrl(url : string) {
    return this.http.post<UrlShort>(this.BASE + "?url=" + url, httpOptions).toPromise();
  }
}
