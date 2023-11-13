import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio18HijoComponent } from './ejercicio18-hijo.component';

describe('Ejercicio18HijoComponent', () => {
  let component: Ejercicio18HijoComponent;
  let fixture: ComponentFixture<Ejercicio18HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio18HijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio18HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
