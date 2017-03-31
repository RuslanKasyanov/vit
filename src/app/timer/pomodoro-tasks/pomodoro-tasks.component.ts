import { Component, OnInit } from '@angular/core';
import { TasksService } from './pomodoro-tasks.service';

@Component({
  selector: 'pomodoro-tasks',
  templateUrl: './pomodoro-tasks.component.html',
  styleUrls: ['./pomodoro-tasks.component.css']
})
export class PomodoroTasksComponent implements OnInit {
  today: Date;
  tasks: Task[];

  constructor() {
    const taskService : TasksService = new TasksService();
    this.tasks = taskService.taskStore;
    this.today = new Date();
  }

  ngOnInit() {
  }

}
