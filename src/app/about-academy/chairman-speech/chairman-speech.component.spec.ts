import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanSpeechComponent } from './chairman-speech.component';

describe('ChairmanSpeechComponent', () => {
  let component: ChairmanSpeechComponent;
  let fixture: ComponentFixture<ChairmanSpeechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChairmanSpeechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairmanSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
