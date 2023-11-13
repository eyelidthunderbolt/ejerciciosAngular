import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio14DerComponent } from './ejercicio14-der.component';

describe('Ejercicio14DerComponent', () => {
  let component: Ejercicio14DerComponent;
  let fixture: ComponentFixture<Ejercicio14DerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio14DerComponent]
    });
    fixture = TestBed.createComponent(Ejercicio14DerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
