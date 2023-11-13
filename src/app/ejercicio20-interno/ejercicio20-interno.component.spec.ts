import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio20InternoComponent } from './ejercicio20-interno.component';

describe('Ejercicio20InternoComponent', () => {
  let component: Ejercicio20InternoComponent;
  let fixture: ComponentFixture<Ejercicio20InternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio20InternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio20InternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
