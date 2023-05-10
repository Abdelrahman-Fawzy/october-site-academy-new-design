import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsDepartmentComponent } from './maps-department.component';

describe('MapsDepartmentComponent', () => {
  let component: MapsDepartmentComponent;
  let fixture: ComponentFixture<MapsDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
