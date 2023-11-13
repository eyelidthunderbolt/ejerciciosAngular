import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio3RepasoComponent } from './ejercicio3-repaso.component';

describe('Ejercicio3RepasoComponent', () => {
  let component: Ejercicio3RepasoComponent;
  let fixture: ComponentFixture<Ejercicio3RepasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio3RepasoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio3RepasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
