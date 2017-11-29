import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { GeoListComponent } from './geo-list/geo-list.component';

import { GetListService } from './get-list.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    GeoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GetListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
