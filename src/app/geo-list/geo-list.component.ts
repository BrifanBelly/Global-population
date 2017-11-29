import { Component, OnInit } from '@angular/core';
import { GetListService } from '../get-list.service';
import { Countries } from '../countries';

@Component({
  selector: 'app-geo-list',
  templateUrl: './geo-list.component.html',
  styleUrls: ['./geo-list.component.css']
})
export class GeoListComponent implements OnInit {
  countries: Countries[];
  error: string;
  constructor(private _getGeo: GetListService) { }

  ngOnInit() {
   this._getGeo.getAll()
   .subscribe(
     res => this.setCountries(res),
     err => this.error = err
   );
   if (this.error) {
     console.log(this.error);
   }
  }

  setCountries(data: Countries[]): void {
    this.countries = data;
  }
}
