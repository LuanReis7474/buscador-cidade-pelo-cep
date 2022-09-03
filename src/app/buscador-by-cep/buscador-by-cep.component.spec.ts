import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorByCepComponent } from './buscador-by-cep.component';

describe('BuscadorByCepComponent', () => {
  let component: BuscadorByCepComponent;
  let fixture: ComponentFixture<BuscadorByCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorByCepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorByCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
