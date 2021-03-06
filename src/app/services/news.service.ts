import { News } from './../models/news';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  BACKEND_URL = environment.uri;
  news: News[] = [];
  private newsListener = new Subject<{ news: News[], newsCount: number }>()


  constructor(
    private http: HttpClient
  ) { }



  getNews(postsPerPage: number, currentPage: number) {
    const queryParams = `?limit=${postsPerPage}&page=${currentPage}`;
    console.log(queryParams);
    this.http.get<{ news: any, count: number }>(this.BACKEND_URL + '/news' + queryParams)
      .pipe(
        map((newsData) => {
          return {
            news: newsData.news.map(news => {
              return {
                id: news._id,
                title: news.title,
                img: news.img,
                content: news.content
              }
            }),
            maxNews: newsData.count
          }
        })
      ).subscribe((transformedData) => {
        this.news = transformedData.news;
        this.newsListener.next({ news: [...this.news], newsCount: transformedData.maxNews });
      })
  }

  getNewsListener() {
    return this.newsListener.asObservable()
  }

  addNews(title: string, content: string, img: string) {
    const newsData: News = {
      title: title,
      content: content,
      img: img
    }

    return this.http.post(this.BACKEND_URL + '/news', newsData);
  }

  deleteNews(newsId: string) {
    return this.http.delete(this.BACKEND_URL + `/news/${newsId}`);
  }
}
