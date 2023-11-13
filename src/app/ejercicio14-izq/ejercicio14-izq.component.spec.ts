import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio14IzqComponent } from './ejercicio14-izq.component';

describe('Ejercicio14IzqComponent', () => {
  let component: Ejercicio14IzqComponent;
  let fixture: ComponentFixture<Ejercicio14IzqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio14IzqComponent]
    });
    fixture = TestBed.createComponent(Ejercicio14IzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
