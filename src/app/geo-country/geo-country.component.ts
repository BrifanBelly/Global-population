import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute } from '@angular/router';

import { Countries } from '../countries';
import { GetListService } from '../get-list.service';

@Component({
  selector: 'app-geo-country',
  templateUrl: './geo-country.component.html',
  styleUrls: ['./geo-country.component.css']
})
export class GeoCountryComponent implements OnInit {
  country: Countries;
  error: string;
  constructor(private _route: ActivatedRoute, private _router: Router, private _getService: GetListService) { }

  ngOnInit() {
    const params: string = this._route.snapshot.paramMap.get('name');
    this._getService.getCountry(params)
    .subscribe(
      data => this.country = data,
      err => this.error = err
    );
  }



}
