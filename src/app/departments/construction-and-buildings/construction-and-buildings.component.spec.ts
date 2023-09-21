import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionAndBuildingsComponent } from './construction-and-buildings.component';

describe('ConstructionAndBuildingsComponent', () => {
  let component: ConstructionAndBuildingsComponent;
  let fixture: ComponentFixture<ConstructionAndBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionAndBuildingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionAndBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
