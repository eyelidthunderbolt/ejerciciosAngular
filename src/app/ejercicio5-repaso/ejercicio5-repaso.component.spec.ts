import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio5RepasoComponent } from './ejercicio5-repaso.component';

describe('Ejercicio5RepasoComponent', () => {
  let component: Ejercicio5RepasoComponent;
  let fixture: ComponentFixture<Ejercicio5RepasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio5RepasoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio5RepasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
