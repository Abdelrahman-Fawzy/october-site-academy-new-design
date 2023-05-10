import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessDepartmentComponent } from './bussiness-department.component';

describe('BussinessDepartmentComponent', () => {
  let component: BussinessDepartmentComponent;
  let fixture: ComponentFixture<BussinessDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
