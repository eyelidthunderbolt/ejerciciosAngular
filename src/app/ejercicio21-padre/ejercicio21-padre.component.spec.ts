import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio21PadreComponent } from './ejercicio21-padre.component';

describe('Ejercicio21PadreComponent', () => {
  let component: Ejercicio21PadreComponent;
  let fixture: ComponentFixture<Ejercicio21PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio21PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio21PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
