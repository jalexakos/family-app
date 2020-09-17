import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews(newsItem,date){
    return this.http.get(`https://newsapi.org/v2/everything?q=${newsItem}&from=${date}&sortBy=publishedAt&apiKey=997c178278f848aeb14ace855491f0cd`)
  }
}
