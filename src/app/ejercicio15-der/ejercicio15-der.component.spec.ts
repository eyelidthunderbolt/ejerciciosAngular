import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio15DerComponent } from './ejercicio15-der.component';

describe('Ejercicio15DerComponent', () => {
  let component: Ejercicio15DerComponent;
  let fixture: ComponentFixture<Ejercicio15DerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio15DerComponent]
    });
    fixture = TestBed.createComponent(Ejercicio15DerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
