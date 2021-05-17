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
    this.onGetUserName();
    this.onGetEvents();
    this.onGetNews();
  }


  onSettings() {
    this.router.navigate(['/settings'])
  }

  async onGetEvents() {
    this.events = await (await (this.eventsService.getEvents())).events
  }

  onDeleteEvent(eventId: string) {
    this.eventsService.deleteEvent(eventId)
      .subscribe(() => {
        this.onGetEvents();
      })
  }

  async onGetNews() {
    this.news = await (await (this.newsService.getNews())).news;
  }

  onDeleteNews(newsId: string) {
    this.newsService.deleteNews(newsId)
      .subscribe(() => {
          this.onGetNews();
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
