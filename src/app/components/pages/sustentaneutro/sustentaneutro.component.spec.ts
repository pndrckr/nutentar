/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SustentaneutroComponent } from './sustentaneutro.component';

describe('SustentaneutroComponent', () => {
  let component: SustentaneutroComponent;
  let fixture: ComponentFixture<SustentaneutroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustentaneutroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustentaneutroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
