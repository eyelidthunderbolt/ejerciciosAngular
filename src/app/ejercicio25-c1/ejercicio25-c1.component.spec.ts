import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio25C1Component } from './ejercicio25-c1.component';

describe('Ejercicio25C1Component', () => {
  let component: Ejercicio25C1Component;
  let fixture: ComponentFixture<Ejercicio25C1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio25C1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio25C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
