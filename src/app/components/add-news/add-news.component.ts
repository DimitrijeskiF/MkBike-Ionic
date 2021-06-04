import { Router } from '@angular/router';
import { MessagingService } from './../../services/messaging.service';
import { NewsService } from './../../services/news.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss'],
})
export class AddNewsComponent implements OnInit {

  constructor(
    private newsService: NewsService,
    private msgService: MessagingService,
    private router: Router
  ) { }

  ngOnInit() {}


  onAddNews(form: NgForm) {
    this.newsService.addNews(
      form.value.title,
      form.value.content,
      form.value.img
    ).subscribe(() => {
      // this.newsService.getNews();
      this.msgService.sendNewsMsg();
      this.router.navigate(['/tabs']);
    })
  }
}
