import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio24PadreComponent } from './ejercicio24-padre.component';

describe('Ejercicio24PadreComponent', () => {
  let component: Ejercicio24PadreComponent;
  let fixture: ComponentFixture<Ejercicio24PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio24PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio24PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
