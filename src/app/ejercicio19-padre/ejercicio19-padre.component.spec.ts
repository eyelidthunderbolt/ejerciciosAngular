import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio19PadreComponent } from './ejercicio19-padre.component';

describe('Ejercicio19PadreComponent', () => {
  let component: Ejercicio19PadreComponent;
  let fixture: ComponentFixture<Ejercicio19PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio19PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio19PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
