import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsDepartmentComponent } from './hotels-department.component';

describe('HotelsDepartmentComponent', () => {
  let component: HotelsDepartmentComponent;
  let fixture: ComponentFixture<HotelsDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
