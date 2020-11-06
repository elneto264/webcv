import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnadComponent } from './fnad.component';

describe('FnadComponent', () => {
  let component: FnadComponent;
  let fixture: ComponentFixture<FnadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
