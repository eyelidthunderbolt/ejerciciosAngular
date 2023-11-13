import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio23PadreComponent } from './ejercicio23-padre.component';

describe('Ejercicio23PadreComponent', () => {
  let component: Ejercicio23PadreComponent;
  let fixture: ComponentFixture<Ejercicio23PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio23PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio23PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
