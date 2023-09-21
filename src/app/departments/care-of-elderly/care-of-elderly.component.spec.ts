import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareOfElderlyComponent } from './care-of-elderly.component';

describe('CareOfElderlyComponent', () => {
  let component: CareOfElderlyComponent;
  let fixture: ComponentFixture<CareOfElderlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareOfElderlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareOfElderlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
