import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio26HijoComponent } from './ejercicio26-hijo.component';

describe('Ejercicio26HijoComponent', () => {
  let component: Ejercicio26HijoComponent;
  let fixture: ComponentFixture<Ejercicio26HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio26HijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio26HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
