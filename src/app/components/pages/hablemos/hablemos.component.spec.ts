/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HablemosComponent } from './hablemos.component';

describe('HablemosComponent', () => {
  let component: HablemosComponent;
  let fixture: ComponentFixture<HablemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HablemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HablemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
