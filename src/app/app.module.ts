import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { GeoListComponent } from './geo-list/geo-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GeoCountryComponent } from './geo-country/geo-country.component';

import { GetListService } from './get-list.service';
import { ZippyComponent } from './zippy/zippy.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    GeoListComponent,
    WelcomeComponent,
    GeoCountryComponent,
    ZippyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {'path': 'welcome', 'component': ZippyComponent},
        {'path': 'country', 'component': GeoListComponent},
        {'path': 'country/:name', 'component': GeoCountryComponent},
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      ]
    )
  ],
  providers: [GetListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
