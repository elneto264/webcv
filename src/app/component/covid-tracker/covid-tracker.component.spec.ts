import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CovidTrackerComponent } from './covid-tracker.component';

describe('CovidTrackerComponent', () => {
  let component: CovidTrackerComponent;
  let fixture: ComponentFixture<CovidTrackerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
