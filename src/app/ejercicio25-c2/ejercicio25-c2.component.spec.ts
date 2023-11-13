import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio25C2Component } from './ejercicio25-c2.component';

describe('Ejercicio25C2Component', () => {
  let component: Ejercicio25C2Component;
  let fixture: ComponentFixture<Ejercicio25C2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio25C2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio25C2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
