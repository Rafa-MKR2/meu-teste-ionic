import { Component } from '@angular/core';
import { NewsApiService } from '../providers/news-api.service';
import {NewsApiType } from './interface/NewsApi'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   public results: NewsApiType | any;

  constructor(private newsService : NewsApiService) {}


  ionViewWillEnter(){
    this.newsService.getAllNews('everything').subscribe(date=>{
      let results: any =  date
      this.results = results;
      
    })
  }


  newsThemeChange(theme: string){
    this.newsService.getNews(theme).subscribe(date=>{
      let results: any =  date
      this.results = results;
      
    })
  }
}
