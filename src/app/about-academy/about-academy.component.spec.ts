import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAcademyComponent } from './about-academy.component';

describe('AboutAcademyComponent', () => {
  let component: AboutAcademyComponent;
  let fixture: ComponentFixture<AboutAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
