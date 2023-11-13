import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio20ExternoComponent } from './ejercicio20-externo.component';

describe('Ejercicio20ExternoComponent', () => {
  let component: Ejercicio20ExternoComponent;
  let fixture: ComponentFixture<Ejercicio20ExternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio20ExternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio20ExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
