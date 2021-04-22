import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  slideOpts = {
    speed: 400
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }


  toPlans(){
    this.router.navigate(['/plans'])
  }
}
