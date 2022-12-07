import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private BASE_URL =  'https://newsapi.org'
  private api_key = '8da200576c414985a2e78d67d1dfc6e9'

  constructor( private http: HttpClient) { }

  getAllNews(theme: string){
  return  this.http.get(`${this.BASE_URL}/v2/everything?domains=wsj.com&apiKey=${this.api_key}`)
  }

  getNews(theme: string){
    return  this.http.get(`${this.BASE_URL}/v2/everything?q=${theme}&from=2022-12-06&to=2022-12-06&sortBy=popularity&apiKey=${this.api_key}`)
    }
}
