import { Component, OnInit } from '@angular/core';

// Importing Form Stuff
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {


  // Creating form for data passed in
  newsData = new FormGroup({
    newsItem: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  })

  usingAPI(){
    let newsItem = this.newsData.value.newsItem;
    let date = this.newsData.value.date;

    fetch(`https://newsapi.org/v2/everything?q=${newsItem}&from=${date}&sortBy=publishedAt&apiKey=5aae81720b2b420680af2170114c0bad`, 
    {
      headers: {
        // 'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        "Access-Control-Request-Headers": "https://alexakos-family-app.web.app",
        'Access-Control-Allow-Origin': "https://alexakos-family-app.web.app"
      },
      method: 'GET', // GET, POST, PUT, DELETE
      // mode: 'no-cors' // the most important option
    }
  ).then(response => response.json())
      .then(rawData => 
        {
      console.log(rawData);
      // Creating article objects
      let article1 = {
        title: rawData.articles[0].title,
        url: rawData.articles[0].url,
        author: rawData.articles[0].author
      };

      let article2 = {
        title: rawData.articles[1].title,
        url: rawData.articles[1].url,
        author: rawData.articles[1].author
      };

      let article3 = {
        title: rawData.articles[2].title,
        url: rawData.articles[2].url,
        author: rawData.articles[2].author
      };

      // Adding article info to HTML
      document.querySelector('#article-1-header').innerHTML = "Article One";
      document.querySelector("#article-1-title").innerHTML = article1.title;
      document.querySelector('#article-1-url')['href'] = article1.url;
      document.querySelector('#article-1-author').innerHTML = article1.author;

      document.querySelector('#article-2-header').innerHTML = "Article Two";
      document.querySelector("#article-2-title").innerHTML = article2.title;
      document.querySelector('#article-2-url')['href'] = article2.url;
      document.querySelector('#article-2-author').innerHTML = article2.author;

      document.querySelector('#article-3-header').innerHTML = "Article Three";
      document.querySelector("#article-3-title").innerHTML = article3.title;
      document.querySelector('#article-3-url')['href'] = article3.url;
      document.querySelector('#article-3-author').innerHTML = article3.author; 

      // Reset Error Message
      document.querySelector('#errorMsg').innerHTML = "";

        })
.catch(err => {
  console.log(err);

  document.querySelector('#errorMsg').innerHTML = "Sorry, something seems to have gone wrong. Please try again."
  
  document.querySelector('#article-1-header').innerHTML = "";
  document.querySelector("#article-1-title").innerHTML = "";
  document.querySelector('#article-1-url').innerHTML = "";
  document.querySelector('#article-1-author').innerHTML = "";

  document.querySelector('#article-2-header').innerHTML = "";
  document.querySelector("#article-2-title").innerHTML = "";
  document.querySelector('#article-2-url').innerHTML = "";
  document.querySelector('#article-2-author').innerHTML = "";

  document.querySelector('#article-3-header').innerHTML = "";
  document.querySelector("#article-3-title").innerHTML = "";
  document.querySelector('#article-3-url').innerHTML = "";
  document.querySelector('#article-3-author').innerHTML = "";

});
  }

  constructor() { }

  ngOnInit(): void {
  }

}


    //   { headers: new Headers({
    //     'Access-Control-Allow-Origin': "https://alexakos-family-app.web.app"
    //   }),
    //   credentials: "include",
    //   mode:"no-cors",
    // }