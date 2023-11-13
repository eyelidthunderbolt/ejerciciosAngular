import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio4RepasoComponent } from './ejercicio4-repaso.component';

describe('Ejercicio4RepasoComponent', () => {
  let component: Ejercicio4RepasoComponent;
  let fixture: ComponentFixture<Ejercicio4RepasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio4RepasoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio4RepasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
