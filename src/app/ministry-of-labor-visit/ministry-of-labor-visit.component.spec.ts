import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryOfLaborVisitComponent } from './ministry-of-labor-visit.component';

describe('MinistryOfLaborVisitComponent', () => {
  let component: MinistryOfLaborVisitComponent;
  let fixture: ComponentFixture<MinistryOfLaborVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryOfLaborVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryOfLaborVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
