import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItGraphicDepartmentComponent } from './it-graphic-department.component';

describe('ItGraphicDepartmentComponent', () => {
  let component: ItGraphicDepartmentComponent;
  let fixture: ComponentFixture<ItGraphicDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItGraphicDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItGraphicDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
