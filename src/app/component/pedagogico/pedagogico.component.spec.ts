import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PedagogicoComponent } from './pedagogico.component';

describe('PedagogicoComponent', () => {
  let component: PedagogicoComponent;
  let fixture: ComponentFixture<PedagogicoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PedagogicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
