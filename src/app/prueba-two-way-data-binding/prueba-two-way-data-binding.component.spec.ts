import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaTwoWayDataBindingComponent } from './prueba-two-way-data-binding.component';

describe('PruebaTwoWayDataBindingComponent', () => {
  let component: PruebaTwoWayDataBindingComponent;
  let fixture: ComponentFixture<PruebaTwoWayDataBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaTwoWayDataBindingComponent]
    });
    fixture = TestBed.createComponent(PruebaTwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
