import { PageEvent } from '@angular/material/paginator';
import { News } from './../../models/news';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  news: News[] = [];
  username;
  role;
  postsPerPage = 2
  totalNews = 0;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];

  constructor(
    private router: Router,
    private userService: UserService,
    private newsService: NewsService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.onGetNews();
    this.onGetUserRole();
  }


  onGetNews() {
    this.newsService.getNews(this.postsPerPage, this.currentPage)
    this.newsService.getNewsListener()
      .subscribe((newsData: { news: News[], newsCount: number }) => {
        this.news = newsData.news;
        this.totalNews = newsData.newsCount;
      }, async (error) => {
        await this.globalService.handleErrorMessage(error.error.message)
      })
  }

  onChangePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.newsService.getNews(this.postsPerPage, this.currentPage)
  }


  onGetUserRole() {
    this.userService.getProfile()
      .subscribe((userData) => {
        this.role = userData.user.role
      })
  }

  onDeleteNews(newsId: string) {
    this.newsService.deleteNews(newsId)
      .subscribe(() => {
        // this.newsService.getNews(1, 1)
      })
  }

  toTabs() {
    this.newsService.getNews(1, 1)
    this.router.navigate(['/tabs'])
  }

}
