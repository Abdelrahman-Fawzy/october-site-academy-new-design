import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingAndAnalysisComponent } from './trading-and-analysis.component';

describe('TradingAndAnalysisComponent', () => {
  let component: TradingAndAnalysisComponent;
  let fixture: ComponentFixture<TradingAndAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingAndAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingAndAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
