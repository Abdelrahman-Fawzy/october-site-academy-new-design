import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsImagesComponent } from './departments-images.component';

describe('DepartmentsImagesComponent', () => {
  let component: DepartmentsImagesComponent;
  let fixture: ComponentFixture<DepartmentsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
