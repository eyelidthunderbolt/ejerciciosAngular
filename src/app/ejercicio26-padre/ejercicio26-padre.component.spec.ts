import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio26PadreComponent } from './ejercicio26-padre.component';

describe('Ejercicio26PadreComponent', () => {
  let component: Ejercicio26PadreComponent;
  let fixture: ComponentFixture<Ejercicio26PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio26PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio26PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
