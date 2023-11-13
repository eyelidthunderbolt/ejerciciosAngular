import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio24HijoComponent } from './ejercicio24-hijo.component';

describe('Ejercicio24HijoComponent', () => {
  let component: Ejercicio24HijoComponent;
  let fixture: ComponentFixture<Ejercicio24HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio24HijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio24HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
