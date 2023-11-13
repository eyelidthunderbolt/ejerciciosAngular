import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio16derComponent } from './ejercicio16der.component';

describe('Ejercicio16derComponent', () => {
  let component: Ejercicio16derComponent;
  let fixture: ComponentFixture<Ejercicio16derComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio16derComponent]
    });
    fixture = TestBed.createComponent(Ejercicio16derComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
