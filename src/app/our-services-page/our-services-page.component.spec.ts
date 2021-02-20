import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesPageComponent } from './our-services-page.component';

describe('OurServicesPageComponent', () => {
  let component: OurServicesPageComponent;
  let fixture: ComponentFixture<OurServicesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurServicesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
