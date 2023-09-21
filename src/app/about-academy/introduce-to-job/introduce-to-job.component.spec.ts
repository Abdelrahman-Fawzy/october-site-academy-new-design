import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceToJobComponent } from './introduce-to-job.component';

describe('IntroduceToJobComponent', () => {
  let component: IntroduceToJobComponent;
  let fixture: ComponentFixture<IntroduceToJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduceToJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceToJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
