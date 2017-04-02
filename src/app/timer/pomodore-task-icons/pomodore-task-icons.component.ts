import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pomodore-task-icons',
  templateUrl: './pomodore-task-icons.component.html',
  styleUrls: ['./pomodore-task-icons.component.css']
})
export class PomodoreTaskIconsComponent implements OnInit {

  @Input() task: Task;
  icons: Object[] = [];
  @Input() size: number;
  constructor() { }

  ngOnInit() {
    this.icons.length = this.task.pomodoroRequired;
    this.icons.fill({name: this.task.name});
  }

}
