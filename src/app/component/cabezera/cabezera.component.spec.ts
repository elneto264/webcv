import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CabezeraComponent } from './cabezera.component';

describe('CabezeraComponent', () => {
  let component: CabezeraComponent;
  let fixture: ComponentFixture<CabezeraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
