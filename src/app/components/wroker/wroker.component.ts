import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-wroker',
  templateUrl: './wroker.component.html',
  styleUrls: ['./wroker.component.scss'],
})
export class WrokerComponent implements OnInit {

  price: any;
  constructor(
    private priceService: PriceService
  ) { }

  ngOnInit(): void {
    this.priceService.getPricesForWorker()
      .subscribe(data => {
        this.price = data.price;
      })
  }
}
