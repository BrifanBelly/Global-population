import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoCountryComponent } from './geo-country.component';

describe('GeoCountryComponent', () => {
  let component: GeoCountryComponent;
  let fixture: ComponentFixture<GeoCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
