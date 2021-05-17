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

  deleteNews(newsId: string) {
    return this.http.delete(this.BACKEND_URL + `/news/${newsId}`);
  }
}
