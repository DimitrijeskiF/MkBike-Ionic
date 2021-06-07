import { GlobalService } from './../services/global.service';
import { MessagingService } from './../services/messaging.service';
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
  postsPerPage = 2


  constructor(
    private authService: AuthService,
    private router: Router,
    private eventsService: EventsService,
    private userService: UserService,
    private newsService: NewsService,
    private messagingService: MessagingService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.onGetEvents();
    this.onGetNews();
    this.onGetUserName();
    this.requestPermission();
    this.userService.getUserId();
  }


  onSettings() {
    this.router.navigate(['/settings'])
  }

  onGetEvents() {
    this.eventsService.getEvents(this.postsPerPage, 1)
    this.eventsService.getEventsListener()
      .subscribe((eventData: { events: Event[] }) => {
        this.events = eventData.events
      }, async (error) => {
        await this.globalService.handleErrorMessage(error.error.message)
      })
  }

  onDeleteEvent(eventId: string) {
    this.eventsService.deleteEvent(eventId)
      .subscribe(() => {
        this.eventsService.getEvents(2,1);
      })
  }

  onGetNews() {
    this.newsService.getNews(1,1)
    this.newsService.getNewsListener()
      .subscribe((newsData: { news: News[] }) => {
        this.news = newsData.news;
      }, async (error) => {
        await this.globalService.handleErrorMessage(error.error.message)
      })
  }

  onDeleteNews(newsId: string) {
    this.newsService.deleteNews(newsId)
      .subscribe(() => {
        this.newsService.getNews(1,1)
      })
  }

  onGetUserName() {
    this.userService.getProfile()
      .subscribe((userData) => {
        this.username = userData.user.firstName;
        this.role = userData.user.role
      })
  }


  requestPermission() {
    this.messagingService.requestPermission().subscribe()
  }

}
