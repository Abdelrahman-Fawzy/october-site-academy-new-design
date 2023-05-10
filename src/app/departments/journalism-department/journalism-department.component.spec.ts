import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalismDepartmentComponent } from './journalism-department.component';

describe('JournalismDepartmentComponent', () => {
  let component: JournalismDepartmentComponent;
  let fixture: ComponentFixture<JournalismDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalismDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalismDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
