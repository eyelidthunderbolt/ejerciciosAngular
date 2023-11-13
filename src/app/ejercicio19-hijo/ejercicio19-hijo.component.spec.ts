import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio19HijoComponent } from './ejercicio19-hijo.component';

describe('Ejercicio19HijoComponent', () => {
  let component: Ejercicio19HijoComponent;
  let fixture: ComponentFixture<Ejercicio19HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio19HijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio19HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
