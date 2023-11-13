import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio11Component } from './ejercicio11.component';

describe('Ejercicio11Component', () => {
  let component: Ejercicio11Component;
  let fixture: ComponentFixture<Ejercicio11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio11Component]
    });
    fixture = TestBed.createComponent(Ejercicio11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
