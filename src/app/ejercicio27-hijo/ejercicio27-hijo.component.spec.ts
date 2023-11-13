import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio27HijoComponent } from './ejercicio27-hijo.component';

describe('Ejercicio27HijoComponent', () => {
  let component: Ejercicio27HijoComponent;
  let fixture: ComponentFixture<Ejercicio27HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio27HijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio27HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
