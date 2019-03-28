import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPacientePage } from './detalhes-paciente.page';

describe('DetalhesPacientePage', () => {
  let component: DetalhesPacientePage;
  let fixture: ComponentFixture<DetalhesPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesPacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
