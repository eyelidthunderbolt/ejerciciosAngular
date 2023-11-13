import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio27PadreComponent } from './ejercicio27-padre.component';

describe('Ejercicio27PadreComponent', () => {
  let component: Ejercicio27PadreComponent;
  let fixture: ComponentFixture<Ejercicio27PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio27PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio27PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
