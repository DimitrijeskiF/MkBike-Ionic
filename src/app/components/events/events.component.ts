import { Router } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { UserService } from 'src/app/services/user.service';
import { Event } from '../../models/event';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {

  events: Event[] = [];
  role;
  totalEvents = 0;
  postsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];

  constructor(
    private eventsService: EventsService,
    private userService: UserService,
    private globalService: GlobalService,
    private router: Router

  ) { }

  ngOnInit() {
    this.onGetEvents();
    this.onGetUserRole();
  }



  onGetEvents() {
    this.eventsService.getEvents(this.postsPerPage, this.currentPage);
    this.eventsService.getEventsListener()
      .subscribe((eventData: { events: Event[], eventsCount: number }) => {
        this.events = eventData.events,
          this.totalEvents = eventData.eventsCount;
      }, async (error) => {
        await this.globalService.handleErrorMessage(error.error.message)
      })
  }

  onChangePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1
    this.postsPerPage = pageData.pageSize
    this.eventsService.getEvents(this.postsPerPage, this.currentPage)
  }

  onGetUserRole() {
    this.userService.getProfile()
      .subscribe((userData) => {
        this.role = userData.user.role
        console.log(this.role);

      })
  }

  onDeleteEvent(eventId: string) {
    this.eventsService.deleteEvent(eventId)
      .subscribe(() => {
        this.eventsService.getEvents(this.postsPerPage, this.currentPage);
      })
  }

  toTabs() {
    this.eventsService.getEvents(2, 1)
    this.router.navigate(['/tabs'])
  }
}
