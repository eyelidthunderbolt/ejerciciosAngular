import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio6RepasoComponent } from './ejercicio6-repaso.component';

describe('Ejercicio6RepasoComponent', () => {
  let component: Ejercicio6RepasoComponent;
  let fixture: ComponentFixture<Ejercicio6RepasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio6RepasoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio6RepasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
