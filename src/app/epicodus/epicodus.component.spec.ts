/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EpicodusComponent } from './epicodus.component';

describe('EpicodusComponent', () => {
  let component: EpicodusComponent;
  let fixture: ComponentFixture<EpicodusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicodusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicodusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
