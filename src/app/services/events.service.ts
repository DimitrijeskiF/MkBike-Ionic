import { MessagingService } from './messaging.service';
import { map } from 'rxjs/operators';
import { Event } from './../models/event';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  BACKEND_URL = environment.uri;
  events: Event[] = [];
  private eventListener = new Subject<{ events: Event[], eventsCount: number }>();

  constructor(
    private http: HttpClient,
  ) { }


  getEvents(postsPerPage: number, currentPage: number) {
    const queryParams = `?limit=${postsPerPage}&page=${currentPage}`;
    this.http.get<{ events: any, count: number }>(this.BACKEND_URL + '/events' + queryParams)
      .pipe(
        map((eventDate) => {
          return {
            events: eventDate.events.map(event => {
              return {
                id: event._id,
                title: event.title,
                description: event.description,
                date: event.date,
                link: event.link,
                thumbnail: event.thumbnail
              }
            }),
            maxEvents: eventDate.count,
          }
        })
      ).subscribe((transformedData) => {
        this.events = transformedData.events;

        this.eventListener.next({ events: [...this.events], eventsCount: transformedData.maxEvents });
      })
  }

  getEventsListener() {
    return this.eventListener.asObservable();
  }

  addEvent(title: string, description: string, date: Date, link: string, thumbnail: string) {
    const eventData: Event = {
      title: title,
      description: description,
      date: date,
      link: link,
      thumbnail: thumbnail
    }
    return this.http.post(this.BACKEND_URL + '/events', eventData);
  }

  deleteEvent(eventId: string) {
    return this.http.delete(this.BACKEND_URL + `/events/${eventId}`);
  }

}
