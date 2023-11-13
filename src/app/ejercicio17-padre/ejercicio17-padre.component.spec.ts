import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio17PadreComponent } from './ejercicio17-padre.component';

describe('Ejercicio17PadreComponent', () => {
  let component: Ejercicio17PadreComponent;
  let fixture: ComponentFixture<Ejercicio17PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio17PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio17PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
