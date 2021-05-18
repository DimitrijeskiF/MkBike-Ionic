import { News } from './../models/news';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  BACKEND_URL = environment.uri;


  constructor(
    private http: HttpClient
  ) { }



  getNews() {
    return this.http.get<{ news: any }>(this.BACKEND_URL + '/news')
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
            })
          }
        })
      ).toPromise();
  }

  addNews(title:string, content:string, img:string) {
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
