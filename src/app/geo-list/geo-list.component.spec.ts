import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoListComponent } from './geo-list.component';

describe('GeoListComponent', () => {
  let component: GeoListComponent;
  let fixture: ComponentFixture<GeoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
