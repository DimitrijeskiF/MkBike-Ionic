import { map } from 'rxjs/operators';
import { Event } from './../models/event';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  BACKEND_URL = environment.uri;


  constructor(
    private http: HttpClient
  ) { }


  getEvents() {
   return this.http.get<{ events: any }>(this.BACKEND_URL + '/events')
      .pipe(
        map((eventDate) => {
          return {
            events: eventDate.events.map(event => {
              return {
                title: event.title,
                description: event.description,
                date: event.date,
                link: event.link,
                thumbnail: event.thumbnail
              }
            })
          }
        })
      ).toPromise()
  }
}
