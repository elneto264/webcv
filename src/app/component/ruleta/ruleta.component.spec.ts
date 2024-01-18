import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RuletaComponent } from './ruleta.component';

describe('RuletaComponent', () => {
  let component: RuletaComponent;
  let fixture: ComponentFixture<RuletaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RuletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
