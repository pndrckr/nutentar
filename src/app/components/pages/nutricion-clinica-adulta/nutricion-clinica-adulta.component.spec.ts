/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NutricionClinicaAdultaComponent } from './nutricion-clinica-adulta.component';

describe('NutricionClinicaAdultaComponent', () => {
  let component: NutricionClinicaAdultaComponent;
  let fixture: ComponentFixture<NutricionClinicaAdultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutricionClinicaAdultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutricionClinicaAdultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
