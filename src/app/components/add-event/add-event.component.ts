import { MessagingService } from './../../services/messaging.service';
import { EventsService } from './../../services/events.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {

  constructor(
    private eventService: EventsService,
    private messagingService: MessagingService
  ) { }

  ngOnInit() { }

  onAddEvent(form: NgForm) {
      this.eventService.addEvent(
        form.value.title,
        form.value.description,
        form.value.date,
        form.value.link,
        form.value.thumbnail
      ).subscribe(() => {
        this.eventService.getEvents();
        this.messagingService.sendMsg();
      })
}
}
