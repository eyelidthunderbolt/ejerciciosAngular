import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio15IzqComponent } from './ejercicio15-izq.component';

describe('Ejercicio15IzqComponent', () => {
  let component: Ejercicio15IzqComponent;
  let fixture: ComponentFixture<Ejercicio15IzqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio15IzqComponent]
    });
    fixture = TestBed.createComponent(Ejercicio15IzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
