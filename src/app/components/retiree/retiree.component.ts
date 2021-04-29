import { PriceService } from './../../services/price.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retiree',
  templateUrl: './retiree.component.html',
  styleUrls: ['./retiree.component.scss'],
})
export class RetireeComponent implements OnInit {

  price: any;
  constructor(
    private priceService: PriceService
  ) { }

  ngOnInit(): void {
    this.priceService.getPricesForRetiree()
      .subscribe(data => {
        this.price = data.price;
      })
  }

}
