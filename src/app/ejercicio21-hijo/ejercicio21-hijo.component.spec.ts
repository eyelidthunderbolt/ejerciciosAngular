import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio21HijoComponent } from './ejercicio21-hijo.component';

describe('Ejercicio21HijoComponent', () => {
  let component: Ejercicio21HijoComponent;
  let fixture: ComponentFixture<Ejercicio21HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio21HijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio21HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
