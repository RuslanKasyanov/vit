import { Component, OnInit } from '@angular/core';
import { TasksService } from './pomodoro-tasks.service';
import {PomodoreTaskIconsComponent} from '../pomodore-task-icons/pomodore-task-icons.component';

@Component({
  selector: 'app-pomodoro-tasks',
  entryComponents: [PomodoreTaskIconsComponent],
  templateUrl: './pomodoro-tasks.component.html',
  styleUrls: ['./pomodoro-tasks.component.css']
})
export class PomodoroTasksComponent implements OnInit {
  today: Date;
  tasks: Task[];
  queuedPomodoros: number;
  queueHeaderMapping: any = {
    '=0': 'No pomodoros',
    '=1': 'One pomodore',
    'other': '# pomodores'
  };
  constructor() {
    const taskService: TasksService = new TasksService();
    this.tasks = taskService.taskStore;
    this.today = new Date();
  }
  toggleTask (task: Task): void {
    task.queued = !task.queued;
    this.updateQueuedPomodoros();
  }
  private updateQueuedPomodoros(): void {
    this.queuedPomodoros = this.tasks.
    filter((task: Task) => task.queued)
      .reduce((pomodoros: number, queuedTask: Task) => {
      return pomodoros + queuedTask.pomodoroRequired;
      }, 0);
  }

  ngOnInit() {
  }

}
