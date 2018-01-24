import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Countries } from './countries';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class GetListService {
private Url = 'http://api.geonames.org/countryInfoJSON?username=benten';
  constructor(private _http: Http) {}

  getAll(): Observable<Countries[]> {
    return this._http
    .get(this.Url)
    .map((res: Response) => <Countries[]>res.json().geonames)
    .do(data => console.log(data));
  }

  getCountry(name: string): Observable<Countries> {
    return this.getAll()
    .map((c: Countries[]) => c.find(country => country.countryName === name));
  }

  getAsp() {
    console.log('called');
    return this._http
    .get('http://localhost:5000/api/customers')
    .map(res => res.json())
    .do(data => console.log(data));
  }
}
