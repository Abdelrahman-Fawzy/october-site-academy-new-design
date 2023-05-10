import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyingSystemComponent } from './studying-system.component';

describe('StudyingSystemComponent', () => {
  let component: StudyingSystemComponent;
  let fixture: ComponentFixture<StudyingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyingSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
