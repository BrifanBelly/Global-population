import { Component, OnInit } from '@angular/core';
import { GetListService } from '../get-list.service';
import { Countries } from '../countries';

@Component({
  templateUrl: './geo-list.component.html',
  styleUrls: ['./geo-list.component.css']
})
export class GeoListComponent implements OnInit {
  countries: Countries[];
  error: string;
  temp_countries: Countries[];
  constructor(private _getGeo: GetListService) { }

  ngOnInit() {
    /*
    this._getGeo.getAsp()
    .subscribe(data => console.log(data));
    */
   
   this._getGeo.getAll()
   .subscribe(
     res => {
       this.temp_countries = res;
       this.setCountries(res);
      },
     err => this.error = err
   );
   if (this.error) {
     console.log(this.error);
   }
  }

  setCountries(data: Countries[]): void {
    this.countries = data;
  }

  filterBy(x: string) {
    switch (x) {
      case 'all': this.setCountries(this.temp_countries);
      break;
      case 'europe':
      this.countries = this.countries.filter(c => c.continentName.toLocaleLowerCase().includes(x)) ;
      break;
      case 'pop': this.countries = this.countries.filter(c => parseInt( c.population , 10) > 10000);
      break;
    }

  }
}
