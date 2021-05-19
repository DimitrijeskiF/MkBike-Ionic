import { NewsService } from './../services/news.service';
import { UserService } from './../services/user.service';
import { EventsService } from './../services/events.service';
import { Event } from './../models/event';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  events: Event[] = [];
  news: News[] = [];
  username;
  role;

  constructor(
    private authService: AuthService,
    private router: Router,
    private eventsService: EventsService,
    private userService: UserService,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.onGetEvents();
    this.onGetNews();
    this.onGetUserName();

  }


  onSettings() {
    this.router.navigate(['/settings'])
  }

  onGetEvents() {
    this.eventsService.getEvents()
    this.eventsService.getEventsListener()
      .subscribe((eventData: { events: Event[] }) => {
        this.events = eventData.events
      })
  }

  onDeleteEvent(eventId: string) {
    this.eventsService.deleteEvent(eventId)
      .subscribe(() => {
        this.eventsService.getEvents();
      })
  }

  onGetNews() {
    this.newsService.getNews()
    this.newsService.getNewsListener()
      .subscribe((newsData: { news: News[] }) => {
        this.news = newsData.news;
      })
  }

  onDeleteNews(newsId: string) {
    this.newsService.deleteNews(newsId)
      .subscribe(() => {
        this.newsService.getNews()
      })
  }

  onGetUserName() {
    this.userService.getProfile()
      .subscribe((userData) => {
        this.username = userData.user.firstName;
        this.role = userData.user.role
      })
  }

}
