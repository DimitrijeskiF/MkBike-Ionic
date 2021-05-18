import { MapService } from './../../services/map.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-point',
  templateUrl: './add-point.component.html',
  styleUrls: ['./add-point.component.scss'],
})
export class AddPointComponent implements OnInit {

  constructor(
    private mapService: MapService
  ) { }

  ngOnInit() {}


  onAddPoint(form: NgForm){
    this.mapService.addPoint(form.value.address)
      .subscribe();
  }

}
