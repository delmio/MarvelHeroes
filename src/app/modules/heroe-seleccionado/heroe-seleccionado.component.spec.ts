import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeSeleccionadoComponent } from './heroe-seleccionado.component';

describe('HeroeSeleccionadoComponent', () => {
  let component: HeroeSeleccionadoComponent;
  let fixture: ComponentFixture<HeroeSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeSeleccionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
