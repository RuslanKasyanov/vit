/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PomodoroTasksComponent } from './pomodoro-tasks.component';

describe('PomodoroTasksComponent', () => {
  let component: PomodoroTasksComponent;
  let fixture: ComponentFixture<PomodoroTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
