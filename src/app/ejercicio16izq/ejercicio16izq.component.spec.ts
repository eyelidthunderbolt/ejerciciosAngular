import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio16izqComponent } from './ejercicio16izq.component';

describe('Ejercicio16izqComponent', () => {
  let component: Ejercicio16izqComponent;
  let fixture: ComponentFixture<Ejercicio16izqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio16izqComponent]
    });
    fixture = TestBed.createComponent(Ejercicio16izqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
