import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoreTaskIconsComponent } from './pomodore-task-icons.component';

describe('PomodoreTaskIconsComponent', () => {
  let component: PomodoreTaskIconsComponent;
  let fixture: ComponentFixture<PomodoreTaskIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoreTaskIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoreTaskIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
