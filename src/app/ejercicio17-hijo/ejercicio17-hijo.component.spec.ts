import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio17HijoComponent } from './ejercicio17-hijo.component';

describe('Ejercicio17HijoComponent', () => {
  let component: Ejercicio17HijoComponent;
  let fixture: ComponentFixture<Ejercicio17HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio17HijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio17HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
