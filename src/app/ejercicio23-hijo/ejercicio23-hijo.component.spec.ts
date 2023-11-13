import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio23HijoComponent } from './ejercicio23-hijo.component';

describe('Ejercicio23HijoComponent', () => {
  let component: Ejercicio23HijoComponent;
  let fixture: ComponentFixture<Ejercicio23HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio23HijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio23HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
