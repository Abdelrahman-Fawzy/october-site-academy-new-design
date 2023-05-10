import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolDepartmentComponent } from './petrol-department.component';

describe('PetrolDepartmentComponent', () => {
  let component: PetrolDepartmentComponent;
  let fixture: ComponentFixture<PetrolDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrolDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetrolDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
