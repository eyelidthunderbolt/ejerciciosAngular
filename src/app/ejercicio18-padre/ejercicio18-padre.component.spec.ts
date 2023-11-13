import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio18PadreComponent } from './ejercicio18-padre.component';

describe('Ejercicio18PadreComponent', () => {
  let component: Ejercicio18PadreComponent;
  let fixture: ComponentFixture<Ejercicio18PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio18PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio18PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
