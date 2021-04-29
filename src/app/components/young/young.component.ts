import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-young',
  templateUrl: './young.component.html',
  styleUrls: ['./young.component.scss'],
})
export class YoungComponent implements OnInit {
  price: any;
  constructor(
    private priceService: PriceService
  ) { }

  ngOnInit() {
    this.priceService.getPricesForYoung()
      .subscribe(data => {
        this.price = data.price;
      })
  }

}
