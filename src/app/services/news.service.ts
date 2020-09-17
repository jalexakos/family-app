import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews(newsItem,date){
    return this.http.get(`https://gnews.io/api/v4/search?q=${newsItem}&token=d6ca3201d823f8e049972ab321f1c5b2`)
  }
}
