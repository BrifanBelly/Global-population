import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Countries } from './countries';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class GetListService {
country: Countries[] = [
  {
    'countryName' : 'butan',
    'south': '40002',
    'north': '3344',
    'continentName': 'Europe',
    'capital': 'nfif',
    'population': '1000'
  }
];
private Url = 'http://api.geonames.org/countryInfoJSON?username=benten';
  constructor(private _http: Http) {}

  getAll(): Observable<Countries[]> {
    return this._http
    .get(this.Url)
    .map((res: Response) => <Countries[]>res.json().geonames)
    .do(data => console.log(data));
  }
}
