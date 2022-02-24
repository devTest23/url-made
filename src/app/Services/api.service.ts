import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlShortner } from '../url-shortner/url-short.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'https://url-shortner-mean-api.herokuapp.com';
  constructor(private http: HttpClient) {}

  getUrl(id: string) {
    return this.http.get(`${this.url}/` + id);
  }

  shortUrl(data: UrlShortner) {
    return this.http.post(`${this.url}/shortUrl`, data);
  }
}
