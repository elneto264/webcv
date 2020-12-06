import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobtestComponent } from './jobtest.component';

describe('JobtestComponent', () => {
  let component: JobtestComponent;
  let fixture: ComponentFixture<JobtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
